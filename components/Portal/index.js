import React from 'react';
import { asset, Animated, Image, View, VrButton, Sphere } from 'react-vr';

import styles from './styles';

const Easing = require('Easing');

class Portal extends React.Component {

    constructor() {
        super();
        this.state = { animatedScale: new Animated.Value(1), rotate: 0 };
        this.timer = null;
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            console.log(123);
            this.setState({ rotate: this.state.rotate - 1 });
        }, 5);
    }

    componentWillUnmount() {
        if (this.timer) clearInterval(this.timer);
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
                    this.props.style,
                    {
                        borderWidth: 0.2,
                        borderColor: 'white',
                        transform: [
                            ...transformPortal,
                            { scale: this.state.animatedScale }
                        ]
                    }
                ]}
            >
                <VrButton onClick={() => this.props.onClick(place)}>
                    <Sphere
                        style={{transform: [
                            { rotateY: this.state.rotate }
                        ]}}
                        texture={asset(`/places/${place}/portal.jpg`)}
                        radius={1}
                        widthSegments={20}
                        heightSegments={12}
                    />
                    {/*<View style={[styles.arrowView, { transform: [...transformArrow] }]}>*/}
                        {/*<Image*/}
                            {/*source={asset('icons/arrow.png')}*/}
                            {/*style={styles.arrow}*/}
                        {/*/>*/}
                    {/*</View>*/}
                </VrButton>
            </Animated.View>
        );
    }
}

export default Portal;