import { StyleSheet } from 'react-vr';

const styles = StyleSheet.create({
    modelControls: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        width: 12,
        height: 6
        //backgroundColor: 'black'
    },
    modelControl: {
        width: 1.5,
        height: 1.5,
        margin: 2
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