import React from 'react';
import { Text, View, Animated, asset } from 'react-vr';

import Arrow from './Arrow';
import Close from './Close';
import styles from './styles';

const Easing = require('Easing');

class Gallery extends React.Component {

    constructor(props) {
        super(props);
        this._initRotate = 0;
        this.state = {
            rotateY: new Animated.Value(0),
            selectedImage: 0,
            opacity: new Animated.Value(0.1),
            scale: new Animated.Value(0.1)
        };
    }

    componentDidMount() {
        this.rotateOnce();
    }

    rotateOnce() {
        this._initRotate = this._initRotate === -5 ? 5 : -5;
        Animated.timing(this.state.rotateY, {
            toValue: this._initRotate,
            duration: 1600
        }).start(() => this.rotateOnce());
    }

    nextImage(step) {
        const { images = [] } = this.props; 
        let nextImageIndex = this.state.selectedImage + step;

        if (nextImageIndex < 0) {
            nextImageIndex = images.length - 1;
        }

        if (nextImageIndex >= images.length) {
            nextImageIndex = 0;
        }

        Animated.parallel([
            Animated
                .timing(
                    this.state.scale,
                    { toValue: 0.1, duration: 600, easing: Easing.in }
                ),
            Animated
                .timing(
                    this.state.opacity,
                    { toValue: 0.1, duration: 600, easing: Easing.in }
                )
        ]).start(() => this.setState({ selectedImage: nextImageIndex }));
    }

    imageLoadHandler() {
        Animated.parallel([
            Animated
                .timing(
                    this.state.scale,
                    { toValue: 1, duration: 300, easing: Easing.in }
                ),
            Animated
                .timing(
                    this.state.opacity,
                    { toValue: 1, duration: 400, easing: Easing.in }
                )
        ]).start();
    }

    render() {
        const { selectedImage, scale, opacity } = this.state;
        const { images = [], locale = 'en', style, onClose } = this.props;
        const currentImage = images[selectedImage] || {};

        return (
            <Animated.View
                style={[
                    styles.galleryView,
                    {
                        transform: [{ scale }],
                        opacity: opacity,
                        ...style
                    }
                ]}
            >
                <View style={[styles.centerView, { transform: [{ rotateX: 6 }] }]}>
                    <Text style={styles.yearLabel}>
                        {currentImage.year && currentImage.year[locale] || '---'}
                    </Text>
                </View>
                <View style={styles.imageView}>
                    <Animated.Image
                        onLoad={() => this.imageLoadHandler()}
                        source={asset(currentImage.source)}
                        style={[ styles.image, {
                            ...currentImage.style,
                            transform: [
                                { rotateY : this.state.rotateY, rotateX: -6 }
                            ]
                        }]}
                    />

                </View>
                <View style={[styles.centerView, { flexDirection: 'row', transform: [{ rotateX: -27 }] }]}>
                    <Arrow direction="left"
                           onClick={() => this.nextImage(-1)}
                           text={locale === 'ru' ? "Назад" : "Prev"} />
                    <Close locale={locale} onClick={() => onClose()} />
                    <Arrow direction="right"
                           onClick={() => this.nextImage(1)}
                           text={locale === 'ru' ? "Вперед" : "Next"} />
                </View>
            </Animated.View>
        );
    }
}

export default Gallery;