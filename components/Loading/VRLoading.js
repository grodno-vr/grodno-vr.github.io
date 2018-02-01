import React from 'react';
import { Text } from 'react-vr';

import styles from './styles';

const Spinner = () => {
    return (
        <Text style={styles.text}>
            Loading....
        </Text>
    );
};

export default Spinner;