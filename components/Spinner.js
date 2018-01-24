import React from 'react';
import { Text } from 'react-vr';

const Spinner = () => {
    return (
        <Text
            style={{
                borderRadius: 0.2,
                backgroundColor: 'black',
                textAlign: 'center',
                fontSize: 0.5,
                width: 3,
                color: 'white',
                transform: [{translateZ: -10}]
            }}
        >
            Loading....
        </Text>
    );
};

export default Spinner;