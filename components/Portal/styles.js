import { StyleSheet } from 'react-vr';

const styles = StyleSheet.create({
    view: {
        position: 'absolute'
    },
    sphere: {
        transform: [
            { translateY: 0 }
        ]
    },
    border: {
        transform: [
            { translateY: 0 }
        ]
    },
    box: {
        transform: [
            { translateY: -2 }
        ]
    }
});

export default styles;