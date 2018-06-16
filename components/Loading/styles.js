import { StyleSheet } from 'react-vr';

const styles = StyleSheet.create({
    view: {
        transform: [{ translate: [-2,  1, -10] }],
        width: 4,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 0.2
    },
    text: {
        textAlign: 'center',
        fontSize: 0.5,
        width: 3,
        color: 'white'
    }
});

export default styles;