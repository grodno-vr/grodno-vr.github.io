import React from 'react';
import {
    AppRegistry,
    asset,
    Pano,
    VrButton,
    Text,
    View,
    Image,
    Sound,
    NativeModules,
} from 'react-vr';
import AnimateImage from './components/AnimateImage';
const { MediaContainerModule } = NativeModules;

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

    handleOnButtonClick = event => {
        MediaContainerModule.openOverlay({
            title: 'Church of Vitaut the Great',
            description: 'The exact date of its consecration remains unknown, it was first mentioned in a royal privilege for the local Jewish community issued in 1389. The original church was a wooden structure, one of several dozens of such churches founded throughout Lithuania by newly-Christianised rulers of the state. As such, the church was to spread Catholic faith in a predominantly-Orthodox city. In 1494 Grand Duke (and later King of Poland) Alexander Jagiellon demolished the old wooden structure and erected a new church on its place. Its Gothic features continued to be visible despite numerous reconstructions carried out later. The first of such reconstructions took place in 1551, when Bona Sforza, queen consort of Poland, financed the Renaissance reconstruction of the interior.\n' +
            '\n' +
            'The church became a de facto royal chapel in 1584, when king Stefan Batory of Poland moved his seat to the Grodno castle and spent his last years there. It was him to completely demolish the wooden structure and build a new church there, this time brick-made. The works, carried over by the Jesuits, were completed in 1587. The project is attributed to Santi Gucci, though the attribution is not certain, while the master supervising the construction works was Antoni de Greta. It was in this church that Batory\'s body was first interred for several months before it was moved to the Wawel Cathedral in Krakow.\n' +
            '\n' +
            'During The Deluge, between 1655 and 1661, the city was occupied by Muscovy and the church was badly damaged. Burnt from the inside, it was partially demolished. Local bishop of Grodno Aleksander Chodkiewicz financed the reconstruction and by 1674 the church regained its former look. However, in the 18th century the church was again destroyed during the Great Northern War. The king of Poland financed the reconstruction, but it is not clear whether the works were finished when in 1753 a fire struck the city and the church was yet again badly damaged. It took 5 years to rebuild it. Local priest Józef Chrebtowicz hired a renowned German architect Johann Mezer to supervise the works. The church was once again consecrated on April 18, 1758.',
        });
    };

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
                            onClick={this.handleOnButtonClick}>
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
            </View>
        );
    }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
