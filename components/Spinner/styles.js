import { StyleSheet } from 'react-vr';

const styles = StyleSheet.create({
    text: {
        borderRadius: 0.2,
        backgroundColor: 'black',
        textAlign: 'center',
        fontSize: 0.5,
        width: 3,
        color: 'white',
        transform: [{translateZ: -10}]
    }
});

export default styles;