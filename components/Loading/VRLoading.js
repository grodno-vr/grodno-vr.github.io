import React from 'react';
import { Text, View, Animated, Image, asset } from 'react-vr';

import styles from './styles';

const Easing = require('Easing');

class VRLoading extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rotation: new Animated.Value(0),
            opacity: new Animated.Value(0)
        };

    }

    animateRotation() {
        this.state.rotation.setValue(0);
        Animated.timing(
            this.state.rotation,
            {
                duration: 1500,
                easing: Easing.linear,
                toValue: -360
            }
        ).start((status) => {
            status.finished && this.animateRotation();
        });
    }

    componentDidMount() {
        Animated.timing(
            this.state.opacity,
            {
                delay: 500,
                duration: 1500,
                easing: Easing.linear,
                toValue: 1
            }
        ).start();
        this.animateRotation();
    }

    render() {
        const { text } = this.props;
        return (
            <View style={styles.view}>
                <Animated.View
                    style={{
                        height: 1,
                        width: 1,
                        opacity: this.state.opacity,
                        transform: [{ rotateZ: this.state.rotation }]
                    }}
                >
                    <Image
                        style={{
                            height: 1,
                            width: 1
                        }}
                        source={asset('icons/spinner.png')}
                    >
                    </Image>
                </Animated.View>
                <Text style={styles.text}>
                    {text || 'Loading...'}
                </Text>
            </View>
        );
    }
}

export default VRLoading;
