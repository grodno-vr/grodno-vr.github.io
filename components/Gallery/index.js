import React from 'react';
import { Text, View, Animated, VrButton, Image, asset } from 'react-vr';

import Arrow from './Arrow';
import Close from './Close';
import styles from './styles';

const Easing = require('Easing');

class Gallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedImage: 0,
            opacity: new Animated.Value(0.1),
            scale: new Animated.Value(0.1)
        };
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
                    { toValue: 0.1, duration: 300, easing: Easing.in }
                ),
            Animated
                .timing(
                    this.state.opacity,
                    { toValue: 0.1, duration: 400, easing: Easing.in }
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
        const { images = [], style, onClose } = this.props;
        const currentImage = images[selectedImage] || {};
        
        return (
            <Animated.View
                style={{
                    transform: [{ scale }],
                    opacity: opacity,
                    // backgroundColor: 'black',
                    height: 6,
                    position: 'absolute',
                    ...style
                }}
            >
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.yearLabel}>
                        {currentImage.year}
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                >
                    <Arrow img={'icons/gallery-arrow-left.png'} onClick={() => this.nextImage(-1)} />

                    <Animated.Image
                        onLoad={() => this.imageLoadHandler()}
                        source={asset(currentImage.source)}
                        style={[
                        styles.image,
                        {
                            ...currentImage.style
                        }
                    ]}
                    />

                    <Arrow img={'icons/gallery-arrow-right.png'} onClick={() => this.nextImage(1)} />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Close onClick={() => onClose()} />
                </View>
            </Animated.View>
        );
    }
}

export default Gallery;