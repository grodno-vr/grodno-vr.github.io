import React from 'react';
import { Animated, Image, asset } from 'react-vr';
import { GazeButton } from '../.';

import styles from './styles';

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
        const { onClick, direction } = this.props;
        const { opacity, scale } = this.state;

        return (
            <GazeButton
                onClick={() => onClick()}
                onEnter={() => this.mouseIn()}
                onExit={() => this.mouseOut()}
                style={[
                    styles.arrowButton,
                    {
                        transform: [{ scale }],
                        opacity
                    }
                ]}
            >
                <Image
                    source={asset(`icons/arrow-${direction}.png`)}
                    style={styles.arrowImage}
                />
            </GazeButton>
        );
    }
}

export default Arrow;