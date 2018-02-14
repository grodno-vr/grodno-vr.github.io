import { StyleSheet } from 'react-vr';

const styles = StyleSheet.create({
    image: {
        // TODO: Chrome browser has a bug - border blinking
        // borderWidth: 0.1,
        // borderColor: 'gray',
        borderTopRightRadius: 0.6,
        borderBottomLeftRadius: 0.6,
        borderBottomRightRadius: 0.6
        //position: 'absolute',
    },
    button: {
        position: 'absolute'
    },
    yearLabel: {
        // opacity: 0.75,
        // borderTopLeftRadius: 0.6,
        // borderBottomLeftRadius: 0.6,
        backgroundColor: 'gray',
        borderRadius: 0.1,
        marginLeft: -0.2,
        marginTop: -0.2,
        textAlign: 'center',
        fontSize: 0.5,
        width: 1.6,
        color: 'white'
    }
});

export default styles;