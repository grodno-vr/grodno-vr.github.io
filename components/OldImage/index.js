import React from 'react';
import { Text, Animated, VrButton } from 'react-vr';

import styles from './styles';

const Easing = require('Easing');

class OldImage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            animatedScale: new Animated.Value(0),
            animatedTranslation: new Animated.Value(0)
        };
    }

    componentDidMount() {
        this.state.animatedScale.setValue(1.5);
        Animated
            .spring(
                this.state.animatedScale,
                { toValue: 0.8, friction: 5 }
            )
            .start();
    }

    mouseIn() {
        Animated.timing(
            this.state.animatedTranslation,
            {
                toValue: 1.5,
                duration: 100,
                easing: Easing.in,
            }
        ).start();
    }

    mouseOut() {
        Animated.timing(
            this.state.animatedTranslation,
            {
                toValue: 0,
                duration: 100,
                easing: Easing.in,
            }
        ).start();
    }


    render() {
        const { transform, width, height } = this.props.style;
        return (
            <VrButton
                style={[
                    styles.button,
                    { width, height, transform: [...transform] }
                ]}
                onClick={() => this.props.onClick()}
                onEnter={() => this.mouseIn()}
                onExit={() => this.mouseOut()}
            >
                <Animated.Image
                    style={[
                        styles.image,
                        {
                            width,
                            height,
                            transform: [
                                { scale: this.state.animatedScale },
                                { translateZ: this.state.animatedTranslation }
                            ]
                        }
                    ]}
                    source={this.props.source}>
                    <Text style={styles.yearLabel}>{this.props.year}</Text>
                </Animated.Image>
        </VrButton>);
    }
}

export default OldImage;