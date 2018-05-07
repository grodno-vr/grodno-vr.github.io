import React from 'react';
import { asset, Model, Animated } from 'react-vr';

const AnimatedModel = Animated.createAnimatedComponent(Model);
const Easing = require('Easing');

class Model3D extends React.Component {

    constructor(props) {
        super(props);
        this.state = { rotation: new Animated.Value(50) };
    }

    componentWillReceiveProps(nextProps) {
        const { rotation } = nextProps;
console.log(rotation);
        Animated.timing(
            this.state.rotation,
            {
                toValue: rotation,
                duration: 450,
                easing: Easing.in
            }
        ).start();
    }

    render() {
        const { style, obj, mtl, rotationAxis } = this.props.details || {};
        
        return (
            <AnimatedModel
                style={{
                    ...style,
                    transform: [
                        ...style.transform,
                        { [rotationAxis]: this.state.rotation }
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