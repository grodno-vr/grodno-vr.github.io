import React from 'react';
import { asset, Pano, View, Sound, Animated, NativeModules, VrHeadModel, Model, DirectionalLight, Text, CylindricalPanel } from 'react-vr';
import { OldImage, Portal, Label, Knights } from '../.';

import lightMixin from './mixins/lightMixin';
import styles from './styles';

const { DomOverlayModule, PersistenceOverlayModule } = NativeModules;
const SuperClass = lightMixin(React.Component);

const AnimatedPano = Animated.createAnimatedComponent(Pano);
const AnimatedModel = Animated.createAnimatedComponent(Model);

class Place extends SuperClass {

    constructor() {
        super();

        this.headsetRotation = VrHeadModel.rotation();
        this.state = {
            ...this.state,
            scale: new Animated.Value(1),
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
            DomOverlayModule.loading();
        }
    }

    stopLoading() {
        this.setState({ loading: false });
        if (VrHeadModel.inVR()) {
            // TODO hide VR loading indicator
        } else {
            DomOverlayModule.closeOverlay();
        }
    }

    rotateCamera(offset = 0) {
        this.headsetRotation = VrHeadModel.rotation();
        const [ , rotateY ] = this.headsetRotation || [];
        if (rotateY + offset > 180) {
            console.log(rotateY);
        }

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
                onInfoClick={() => this.openInformation(label.text, label.description)}
            />
        );
    }

    openInformation(title, description) {
        if (VrHeadModel.inVR()) {
            // TODO open native modal
        } else {
            DomOverlayModule.openInformation({
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

    componentDidMount() {
        const step = () => {
            this.setState({ rotate: this.state.rotate - 1.5 });
            this.animationRequestId = requestAnimationFrame(step);
        };
        this.animationRequestId = requestAnimationFrame(step);
    }

    componentWillUnmount() {
        if (this.animationRequestId) {
            cancelAnimationFrame(this.animationRequestId);
        }
    }

    render() {
        const { place = {}, style = {} } = this.props;
        const { loading, showOldImages, light } = this.state;

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
                { place.name === 'vilenskaja' && <DirectionalLight intensity={1}>
                    <CylindricalPanel layer={{width: 2000, height: 720, radius: 700}} style={{position: 'absolute'}}>
                        <View
                            style={{
                              opacity: 0.85,
                              width: 900,
                              height: 620,
                              // alignItems: 'center',
                              // justifyContent: 'center',
                              backgroundColor: 'black'
                            }}
                        >
                            <Text
                                style={{
                                    margin: 10,
                                    fontSize: 30,
                                    fontWeight: '300',
                                    width: 600,
                                    height: 100
                                }}
                            >
                                Architectural coat of arms (first half of 18th century) in Hrodna, Belarus.
                            </Text>
                        </View>
                    </CylindricalPanel>
                    <AnimatedModel
                        onEnter={() => {
                            Animated.timing(
                                this.state.scale,
                                {
                                    toValue: 1.2,
                                    duration: 450
                                }
                            ).start();
                        }}
                        onExit={() => {
                            Animated.timing(
                                this.state.scale,
                                {
                                    toValue: 1,
                                    duration: 450
                                }
                            ).start();
                        }}
                        style={{
                            transform: [
                                { translate: [-45, 15, -60] },
                                { scale: this.state.scale },
                                { rotateZ: 40 }, { rotateY: this.state.rotate }, { rotateX: 100 }
                            ]
                        }}
                        lit={true}
                        source={{
                            obj: asset('models/coat/coat_clean.obj'),
                            mtl: asset('models/coat/coat_clean_tex.mtl')
                        }}
                    />
                </DirectionalLight>

                }
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