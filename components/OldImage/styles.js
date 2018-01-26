import { StyleSheet } from 'react-vr';

const styles = StyleSheet.create({
    image: {
        // TODO: Chrome browser has a bug - border blinking
        // borderWidth: 0.1,
        // borderColor: 'gray',
        borderRadius: 0.6
    },
    button: {
        position: 'absolute'
    },
    yearLabel: {
        backgroundColor: 'gray',
        textAlign: 'center',
        fontSize: 0.5,
        width: 1.5,
        color: 'white'
    }
});

export default styles;