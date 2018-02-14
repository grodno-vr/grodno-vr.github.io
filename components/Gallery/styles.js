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
        backgroundColor: 'black',
        borderRadius: 0.1,
        padding: 0.1,
        marginBottom: 0.2,
        textAlign: 'center',
        fontSize: 0.5,
        opacity: 0.5,
        height: 0.7,
        color: 'white'
    }
});

export default styles;