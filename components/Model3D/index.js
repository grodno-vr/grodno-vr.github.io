import React from 'react';
import { asset, Model, Animated, VrButton, Image, View } from 'react-vr';

const AnimatedModel = Animated.createAnimatedComponent(Model);

class Model3D extends React.Component {

    constructor(...args) {
        super(...args);
        this.state = {
            animationRequestId: null,
            rotate: new Animated.Value(8.1)
        };
    }

    componentWillReceiveProps(nextProps) {
        const { rotate } = nextProps;
        Animated.timing(
            this.state.rotate,
            {
                toValue: rotate,
                duration: 450
            }
        ).start();
    }

    // rotate() {
    //     this.setState({ rotate: this.state.rotate + 1 });
    //     // Animated.timing(
    //     //     this.state.rotate,
    //     //     {
    //     //         toValue: 1,
    //     //         duration: 450
    //     //     }
    //     // ).start();
    // }

    render() {
        return (
            <AnimatedModel
                style={{
                        transform: [
                            { translate: [-5, 8, -67] },
                            { rotateZ: 40 }, { rotateY: this.state.rotate }, { rotateX: 100 }
                        ]
                    }}
                lit={true}
                source={{
                    obj: asset('models/coat/coat_clean.obj'),
                    mtl: asset('models/coat/coat_clean_tex.mtl')
                }}
            />
        );
    }
}

export default Model3D;