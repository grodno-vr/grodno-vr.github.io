import React from 'react';
import { asset, Pano, View, NativeModules, Animated } from 'react-vr';

import { OldImage, Label, Portal, Spinner } from '../.';

const { InfoContainerModule } = NativeModules;

class Place extends React.Component {

    constructor() {
        super();

        this.state = {
            loading: true,
            showOldImages: false,
            rotation: new Animated.Value(0)
        };
    }

    openInformation(title, description) {
        InfoContainerModule.openOverlay({
            title: title,
            description: description || 'Has no info'
        });
    }

    renderOldImage(placeName, image, index) {
        return (
            <OldImage
                key={index}
                onClick={() => this.setState({ showOldImages: false })}
                style={{...image.style}}
                year={image.year}
                source={asset(`/places/${placeName}/old/${image.source}`)}
            />
        );
    }

    renderOldImages() {
        const { place = {} } = this.props;
        const { selectedLabel } = this.state;
        const { labels = [], name } = place;
        const images = (labels[selectedLabel] || {}).oldImages || [];

        return images.map((image, index) => this.renderOldImage(name, image, index));
    }

    renderLabel(label, index) {
        return (
            <Label
                key={`${label.name}-${index}`}
                style={{...label.viewStyle}}
                heading={label.text}
                onEyeClick={() => {
                    if (label.oldImages && label.oldImages.length) {
                        this.setState({ showOldImages: true, selectedLabel: index });
                    }
                }}
                onInfoClick={() => this.openInformation(label.text, label.description)}
            />
        );
    }

    renderLabels() {
        const { place : { labels = [] } = {} } = this.props;

        return labels.map((label, index) => this.renderLabel(label, index));
    }

    renderPortal(portal, index) {
        const { transformPortal, transformArrow, name } = portal;

        return (
            <Portal
                key={`${name}-${index}`}
                transformPortal={transformPortal}
                transformArrow={transformArrow}
                place={name}
                onClick={(placeId) => {
                    Animated.spring(
                        this.state.rotation,
                        { toValue: 0, friction: 5 }
                    )
                    .start();
                    // this.props.onChange(placeId);
                }}
            />
        );
    }

    renderPortals() {
        const { place : { portals = [] } = {} } = this.props;

        return portals.map((portal, index) => this.renderPortal(portal, index));
    }

    render() {
        const { place = {}, style = {} } = this.props;
        const { loading, showOldImages, rotation } = this.state;

        return (
            <Animated.View
                style={{ transform: [{rotateY: rotation}] }}
            >
                { loading && <Spinner /> }
                <Pano
                    onLoad={() => this.setState({ loading: false })}
                    source={asset(`/places/${place.name}/background.jpg`)}
                    stereo={'TOP_BOTTOM_3D'}
                    style={{...style}}
                />
                { !loading && !showOldImages && this.renderLabels() }
                { !loading && !showOldImages && this.renderPortals() }

                { !loading && showOldImages && this.renderOldImages() }
            </Animated.View>
        );
    }
}

export default Place;