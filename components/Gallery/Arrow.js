import React from 'react';
import { Animated, VrButton, Image, asset } from 'react-vr';

const AnimatedButton = Animated.createAnimatedComponent(VrButton);
const Easing = require('Easing');

class Arrow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity: new Animated.Value(0.4),
            scale: new Animated.Value(1)
        };
    }

    mouseIn() {
        Animated.parallel([
            Animated
                .timing(
                    this.state.opacity,
                    { toValue: 1, duration: 500, easing: Easing.in }
                ),
            Animated
                .timing(
                    this.state.scale,
                    { toValue: 1.1, duration: 800, easing: Easing.in }
                )
        ]).start();
    }

    mouseOut() {
        Animated.parallel([
            Animated
                .timing(
                    this.state.opacity,
                    { toValue: 0.4, duration: 500, easing: Easing.in }
                ),
            Animated
                .timing(
                    this.state.scale,
                    { toValue: 1, duration: 800, easing: Easing.in }
                )
        ]).start();
    }

    render() {
        const { img, onClick } = this.props;
        const { opacity, scale } = this.state;

        return (
            <AnimatedButton
                onClick={() => onClick()}
                onEnter={() => this.mouseIn()}
                onExit={() => this.mouseOut()}
                style={{
                    transform: [{ scale }],
                    width: 2,
                    height: 2,
                    opacity,
                    margin: 0.5,
                    borderRadius: 0.5,
                    backgroundColor: 'black',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Image
                    source={asset(img)}
                    style={{
                    width: 1.5,
                    height: 1.5
                }}
                />
            </AnimatedButton>
        );
    }
}

export default Arrow;