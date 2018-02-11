import React from 'react';
import { asset, Pano, View, Sound, Animated, NativeModules, VrHeadModel } from 'react-vr';
import { OldImage, Portal, Label } from '../.';
import VRInformation from '../Information/VRInformation';


import lightMixin from './mixins/lightMixin';
import cameraMixin from './mixins/cameraMixin';
import loadingMixin from './mixins/loadingMixin';

import styles from './styles';

const { PersistenceOverlayModule } = NativeModules;
const SuperClass = loadingMixin(cameraMixin(lightMixin(React.Component)));

const AnimatedPano = Animated.createAnimatedComponent(Pano);

class Place extends SuperClass {

    constructor(...args) {
        super(args);
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
        this.headsetRotation = VrHeadModel.rotation();
    }

    renderLocalizationControls() {
        if (VrHeadModel.inVR()) {
            // TODO render VR controls
        } else {
            PersistenceOverlayModule.renderLocalizationButtons({
                buttons: ['ENG', 'RU', 'BY']
            });
        }
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
                onInfoClick={() => this.openInformation(label, index)}
            />
        );
    }

    openInformation(label, index) {
        // const { text, description = 'Has no description' } = label;
        this.setState({ showInfo: true, selectedLabel: index });
        // if (true) {
        //     this.setState({ showInfo: true, selectedLabel: index });
        // } else if (VrHeadModel.inVR()) {
        //     // TODO open native modal
        // } else {
        //     DomOverlayModule.openInformation({ title: text, description });
        // }
    }

    renderVRInformation() {
        const { place = {} } = this.props;
        const { selectedLabel } = this.state;
        const { labels = [] } = place;
        const { text, description, model, infoPosition } = labels[selectedLabel] || {};

        return (
            <VRInformation
                title={text}
                description={description}
                model={model}
                translateX={infoPosition || 720}
                onClose={() => this.setState({ showInfo: false })}
            />
        );
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
                onClick={() => {
                    this.onLight(() => {});
                    this.setState({ showOldImages: false });
                }}
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
                    // <Sound source={asset('audio/vapor.mp3')} />
                }
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
                { !loading && showOldImages && !showInfo && this.renderOldImages() }
            </Animated.View>
        );
    }
}

export default Place;