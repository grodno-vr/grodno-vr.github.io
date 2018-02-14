import React from 'react';
import { VrHeadModel, NativeModules } from 'react-vr';
import { VRLoading } from '../../../components'

const { DomOverlayModule } = NativeModules;

const cameraMixin = Base => class extends Base {

    constructor(props) {
        super(props);
        this.state = { ...this.state, loading: false };
    }
    
    renderLoading() {
        return this.state.loading && VrHeadModel.inVR() && <VRLoading />;
    }

    startLoading() {
        this.setState({ loading: true });
        if (!VrHeadModel.inVR()) {
            DomOverlayModule.loading();
        }
    }

    stopLoading() {
        this.setState({ loading: false });
        if (!VrHeadModel.inVR()) {
            DomOverlayModule.closeOverlay();
        }
    }

};

export default cameraMixin;