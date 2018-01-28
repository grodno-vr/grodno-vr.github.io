import React from 'react';
import { asset, Pano, View, Animated, NativeModules, VrHeadModel } from 'react-vr';
import { Spinner, OldImage, Portal, Label } from '../.';

import lightMixin from './mixins/lightMixin';

const { InfoContainerModule } = NativeModules;
const SuperClass = lightMixin(React.Component);

class Place extends SuperClass {

    constructor() {
        super();

        this.state = {
            ...this.state,
            loading: true,
            showOldImages: false,
            selectedLabel: null
        };
    }

    renderLabels() {
        const { place : {labels = []} = {} } = this.props;

        return labels.map((label, index) => this.renderLabel(label, index));
    }

    renderLabel(label, index) {
        return (
            <Label
                key={`${index}-${label.name}`}
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

    openInformation(title, description) {
        if (VrHeadModel.inVR()) {
            // TODO open native modal
        } else {
            InfoContainerModule.openOverlay({
                title: title,
                description: description || 'Has no description'
            });
        }
    }

    renderOldImages() {
        const { place = {} } = this.props;
        const { selectedLabel } = this.state;
        const { labels = [] } = place;
        const images = (labels[selectedLabel] || {}).oldImages || [];

        return images.map((image, index) => this.renderOldImage(image, index));
    }

    renderOldImage(image, index) {
        return (
            <OldImage
                key={`${index}-${image.source}`}
                onClick={() => this.setState({ showOldImages: false })}
                style={{...image.style}}
                year={image.year}
                source={image.source}
            />
        );
    }

    renderPortals() {
        const { place : { portals = [] } = {} } = this.props;

        return portals.map((portal, index) => this.renderPortal(portal, index));
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
                    this.setState({ loading: true });
                    this.offLight(() => this.props.onChange(placeId));
                }}
            />
        );
    }

    render() {
        const { place = {}, style = {} } = this.props;
        const { loading, showOldImages, light } = this.state;

        return (
            <Animated.View style={{
                layoutOrigin: [0.5, 0.5, 0],
                position:'absolute',
                opacity: light,
                transform: [{ rotateY: 90 }]
            }}>
                { loading && <Spinner /> }
                    <Pano
                        onLoad={() => {
                            this.setState({ loading: false });
                            this.onLight();
                        }}
                        source={asset(`/places/${place.name}/background.jpg`)}
                        stereo={'TOP_BOTTOM_3D'}
                        style={{...style, position:'absolute', opacity: light, tintColor: loading ? 'grey' : 'white'}}
                    />
                { !loading && !showOldImages && this.renderLabels() }
                { !loading && !showOldImages && this.renderPortals() }

                { !loading && showOldImages && this.renderOldImages() }
            </Animated.View>
        );
    }
}

export default Place;