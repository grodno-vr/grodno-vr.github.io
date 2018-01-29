import React from 'react';
import { asset, Animated, VrButton, Sphere, Box } from 'react-vr';

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
        this.setState({ showArrow: false, opacity: 1 });
        Animated.timing(
            this.state.animatedScale,
            {
                toValue: 2,
                duration: 450,
                easing: Easing.in,
            }
        ).start();
    }

    mouseOut() {
        this.setState({ showArrow: true, opacity: 0.75 });
        Animated.timing(
            this.state.animatedScale,
            {
                toValue: 1,
                duration: 450,
                easing: Easing.in,
            }
        ).start();
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