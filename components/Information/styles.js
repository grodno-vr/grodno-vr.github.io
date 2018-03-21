import { StyleSheet } from 'react-vr';

const styles = StyleSheet.create({
    modelControls: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 12,
        height: 6
    },
    modelControlBtn: {
        transform: [{ rotateX: -27 }],
        alignItems: 'center',
        justifyContent: 'center',
        width: 2,
        height: 2,
        margin: 2,
        borderColor: 'gray',
        borderRadius: 2,
        borderWidth: 0.1
    },
    modelControlImg: {
        width: 1.5,
        height: 1.5
    },
    closeButton: {
        width: 50,
        height: 50,
        marginRight: 50,
        marginTop: 40
    },
    closeImage: {
        width: 50,
        height: 50,
        margin: 10
    }
});

export default styles;