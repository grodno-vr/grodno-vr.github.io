import React from 'react';
import { asset, Pano, View, Sound, Animated, NativeModules, VrHeadModel } from 'react-vr';

import { Portal, Label, Gallery, VRInformation } from '../.';
import { lightMixin, cameraMixin, loadingMixin, localizationMixin } from './mixins';

import styles from './styles';

const { DomOverlayModule } = NativeModules;
const SuperClass = localizationMixin(loadingMixin(cameraMixin(lightMixin(React.Component))));

const AnimatedPano = Animated.createAnimatedComponent(Pano);

class Place extends SuperClass {

    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            scale: new Animated.Value(1),
            loading: true,
            showOldImages: false,
            showInfo: false,
            selectedLabel: null
        };
    }

    componentDidMount() {
        this.startLoading();
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
                        this.putOutLight(0.6, () => {});
                        this.rotateCamera(label.offset);
                        this.setState({ showOldImages: true, selectedLabel: index });
                    }
                }}
                onInfoClick={() => {
                    this.rotateCamera(label.offset);
                    this.openInformation(label, index);
                }}
            />
        );
    }

    openInformation(label, index) {
        const { text, description = 'Has no description' } = label;

        if (VrHeadModel.inVR()) {
            this.setState({ showInfo: true, selectedLabel: index });
        } else {
            DomOverlayModule.openInformation({ title: text, description });
        }
    }

    renderVRInformation() {
        const { place = {} } = this.props;
        const { selectedLabel } = this.state;
        const { labels = [] } = place;
        const { text, description, model, infoPosition, infoWidth, infoHeight } = labels[selectedLabel] || {};

        // component based on CylindricalPanel, you should use values in pixels
        return (
            <VRInformation
                title={text}
                description={description}
                width={infoWidth || 1000}
                height={infoHeight || 820}
                model={model}
                translateX={infoPosition || 720}
                onClose={() => this.setState({ showInfo: false })}
            />
        );
    }

    renderGallery() {
        const { place = {} } = this.props;
        const { selectedLabel } = this.state;
        const { labels = [] } = place;
        const label = labels[selectedLabel] || {};
        const { oldImages = [], galleryStyle } = label;

        if (galleryStyle && oldImages.length) {
            return (
                <Gallery
                    images={oldImages}
                    style={galleryStyle}
                    onClose={() => {
                    this.onLight(() => {});
                    this.setState({ showOldImages: false });
                }}
                />
            );
        }
    }

    renderPortals() {
        const { place : { portals = [] } = {} } = this.props;

        return portals.map((portal, index) => this.renderPortal(portal, index));
    }

    renderPortal(portal, index) {
        const { transformPortal, name } = portal;

        return (
            <Portal
                key={`${name}-${index}`}
                transformPortal={transformPortal}
                place={name}
                onClick={(placeId) => {
                    this.rotateCamera();
                    this.startLoading();
                    this.offLight(() => this.props.onChange(placeId));
                }}
            />
        );
    }

    render() {
        const { place = {}, style = {} } = this.props;
        const { loading, showOldImages, showInfo, light } = this.state;

        return (
            <Animated.View style={[
                styles.placeView,
                { transform: [{ rotateY: this.state.rotateY }] }
            ]}>
                { this.renderLocalizationControls() }
                {
                    (place.name === 'castle') && <Sound loop={true} source={asset('audio/birds.mp3')} />
                }
                { this.renderLoading() }
                <AnimatedPano
                    onLoad={() => this.onLight(() => this.stopLoading())}
                    source={asset(`/places/${place.name}/background.jpg`)}
                    stereo={'TOP_BOTTOM_3D'}
                    style={{
                        ...style,
                        position:'absolute',
                        opacity: light,
                        tintColor: loading ? 'grey' : 'white'
                    }}
                />

                { !loading && !showOldImages && !showInfo && this.renderLabels() }
                { !loading && !showOldImages && !showInfo && this.renderPortals() }

                { !loading && !showOldImages && showInfo && this.renderVRInformation() }
                { !loading && showOldImages && !showInfo && this.renderGallery() }
            </Animated.View>
        );
    }
}

export default Place;