import React from 'react';
import { asset, Model, Animated } from 'react-vr';

const AnimatedModel = Animated.createAnimatedComponent(Model);
const Easing = require('Easing');

class Model3D extends React.Component {

    constructor(props) {
        super(props);
        this.state = { rotation: new Animated.Value(50), scale: new Animated.Value(1) };
    }

    componentWillReceiveProps(nextProps) {
        const { rotation } = nextProps;

        Animated.timing(
            this.state.rotation,
            {
                toValue: rotation,
                duration: 450,
                easing: Easing.in
            }
        ).start();
    }

    startModelScaling() {
        Animated
            .timing(
                this.state.scale,
                { toValue: 2, duration: 500, easing: Easing.in }
            ).start();
    }

    stopModelScaling() {
        Animated
            .timing(
                this.state.scale,
                { toValue: 1, duration: 500, easing: Easing.in }
            ).start();
    }

    render() {
        const { disabled, style, obj, mtl, rotationAxis } = this.props.details || {};
        const transform = [...style.transform, { scale: this.state.scale } ];

        if (rotationAxis) {
            transform.push({ [rotationAxis]: this.state.rotation });
        }

        return (
            <AnimatedModel
                onEnter={() => !disabled && this.startModelScaling()}
                onExit={() => !disabled && this.stopModelScaling()}
                style={{
                    ...style,
                    transform
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