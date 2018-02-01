import React from 'react';
import { asset, Pano, View, Animated, NativeModules, VrHeadModel } from 'react-vr';
import { OldImage, Portal, Label, Knights } from '../.';

import lightMixin from './mixins/lightMixin';
import styles from './styles';

const { WebBrowserModule } = NativeModules;
const SuperClass = lightMixin(React.Component);

class Place extends SuperClass {

    constructor() {
        super();

        this.headsetRotation = VrHeadModel.rotation();
        this.state = {
            ...this.state,
            loading: true,
            showOldImages: false,
            selectedLabel: null,
            rotate: 0,
            rotateY: new Animated.Value(0)
        };
    }

    startLoading() {
        this.setState({ loading: true });
        if (VrHeadModel.inVR()) {
            // TODO render VR loading indicator
        } else {
            WebBrowserModule.loading();
        }
    }

    stopLoading() {
        this.setState({ loading: false });
        if (VrHeadModel.inVR()) {
            // TODO hide VR loading indicator
        } else {
            WebBrowserModule.closeOverlay();
        }
    }

    rotateCamera(offset = 0) {
        this.headsetRotation = VrHeadModel.rotation();
        const [ , rotateY ] = this.headsetRotation || [];
        console.log(rotateY);
        Animated.timing(
            this.state.rotateY,
            {
                toValue: rotateY + offset,
                duration: 600
            }
        ).start();
    }

    componentDidMount() {
        this.startLoading();
        this.headsetRotation = VrHeadModel.rotation();
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
                onInfoClick={() => this.openInformation(label.text, label.description)}
            />
        );
    }

    openInformation(title, description) {
        if (VrHeadModel.inVR()) {
            // TODO open native modal
        } else {
            WebBrowserModule.openInformation({
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
        const { loading, showOldImages, light } = this.state;

        return (
            <Animated.View style={[
                styles.placeView,
                { transform: [{ rotateY: this.state.rotateY }] }
            ]}>
                    <Pano
                        onLoad={() => {
                            this.onLight(() => this.stopLoading());
                        }}
                        source={asset(`/places/${place.name}/background.jpg`)}
                        stereo={'TOP_BOTTOM_3D'}
                        style={{
                            ...style,
                            position:'absolute',
                            opacity: light,
                            tintColor: loading ? 'grey' : 'white'
                        }}
                    />
                {
                    // Do not touch this!!!
                    // <Knights
                    //     transform={[{ translate: [-5, -12, -20] }, { scale: 1 }, { rotateX: 270, rotateY: this.state.rotate }]}
                    // />
                }
                { !loading && !showOldImages && this.renderLabels() }
                { !loading && !showOldImages && this.renderPortals() }

                { !loading && showOldImages && this.renderOldImages() }
            </Animated.View>
        );
    }
}

export default Place;