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
        const parameters = Location.search.replace('?', '');
        const place = parameters.split('=')[1];
        const currentPlace = this.placeKeys.indexOf(place) > -1 ? place : firstPlace;
        this.state = { currentPlace };
    }

    render() {
        const { currentPlace } = this.state;

        return (
            <Place
                place={places[currentPlace]}
                onChange={(placeId) => {
                    this.setState({ currentPlace: placeId })
                }}
            />
        );
    }
};

AppRegistry.registerComponent('GrodnoVR', () => GrodnoVR);
