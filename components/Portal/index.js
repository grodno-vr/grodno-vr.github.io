import React from 'react';
import { asset, Animated, Image, View, VrButton, Sphere, Box } from 'react-vr';

import styles from './styles';

const Easing = require('Easing');

class Portal extends React.Component {

    constructor() {
        super();
        this.state = {
            animationRequestId: null,
            animatedScale: new Animated.Value(1),
            rotate: 0,
            opacity: 0.75,
            showArrow: true
        };
        this.timer = null;
    }

    componentDidMount() {
        const step = () => {
            this.setState({ rotate: this.state.rotate - 1 });
            this.animationRequestId = requestAnimationFrame(step);
        };
        this.animationRequestId = requestAnimationFrame(step);
    }

    componentWillUnmount() {
        if (this.animationRequestId) {
            cancelAnimationFrame(this.animationRequestId);
        }
    }

    mouseIn() {
        Animated.timing(
            this.state.animatedScale,
            {
                toValue: 2,
                duration: 400,
                easing: Easing.in,
            }
        ).start();
        this.setState({ opacity: 1, showArrow: false });
    }

    mouseOut() {
        Animated.timing(
            this.state.animatedScale,
            {
                toValue: 1,
                duration: 400,
                easing: Easing.in,
            }
        ).start();
        this.setState({ opacity: 0.75, showArrow: true });
    }

    render() {
        const { transformPortal, place } = this.props;

        return (
            <Animated.View
                style={[
                    styles.view,
                    this.props.style,
                    {
                        transform: [
                            ...transformPortal,
                            { scale: this.state.animatedScale }
                        ]
                    }
                ]}
            >
                <VrButton
                    onClick={() => this.props.onClick(place)}
                    onEnter={() => this.mouseIn()}
                    onExit={() => this.mouseOut()}
                >
                    <Sphere
                        style={{
                            opacity: this.state.opacity,
                            transform: [
                                { translateY: 0 },
                                { rotateY: this.state.rotate }
                            ]
                        }}
                        texture={asset(`/places/${place}/portal.jpg`)}
                        radius={1.1}
                        widthSegments={20}
                        heightSegments={12}
                    />
                </VrButton>
                { this.state.showArrow && <Box
                    texture={asset('icons/arrow.png')}
                    dimWidth={1}
                    dimDepth={1}
                    dimHeight={1}
                    style={{
                            opacity: 0.8,
                            transform: [
                                { translateY: -2 },
                                { rotateY: this.state.rotate }
                            ]
                        }}
                />}
            </Animated.View>
        );
    }
}

export default Portal;