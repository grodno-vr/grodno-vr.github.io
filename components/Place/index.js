import React from 'react';
import { asset, Pano, Sound, Animated } from 'react-vr';

import { Portal, Label, Gallery, VRInformation } from '../.';
import { lightMixin, cameraMixin, loadingMixin } from './mixins';

import styles from './styles';

const SuperClass = loadingMixin(cameraMixin(lightMixin(React.Component)));

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
        const { locale = 'en' } = this.props;
        return (
            <Label
                key={`${index}-${label.name}`}
                style={{...label.viewStyle}}
                heading={label.text[locale] || ' --- '}
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
        const { locale = 'en' } = this.props;
        const { /*text,*/ description = [] } = label;

        if (description[locale]) {
            this.setState({ showInfo: true, selectedLabel: index });
        }
        // else {
        //     DomOverlayModule.openInformation({ title: text, description });
        // }
    }

    renderVRInformation() {
        if (/* inVR */ true) {
            const { place = {}, locale = 'en' } = this.props;
            const { selectedLabel } = this.state;
            const { labels = [] } = place;
            const { text = {}, description = {}, model, infoPosition, infoWidth, infoHeight } = labels[selectedLabel] || {};
            
            // Component based on CylindricalPanel, you should use values in pixels
            return (
                <VRInformation
                    title={text[locale] || ' --- '}
                    description={description[locale] || ' --- '}
                    width={infoWidth || 1000}
                    height={infoHeight || 820}
                    model={model}
                    translateX={infoPosition || 720}
                    onClose={() => this.setState({ showInfo: false })}
                />
            );   
        }
    }

    renderGallery() {
        const { place = {}, locale = 'en' } = this.props;
        const { selectedLabel } = this.state;
        const { labels = [] } = place;
        const label = labels[selectedLabel] || {};
        const { oldImages = [], galleryStyle } = label;

        if (galleryStyle && oldImages.length) {
            return (
                <Gallery
                    locale={locale}
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
                { place.sound && <Sound loop={true} source={asset(place.sound)} /> }
                
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