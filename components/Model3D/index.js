import React from 'react';
import { asset, Model, Animated, VrButton, Image, View } from 'react-vr';

const AnimatedModel = Animated.createAnimatedComponent(Model);

class Model3D extends React.Component {

    constructor(...args) {
        super(...args);
        this.state = {
            animationRequestId: null,
            rotation: new Animated.Value(50)
        };
    }

    componentWillReceiveProps(nextProps) {
        const { rotate } = nextProps;
        Animated.timing(
            this.state.rotation,
            {
                toValue: rotate,
                duration: 450
            }
        ).start();
    }

    render() {
        const { style, obj, mtl } = this.props.details || {};

        return (
            <AnimatedModel
                style={{
                        ...style,
                        transform: [
                            ...style.transform,
                            { rotateY: this.state.rotation }
                        ]
                    }}
                lit={true}
                source={{
                    obj: asset(obj),
                    mtl: asset(mtl)
                }}
            />
        );
    }
}

export default Model3D;