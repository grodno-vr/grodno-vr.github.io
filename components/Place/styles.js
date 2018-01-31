import { StyleSheet } from 'react-vr';

const styles = StyleSheet.create({
    placeView: {
        transform: [{ rotateY: 90 }],
        layoutOrigin: [0.5, 0.5, 0],
        position:'absolute'
    }
});

export default styles;