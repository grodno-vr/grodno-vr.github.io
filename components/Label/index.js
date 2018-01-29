import React from 'react';
import { View, Text } from 'react-vr';

import LabelButton from './LabelButton';

import styles from './styles';

const Label = (props) => {
    return (
        <View style={[styles.caption, props.style]}>
            <LabelButton
                style={styles.leftItem}
                icon={'icons/eye.png'}
                onClick={() => props.onEyeClick()}
            />
            <LabelButton
                style={styles.middleItem}
                icon={'icons/info.png'}
                onClick={() => props.onInfoClick()}
            />
            <View style={styles.rightItem}>
                <Text style={styles.heading}>{props.heading}</Text>
            </View>
        </View>
    );
};

export default Label;
