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

export default class WelcomeToVR extends React.Component {
    constructor() {
        super();
        this.state = {
            textColor: 'orange'
        };
    }

    render() {
        return (
            <View>
                <Pano source={asset('room1.jpg')} stereo={'TOP_BOTTOM_3D'} />
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    width: 5,
                    alignItems: 'stretch',
                    transform: [{translate: [0, 2.5, -6]}, { scale : 0.8 }],
                }}>
                    <View style={{margin: 0.1, height: 0.3, backgroundColor: this.state.textColor}}>
                        <VrButton onClick={() => this.setState({textColor: this.state.textColor === 'red' ? 'orange' : 'red'})}>
                            <Text style={{fontSize: 0.2, textAlign: 'center'}}>
                                Church of Vitaut the Great
                            </Text>
                        </VrButton>
                    </View>
                    <View style={{margin: 0.1, height: 0.3, backgroundColor: 'orange'}}>
                        <VrButton>
                            <Text style={{fontSize: 0.2, textAlign: 'center'}}>
                                St. Brigit's Church and the Monastery
                            </Text>
                        </VrButton>
                    </View>
                    <View style={{margin: 0.1, height: 0.3, backgroundColor: 'orange'}}>
                        <VrButton>
                            <Text style={{fontSize: 0.2, textAlign: 'center'}}>
                                Holy Cross Church and the Monastery of Carmelite
                            </Text>
                        </VrButton>
                    </View>
                </View>
                {this.state.textColor === 'red' ?
                    <View><Image style={{
                        transform: [{translate: [-5.5, 3.5, -5]}],
                        width: 2.5,
                        height: 2.5,
                        borderWidth: 0.05,
                        borderColor: 'red',
                        // borderRadius: 1
                    }} source={asset('vitaut.jpg')}>
                        <Sound source={{ mp3: asset('valaam.mp3') }} />
                    </Image>
                    <Image style={{
                    transform: [{translate: [-4.5, 4, -6]}],
                    width: 3.5,
                    height: 2.5
                    }} source={asset('vitaut1.jpg')} />
                    <Image style={{
                    transform: [{translate: [-3.5, 9, -7]}],
                    width: 2,
                    height: 1.5
                    }} source={asset('vitaut2.jpg')} />
                    </View>
                    : <Text />
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
