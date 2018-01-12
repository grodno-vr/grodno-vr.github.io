import React from 'react';
import { VrButton, Text, View } from 'react-vr';

const DraftLabel = props => (
    <View style={props.viewStyle}>
        <VrButton style={props.buttonStyle} onClick={() => props.onClick()}>
            <Text style={props.textStyle}>
                {props.text}
            </Text>
        </VrButton>
    </View>
);

export default DraftLabel;