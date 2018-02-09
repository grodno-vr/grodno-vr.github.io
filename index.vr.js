import React from 'react';
import { AppRegistry } from 'react-vr';

import { Place } from './components';
import places from './places';


export default class GrodnoVR extends React.Component {
    constructor() {
        super();
        this.placeKeys = Object.keys(places);

        const [firstPlace] = this.placeKeys;
        this.state = { currentPlace: firstPlace };
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
