import React from 'react';
import { Text, Animated, VrButton } from 'react-vr';

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
            .spring(this.state.animatedScale, { toValue: 0.8, friction: 5 })
            .start();
    }

    animateIn() {
        Animated.timing(
            this.state.animatedTranslation,
            {
                toValue: 1.5,
                duration: 100,
                easing: Easing.in,
            }
        ).start();
    }

    animateOut() {
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
                style={{ width, height, flex: 1, transform: [...transform]}}
                onClick={() => this.props.onClick()}
                onEnter={() => this.animateIn()}
                onExit={() => this.animateOut()}
            >
                <Animated.Image
                    style={{
                        width,
                        height,
                        // TODO: we have a bug in Chrome with border (border blinking)
                        // borderWidth: 0.1,
                        // borderColor: 'gray',
                        // borderRadius: 0.6,
                        transform: [
                            { scale: this.state.animatedScale },
                            { translateZ: this.state.animatedTranslation }
                        ]}}
                    source={this.props.source}>
                    <Text style={{
                        backgroundColor: 'gray',
                        textAlign: 'center',
                        fontSize: 0.5,
                        width: 1.5,
                        color: 'white'
                    }}>{this.props.year}</Text>
                </Animated.Image>
        </VrButton>);
    }
}

export default OldImage;