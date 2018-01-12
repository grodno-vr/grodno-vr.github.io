import React from 'react';
import {
    asset,
    Pano,
    View,
    NativeModules,
} from 'react-vr';

import OldImage from './OldImage';
import Label from './Label';

const { InfoContainerModule } = NativeModules;

export default class Place extends React.Component {
    constructor() {
        super();
        this.state = {
            showOldImages: false
        };
    }

    renderOldImages(images = []) {
        const { place = {} } = this.props;

        return images.map((oldImage, index) => {
            return(<OldImage
                key={index}
                onClick={() => this.setState({showOldImages: !this.state.showOldImages})}
                style={{...oldImage.style}}
                year={oldImage.year}
                source={asset(`/places/${place.name}/old/${oldImage.source}`)}
            />);
        });
    }

    renderLabels() {
        const { place : { labels = [] } = {} } = this.props;
        const { showOldImages, selectedLabel } = this.state;

        if (showOldImages) {
            const label = labels[selectedLabel];
            return this.renderOldImages(label.oldImages);
        }

        return labels.map((label, index) => {
            return (
                <Label
                    key={`${label.name}-${index}`}
                    style={{...label.viewStyle}}
                    heading={label.text}
                    onEyeClick={() => {
                        if (label.oldImages && label.oldImages.length) {
                            this.setState({showOldImages: !this.state.showOldImages, selectedLabel: index});
                        }
                    }}
                    onInfoClick={() => {
                            InfoContainerModule.openOverlay({
                                title: 'Church of Vitaut the Great',
                                description: 'The exact date of its consecration remains unknown, it was first mentioned in a royal privilege for the local Jewish community issued in 1389. The original church was a wooden structure, one of several dozens of such churches founded throughout Lithuania by newly-Christianised rulers of the state. As such, the church was to spread Catholic faith in a predominantly-Orthodox city. In 1494 Grand Duke (and later King of Poland) Alexander Jagiellon demolished the old wooden structure and erected a new church on its place. Its Gothic features continued to be visible despite numerous reconstructions carried out later. The first of such reconstructions took place in 1551, when Bona Sforza, queen consort of Poland, financed the Renaissance reconstruction of the interior.\n' +
                                '\n' +
                                'The church became a de facto royal chapel in 1584, when king Stefan Batory of Poland moved his seat to the Grodno castle and spent his last years there. It was him to completely demolish the wooden structure and build a new church there, this time brick-made. The works, carried over by the Jesuits, were completed in 1587. The project is attributed to Santi Gucci, though the attribution is not certain, while the master supervising the construction works was Antoni de Greta. It was in this church that Batory\'s body was first interred for several months before it was moved to the Wawel Cathedral in Krakow.\n' +
                                '\n' +
                                'During The Deluge, between 1655 and 1661, the city was occupied by Muscovy and the church was badly damaged. Burnt from the inside, it was partially demolished. Local bishop of Grodno Aleksander Chodkiewicz financed the reconstruction and by 1674 the church regained its former look. However, in the 18th century the church was again destroyed during the Great Northern War. The king of Poland financed the reconstruction, but it is not clear whether the works were finished when in 1753 a fire struck the city and the church was yet again badly damaged. It took 5 years to rebuild it. Local priest Józef Chrebtowicz hired a renowned German architect Johann Mezer to supervise the works. The church was once again consecrated on April 18, 1758.',
                            });
                    }}
                />
            );
        });
    }

    renderPortals() {
        // TODO render portals
    }

    render() {
        const { place = {}, style = {} } = this.props;
        return (
            <View>
                <Pano
                    source={asset(`/places/${place.name}/background.jpg`)}
                    stereo={'TOP_BOTTOM_3D'}
                    style={{...style}}
                />
                {this.renderLabels()}
                {this.renderPortals()}
            </View>
        );
    }
};