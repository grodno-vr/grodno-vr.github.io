import React from 'react';
import { Animated, Text, View, Image, asset } from 'react-vr';
import { GazeButton } from '../.';

import styles from './styles';

const Easing = require('Easing');

class Close extends React.Component {

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
                    { toValue: 1.3, duration: 800, easing: Easing.in }
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
        const { onClick } = this.props;
        const { opacity, scale } = this.state;

        return (
            <View style={styles.centerView}>
                <GazeButton
                    onClick={() => onClick()}
                    onEnter={() => this.mouseIn()}
                    onExit={() => this.mouseOut()}
                    onEnterSound={asset('audio/hover-1.wav')}
                    style={[
                        styles.closeButton,
                        {
                            transform: [{ scale }],
                            opacity
                        }
                    ]}
                >
                    <Image
                        source={asset('icons/x.png')}
                        style={styles.closeImage}
                    />
                </GazeButton>
                <Text style={styles.tooltipButton}>
                    Close
                </Text>
            </View>
        );
    }
}

export default Close;