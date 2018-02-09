import React from 'react';
import { Text, View, Animated, CylindricalPanel, VrButton, Image, asset } from 'react-vr';

const Easing = require('Easing');

class VRInformation extends React.Component {

    constructor(...args) {
        super(...args);
        this.state = {
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

    render() {
        const { text, translateX, onClose } = this.props;
        const { opacity, scale } = this.state;

        return (
            <CylindricalPanel
                layer={{ width: 2000, height: 720, radius: 700 }}
                style={{ position: 'absolute' }}
            >
                <Animated.View
                    style={{
                              transform: [{ scale }, { translateX }],
                              opacity,
                              width: 900,
                              height: 620,
                              // borderRadius: 50,
                              // alignItems: 'center',
                              // justifyContent: 'center',
                              backgroundColor: 'black'
                            }}
                >
                    <VrButton
                        style={{}}
                        onClick={() => onClose()}
                    >
                        <Image
                            source={asset('icons/x.png')}
                            style={{ width: 50, height: 50, margin: 10 }}
                        />
                    </VrButton>
                    <Text
                        style={{
                                    margin: 20,
                                    fontSize: 30,
                                    fontWeight: '300',
                                    width: 600
                                }}
                    >
                        {text}
                    </Text>
                </Animated.View>
            </CylindricalPanel>
        );
    }
}

export default VRInformation;