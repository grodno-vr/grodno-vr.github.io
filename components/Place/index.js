import React from 'react';
import { asset, Pano, Scene, View, NativeModules, Animated, VrHeadModel } from 'react-vr';

import { OldImage, Label, Portal, Spinner } from '../.';
import FadeInView from '../FadeInView';

const { InfoContainerModule } = NativeModules;

class Place extends React.Component {

    constructor() {
        super();
        this.timer = null;
        this.state = {
            loading: true,
            showOldImages: false,
            opacity: 0,
            rotation: 0
        };
    }

    offLight(cb) {
        this.setState({ loading: true });
        this.timer = setInterval(() => {
            if (this.state.opacity <= 0) {
                if (this.timer) clearInterval(this.timer);
                if (cb) cb();
            }
            this.setState({ opacity: this.state.opacity - 0.01 });
        }, 5);
    }

    onLight() {
        this.timer = setInterval(() => {
            if (this.state.opacity >= 1) {
                if (this.timer) clearInterval(this.timer);
            }
            this.setState({ opacity: this.state.opacity + 0.01 });
        }, 5);
    }

    componentDidMount() {
        this.onLight();
    }

    componentWillReceiveProps() {
        this.onLight();
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
                source={asset(image.source)}
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
                    // this.setState({ rotation: 40 });
                    console.log(VrHeadModel.inVR());
                    this.offLight(() => this.props.onChange(placeId));
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
        const { loading, showOldImages, opacity } = this.state;

        return (
            <FadeInView style={{
                layoutOrigin: [0.5, 0.5, 0],
                position:'absolute',
                transform: [{rotateY: -10}]
            }}>
                { loading && <Spinner /> }
                    <Pano
                        onLoad={() => this.setState({ loading: false })}
                        source={asset(`/places/${place.name}/background.jpg`)}
                        stereo={'TOP_BOTTOM_3D'}
                        style={{...style, position:'absolute', opacity: opacity, tintColor: loading ? 'grey' : 'white'}}
                    />
                { !loading && !showOldImages && this.renderLabels() }
                { !loading && !showOldImages && this.renderPortals() }

                { !loading && showOldImages && this.renderOldImages() }
            </FadeInView>
        );
    }
}

export default Place;