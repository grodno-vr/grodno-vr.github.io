import React from 'react';
import { Text, View, Animated, CylindricalPanel, VrButton, Image, AmbientLight, asset } from 'react-vr';
import { Model3D } from '../.';

const Easing = require('Easing');

class VRInformation extends React.Component {

    constructor(...args) {
        super(...args);
        this.state = {
            modelRotation: 30.1,
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
            <View style={{ flex: 1 }}>
                <VrButton
                    style={{}}
                    onClick={() => this.setState({ modelRotation: this.state.modelRotation + 1.1 })}
                >
                    <Image
                        source={asset('icons/rotate.png')}
                        style={{ width: 100, height: 100, marginLeft: 100, marginTop: 100 }}
                    />
                </VrButton>
                <VrButton
                    style={{}}
                    onClick={() => this.setState({ modelRotation: this.state.modelRotation - 1.1 })}
                >
                    <Image
                        source={asset('icons/rotate.png')}
                        style={{ width: 100, height: 100, marginLeft: 100, marginTop: 100 }}
                    />
                </VrButton>
            </View>
        );
    }

    render() {
        const { title, description, model, translateX, onClose } = this.props;
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
                        width: 1000,
                        height: 820,
                        backgroundColor: 'black'
                    }}
                    >
                        <View
                            style={{
                            width: 1000,
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
                            {`${title}\n\n${description}`}
                        </Text>
                        { model && this.renderModelControls() }
                    </Animated.View>
                </CylindricalPanel>
                { model && <Model3D rotatation={this.state.modelRotation} details={model} /> }
            </AmbientLight>
        );
    }
}

export default VRInformation;