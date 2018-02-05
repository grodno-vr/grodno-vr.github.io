import React from 'react';
import { asset, Animated, VrButton, Sphere, Box } from 'react-vr';

import styles from './styles';

const Easing = require('Easing');

const AnimatedSphere = Animated.createAnimatedComponent(Sphere);
const AnimatedBox = Animated.createAnimatedComponent(Box);

class Portal extends React.Component {

    constructor() {
        super();
        this.state = {
            animationRequestId: null,
            animatedScale: new Animated.Value(1),
            rotate: 0,
            opacity: new Animated.Value(0.75),
            borderOpacity: new Animated.Value(0.2),
            arrowOpacity: new Animated.Value(0.8)
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
        Animated.parallel([
            Animated.timing(
                this.state.borderOpacity,
                {
                    toValue: 0,
                    duration: 600,
                    easing: Easing.in
                }
            ),
            Animated.timing(
                this.state.arrowOpacity,
                {
                    toValue: 0,
                    duration: 600,
                    easing: Easing.in
                }
            ),
            Animated.timing(
                this.state.opacity,
                {
                    toValue: 1,
                    duration: 500,
                    easing: Easing.in
                }
            ),
            Animated.timing(
                this.state.animatedScale,
                {
                    toValue: 2,
                    duration: 450,
                    easing: Easing.in
                }
            )
        ]).start();
    }

    mouseOut() {
        Animated.parallel([
            Animated.timing(
                this.state.borderOpacity,
                {
                    toValue: 0.2,
                    duration: 400,
                    easing: Easing.in
                }
            ),
            Animated.timing(
                this.state.arrowOpacity,
                {
                    toValue: 0.8,
                    duration: 600,
                    easing: Easing.in
                }
            ),
            Animated.timing(
                this.state.opacity,
                {
                    toValue: 0.75,
                    duration: 500,
                    easing: Easing.in
                }
            ),
            Animated.timing(
                this.state.animatedScale,
                {
                    toValue: 1,
                    duration: 450,
                    easing: Easing.in
                }
            )
        ]).start();
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
                    <AnimatedSphere
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
                    <AnimatedSphere
                        style={{
                            opacity: this.state.borderOpacity,
                            transform: [
                                { translateY: 0 }
                            ]
                        }}
                        radius={1.4}
                        widthSegments={20}
                        heightSegments={12}
                    />
                </VrButton>
                <AnimatedBox
                    texture={asset('icons/arrow.png')}
                    dimWidth={1}
                    dimDepth={1}
                    dimHeight={1}
                    style={{
                            opacity: this.state.arrowOpacity,
                            transform: [
                                { translateY: -2 },
                                { rotateY: this.state.rotate }
                            ]
                        }}
                />
            </Animated.View>
        );
    }
}

export default Portal;