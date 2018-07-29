import React from 'react';
import { AppRegistry, NativeModules } from 'react-vr';
import { Place } from './components';
import places from './places';

const Location = NativeModules.Location;


export default class GrodnoVR extends React.Component {
    constructor() {
        super();
        this.placeKeys = Object.keys(places);
        const [firstPlace] = this.placeKeys;

        this.state = { currentPlace: firstPlace, locale: 'en' };

        const parameters = Location.search.replace('?', '').split('&');

        for (let i = 0; i < parameters.length; i++) {
            const [name, value] = parameters[i].split('=');

            if (name === 'place' && this.placeKeys.indexOf(value) > -1) {
                console.log(value, this.placeKeys.indexOf(value));
                this.state.currentPlace = value;
            }

            if (name === 'locale') {
                this.state.locale = value;
            }
        }
    }

    render() {
        const { currentPlace, locale } = this.state;
console.log(this.state, places[currentPlace]);
        return (
            <Place
                locale={locale}
                place={places[currentPlace]}
                onChange={(placeId) => {
                    this.setState({ currentPlace: placeId })
                }}
            />
        );
    }
};

AppRegistry.registerComponent('GrodnoVR', () => GrodnoVR);
