import React from 'react';
import { asset, VrButton, View, Text, Image, Animated } from 'react-vr';

import styles from './styles';

class Label extends React.Component {
    constructor() {
        super();

        this.state = {
            scaleEye: new Animated.Value(1),
            scaleInfo: new Animated.Value(1)
        };
    }

    mouseIn(scale) {
        Animated.timing(
            scale,
            {
                toValue: 1.5,
                duration: 100
            }
        ).start();
    }

    mouseOut(scale) {
        Animated.timing(
            scale,
            {
                toValue: 1,
                duration: 100
            }
        ).start();
    }

    render() {
        const { props, state: { scaleEye, scaleInfo } } = this;

        return (<View style={[styles.caption, props.style]}>
            <Animated.View
                onEnter={() => this.mouseIn(scaleEye)}
                onExit={() => this.mouseOut(scaleEye)}
                style={[
                    styles.leftItem,
                    {
                        transform: [{ scale: scaleEye }]
                    }
                ]}
            >
                <VrButton onClick={props.onEyeClick}>
                    <Image
                        source={asset('icons/eye.png')}
                        style={styles.icon}
                    />
                </VrButton>
            </Animated.View>
            <Animated.View
                onEnter={() => this.mouseIn(scaleInfo)}
                onExit={() => this.mouseOut(scaleInfo)}
                style={[
                    styles.middleItem,
                    {
                        transform: [{ scale: scaleInfo }]
                    }
                ]}
            >
                <VrButton onClick={props.onInfoClick}>
                    <Image
                        source={asset('icons/info.png')}
                        style={styles.icon}
                    />
                </VrButton>
            </Animated.View>
            <View style={styles.rightItem}>
                <Text style={styles.heading}>{props.heading}</Text>
            </View>
        </View>);
    }
}

export default Label;
