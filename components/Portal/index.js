import React from 'react';
import { asset, Animated, Image, View, VrButton, Sphere } from 'react-vr';

import styles from './styles';

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
                style={[
                    styles.view,
                    {
                        transform: [
                            ...transformPortal,
                            { scale: this.state.animatedScale }
                        ]
                    }
                ]}
            >
                <VrButton onClick={() => this.props.onClick(place)}>
                    <Sphere
                        texture={asset(`/places/${place}/portal.jpg`)}
                        radius={1.1}
                        widthSegments={20}
                        heightSegments={12}
                    />
                    <View style={[styles.arrowView, { transform: [...transformArrow] }]}>
                        <Image
                            source={asset('icons/arrow.png')}
                            style={styles.arrow}
                        />
                    </View>
                </VrButton>
            </Animated.View>
        );
    }
}

export default Portal;