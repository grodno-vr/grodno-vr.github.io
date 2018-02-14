import { StyleSheet } from 'react-vr';

const styles = StyleSheet.create({
    view: {
        transform: [{ translate: [-2,  1, -10] }],
        // opacity: 0.2,
        width: 4,
        position: 'absolute',
        // borderColor: 'black',
        // borderWidth: 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 0.2
        // backgroundColor: 'black'
    },
    text: {
        textAlign: 'center',
        fontSize: 0.5,
        width: 3,
        color: 'white'
    }
});

export default styles;