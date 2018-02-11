import { Animated, VrHeadModel } from 'react-vr';

const cameraMixin = Base => class extends Base {

    constructor(...args) {
        super(args);
        this.headsetRotation = VrHeadModel.rotation();
        this.state = { ...this.state, rotateY: new Animated.Value(0) };
    }

    rotateCamera(offset = 0) {
        this.headsetRotation = VrHeadModel.rotation();
        const [ , rotateY ] = this.headsetRotation || [];

        Animated.timing(
            this.state.rotateY,
            {
                toValue: rotateY + offset,
                duration: 600
            }
        ).start();
    }

};

export default cameraMixin;