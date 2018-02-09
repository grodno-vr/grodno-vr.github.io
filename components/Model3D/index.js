import React from 'react';
import { asset, Model, Animated } from 'react-vr';

const AnimatedModel = Animated.createAnimatedComponent(Model);

class Model3D extends React.Component {

    constructor(...args) {
        super(...args);
        this.state = {
            // animationRequestId: null,
            rotate: 0,
            scale: new Animated.Value(1),
            opacity: new Animated.Value(0.75)
        };
    }

    // componentDidMount() {
    //     const step = () => {
    //         this.setState({ rotate: this.state.rotate - 1 });
    //         this.animationRequestId = requestAnimationFrame(step);
    //     };
    //     this.animationRequestId = requestAnimationFrame(step);
    // }
    //
    // componentWillUnmount() {
    //     if (this.animationRequestId) {
    //         cancelAnimationFrame(this.animationRequestId);
    //     }
    // }

    mouseIn() {
        Animated.timing(
            this.state.scale,
            {
                toValue: 1.2,
                duration: 450
            }
        ).start();
    }
    
    mouseOut() {
        Animated.timing(
            this.state.scale,
            {
                toValue: 1,
                duration: 450
            }
        ).start();
    }

    render() {
        return (
            <AnimatedModel
                onEnter={() => this.mouseIn()}
                onExit={() => this.mouseOut()}
                style={{
                            transform: [
                                { translate: [-5, 10, -70] },
                                { scale: this.state.scale },
                                { rotateZ: 40 }, { rotateY: 10 }, { rotateX: 100 }
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