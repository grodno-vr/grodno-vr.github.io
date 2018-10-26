import React from 'react';
import { VrHeadModel, NativeModules } from 'react-vr';
import { VRLoading } from '../../../components'

const { DomOverlayModule } = NativeModules;

const loadingMixin = Base => class extends Base {

    constructor(props) {
        super(props);
        this.state = { ...this.state, loading: false };
    }

    loadingText() {
        const { locale } = this.props;
        return locale === 'ru' ? 'Загрузка...' : 'Loading...';
    }
    
    renderLoading() {
        return this.state.loading
            && VrHeadModel.inVR()
            && <VRLoading text={this.loadingText()} />;
    }

    startLoading() {
        this.setState({ loading: true });
        if (!VrHeadModel.inVR()) {
            DomOverlayModule.loading({ text: this.loadingText() });
        }
    }

    stopLoading() {
        this.setState({ loading: false });
        if (!VrHeadModel.inVR()) {
            DomOverlayModule.closeOverlay();
        }
    }

};

export default loadingMixin;