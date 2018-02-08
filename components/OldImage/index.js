import React from 'react';
import { Text, Animated, VrButton, asset } from 'react-vr';

import styles from './styles';

const Easing = require('Easing');

/**
 * Старое изображение - VR-компонент, который отображает старую фотографию или
 * картину какого-то объекта, также отображается метка с годом создания этой фотографии.
 *
 * Полный путь в изображению указывается в свойстве 'source'.
 */
class OldImage extends React.Component {
    /**
     * 
     * @param args
     */
    constructor(...args) {
        super(...args);
        this.state = {
            opacity: new Animated.Value(0.1),
            scale: new Animated.Value(0.1),
            translate: new Animated.Value(0)
        };
    }

    /**
     * 
     */
    componentDidMount() {
        Animated.parallel([
            Animated
                .timing(
                    this.state.scale,
                    { toValue: 0.8, duration: 500, easing: Easing.in }
                ),
            Animated
                .timing(
                    this.state.opacity,
                    { toValue: 1, duration: 800, easing: Easing.in }
                )
        ]).start();
    }

    /**
     * 
     */
    mouseIn() {
        Animated.timing(
            this.state.translate,
            { toValue: 1.5, duration: 100, easing: Easing.in }
        ).start();
    }

    /**
     * 
     */
    mouseOut() {
        Animated.timing(
            this.state.translate,
            { toValue: 0, duration: 100, easing: Easing.in }
        ).start();
    }

    /**
     * 
     * @returns {XML}
     */
    render() {
        const { style: { transform, width, height }, source, year, onClick } = this.props;
        const { opacity, scale, translate } = this.state;

        return (
            <VrButton
                style={[
                    styles.button,
                    {
                        width,
                        height,
                        transform: [...transform]
                    }
                ]}
                onClick={() => onClick()}
                onEnter={() => this.mouseIn()}
                onExit={() => this.mouseOut()}
            >
                <Animated.Image
                    style={[
                        styles.image,
                        {
                            opacity,
                            width,
                            height,
                            transform: [{ scale }, { translateZ: translate }]
                        }
                    ]}
                    source={asset(source)}>
                    <Text style={styles.yearLabel}>
                        {year}
                    </Text>
                </Animated.Image>
        </VrButton>);
    }
}

export default OldImage;