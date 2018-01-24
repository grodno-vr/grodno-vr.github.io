import React from 'react';
import { asset, Animated, Image, View, Sphere } from 'react-vr';

const Easing = require('Easing');

class Portal extends React.Component {

    constructor() {
        super();
        this.state = { animatedScale: new Animated.Value(1) };
    }

    mouseIn() {
        Animated.timing(
            this.state.animatedScale,
            {
                toValue: 2,
                duration: 100,
                easing: Easing.in,
            }
        ).start();
    }

    mouseOut() {
        Animated.timing(
            this.state.animatedScale,
            {
                toValue: 1,
                duration: 100,
                easing: Easing.in,
            }
        ).start();
    }

    render() {
        const {
            transformPortal,
            transformArrow,
            place
        } = this.props;

        return (
            <Animated.View
                onEnter={() => this.mouseIn()}
                onExit={() => this.mouseOut()}
                style={{
                    position: 'absolute',
                    transform: [
                        ...transformPortal,
                        { scale: this.state.animatedScale }
                    ]
                }}
            >
                <Sphere
                    texture={asset(`/places/${place}/portal.jpg`)}
                    radius={1.1}
                    widthSegments={20}
                    heightSegments={12}
                />
                <View
                    style={{
                        position: 'absolute',
                        height: 1,
                        width: 1,
                        backgroundColor: 'black',
                        borderRadius: 0.5,
                        transform: [...transformArrow]
                    }}
                >
                    <Image
                        source={asset('icons/arrow.png')}
                        style={{
                            height: 1,
                            width: 1
                        }}
                    />
                </View>
            </Animated.View>
        );
    }
}

export default Portal;