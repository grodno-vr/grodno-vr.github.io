import React from 'react';
import {
    AppRegistry,
    asset,
    Pano,
    VrButton,
    Text,
    View,
    Image,
    Sound
} from 'react-vr';
import AnimateImage from './components/AnimateImage';

export default class WelcomeToVR extends React.Component {
    constructor() {
        super();
        this.state = {
            showVitautChurch: false,
            showBrigitsChurch: false,
            showCarmeliteChurch: false,
            textColor: 'orange'
        };
    }

    render() {
        return (
            <View>
                <Pano source={asset('room1.jpg')} stereo={'TOP_BOTTOM_3D'} />

                {this.state.showVitautChurch
                    ? <VrButton onClick={() => this.setState({showVitautChurch: !this.state.showVitautChurch})}>
                        <AnimateImage style={{
                            transform: [{translate: [-5.5, 1.5, -5]}],
                            width: 2.5,
                            height: 2.5,
                            borderWidth: 0.05,
                            borderColor: 'red',
                            borderRadius: 1
                        }} source={asset('vitaut.jpg')}/>
                    </VrButton>
                    : <View style={{
                        margin: 0.1,
                        height: 0.3,
                        width: 3,
                        backgroundColor: 'orange',
                        transform: [{translate: [-6, 0.5, -6]}, { scale : 0.8 }]
                    }}>
                        <VrButton
                            onClick={() => this.setState({showVitautChurch: !this.state.showVitautChurch})}>
                            <Text style={{fontSize: 0.2, textAlign: 'center'}}>
                                Church of Vitaut the Great
                            </Text>
                        </VrButton>
                    </View>
                }

                {this.state.showBrigitsChurch
                    ? <VrButton onClick={() => this.setState({showBrigitsChurch: !this.state.showBrigitsChurch})}>
                        <AnimateImage style={{
                            transform: [{translate: [4, 2.1, -7]}, {scale: 0.8}],
                            width: 2.5,
                            height: 2.5,
                            borderWidth: 0.05,
                            borderColor: 'red',
                            borderRadius: 1
                        }} source={asset('1.jpg')}/>
                    </VrButton>
                    : <View style={{
                        margin: 0.1,
                        height: 0.3,
                        backgroundColor: 'orange',
                        transform: [{translate: [3.5, 1.1, -7]}, {scale: 0.8}]
                    }}>
                        <VrButton
                            onClick={() => this.setState({showBrigitsChurch: !this.state.showBrigitsChurch})}>
                            <Text style={{fontSize: 0.2, textAlign: 'center'}}>
                                St. Brigit's Church and the Monastery
                            </Text>
                        </VrButton>
                    </View>
                }

                {this.state.showCarmeliteChurch
                    ? <VrButton onClick={() => this.setState({showCarmeliteChurch: !this.state.showCarmeliteChurch})}>
                        <AnimateImage style={{
                            transform: [{translate: [-1, 1, 6]}, { scale : 0.8 }, {rotateY : 180}],
                            width: 4,
                            height: 4,
                            borderWidth: 0.05,
                            borderColor: 'red',
                            borderRadius: 2
                        }} source={asset('2.jpg')}/>
                    </VrButton>
                    : <View style={{
                        margin: 0.1,
                        height: 0.3,
                        width: 5,
                        backgroundColor: 'orange',
                        transform: [{translate: [-1, -1, 6]}, { scale : 0.8 }, {rotateY : 180}]
                    }}>
                        <VrButton
                            onClick={() => this.setState({showCarmeliteChurch: !this.state.showCarmeliteChurch})}>
                            <Text style={{fontSize: 0.2, textAlign: 'center'}}>
                                Holy Cross Church and the Monastery of Carmelite
                            </Text>
                        </VrButton>
                    </View>
                }


                {/*<Text*/}
                {/*style={{*/}
                {/*backgroundColor: '#777879',*/}
                {/*fontSize: 0.8,*/}
                {/*fontWeight: '400',*/}
                {/*layoutOrigin: [0.5, 0.5],*/}
                {/*paddingLeft: 0.2,*/}
                {/*paddingRight: 0.2,*/}
                {/*textAlign: 'center',*/}
                {/*textAlignVertical: 'center',*/}
                {/*transform: [{translate: [0, 0, -3]}],*/}
                {/*}}>*/}
                {/*hello*/}
                {/*</Text>*/}
            </View>
        );
    }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
