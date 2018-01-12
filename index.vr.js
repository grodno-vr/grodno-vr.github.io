import React from 'react';
import { AppRegistry } from 'react-vr';

import Place from './components/Place';
import places from './places';


export default class GrodnoVR extends React.Component {
    constructor() {
        super();
        this.state = { currentPlace: 0 };
    }

    render() {
        const { currentPlace } = this.state;
        return (
            <Place
                place={places[currentPlace]}
                onChange={(placeId) => this.setState({ currentPlace: placeId })}
            />
        );
    }
};

AppRegistry.registerComponent('GrodnoVR', () => GrodnoVR);
