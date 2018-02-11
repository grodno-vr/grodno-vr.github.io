import React from 'react';
import { Text, View, Animated, CylindricalPanel, VrButton, Image, AmbientLight, asset } from 'react-vr';
import { Model3D } from '../.';

const Easing = require('Easing');

class VRInformation extends React.Component {

    constructor(...args) {
        super(...args);
        this.state = {
            modelRotation: 50.1,
            opacity: new Animated.Value(0.1),
            scale: new Animated.Value(0.1)
        };
    }

    componentDidMount() {
        Animated.parallel([
            Animated
                .timing(
                    this.state.scale,
                    { toValue: 0.85, duration: 500, easing: Easing.in }
                ),
            Animated
                .timing(
                    this.state.opacity,
                    { toValue: 0.85, duration: 800, easing: Easing.in }
                )
        ]).start();
    }

    renderModelControls() {
        return (
            <View style={{ height: 70, flexDirection: 'column', alignItems: 'flex-end' }}>
                <VrButton
                    style={{}}
                    onClick={() => this.setState({ modelRotation: this.state.modelRotation + 15.1 })}
                >
                    <Image
                        source={asset('icons/rotate-left.png')}
                        style={{ width: 60, height: 60, margin: 10 }}
                    />
                </VrButton>
                <VrButton
                    style={{}}
                    onClick={() => this.setState({ modelRotation: this.state.modelRotation - 15.1 })}
                >
                    <Image
                        source={asset('icons/rotate-right.png')}
                        style={{ width: 60, height: 60, margin: 10 }}
                    />
                </VrButton>
            </View>
        );
    }

    render() {
        const { title, description, model, translateX, width, onClose } = this.props;
        const { opacity, scale } = this.state;

        return (
            <AmbientLight intensity={1}>
                <CylindricalPanel
                    layer={{ width: 4096, height: 820, radius: 700 }}
                    style={{ position: 'absolute' }}
                >
                    <Animated.View
                        style={{
                        transform: [{ scale }, { translateX }],
                        opacity,
                        width,
                        height: 820,
                        backgroundColor: 'black'
                    }}
                    >
                        <View
                            style={{
                            width,
                            alignItems: 'flex-end',
                        }}
                        >
                            <VrButton
                                onClick={() => onClose()}
                                style={{ width: 50, height: 50, marginRight: 50, marginTop: 40 }}
                            >
                                <Image
                                    source={asset('icons/x.png')}
                                    style={{ width: 50, height: 50, margin: 10 }}
                                />
                            </VrButton>
                        </View>
                        <Text
                            style={{
                                    margin: 20,
                                    fontSize: 30,
                                    fontWeight: '300',
                                    width: model ? 600 : 900
                                }}
                        >
                            {`${title.toUpperCase()}\n\n${description}`}
                        </Text>
                        { model && this.renderModelControls() }
                    </Animated.View>
                </CylindricalPanel>
                { model && <Model3D rotation={this.state.modelRotation} details={model} /> }
            </AmbientLight>
        );
    }
}

export default VRInformation;