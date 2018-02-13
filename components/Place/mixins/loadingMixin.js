import { Animated, VrHeadModel, NativeModules } from 'react-vr';

const { DomOverlayModule } = NativeModules;

const cameraMixin = Base => class extends Base {

    constructor(props) {
        super(props);
        this.state = { ...this.state, loading: false };
    }

    startLoading() {
        this.setState({ loading: true });
        if (VrHeadModel.inVR()) {
            // TODO render VR loading indicator
        } else {
            DomOverlayModule.loading();
        }
    }

    stopLoading() {
        this.setState({ loading: false });
        if (VrHeadModel.inVR()) {
            // TODO hide VR loading indicator
        } else {
            DomOverlayModule.closeOverlay();
        }
    }

};

export default cameraMixin;