import React from 'react';
import {
    Text,
    Animated,
    VrButton
} from 'react-vr';

const Easing = require('Easing');

class OldImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bounceValue: new Animated.Value(0),
            animatedTranslation: new Animated.Value(0)
        };
    }

    componentDidMount() {
        this.state.bounceValue.setValue(1.5);
        Animated.spring(
            this.state.bounceValue,
            {
                toValue: 0.8,
                friction: 5
            }).start();
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
        return (
            <VrButton
                onClick={() => this.props.onClick()}
                onEnter={() => this.animateIn()}
                onExit={() => this.animateOut()}
            >
                <Animated.Image
                    source={this.props.source}
                    style={{
                        ...this.props.style,
                        flex: 1,
                        transform: [
                            ...this.props.style.transform,
                            { scale: this.state.bounceValue },
                            { translateZ: this.state.animatedTranslation }
                    ]}}>
                    <Text style={{
                        backgroundColor: 'gray',
                        fontSize: 0.5,
                        width: 1.5,
                        color: 'white'
                    }}>{this.props.year}</Text>
                </Animated.Image>
        </VrButton>);
    }
}

export default OldImage;