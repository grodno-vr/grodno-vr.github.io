import { StyleSheet } from 'react-vr';

const styles = StyleSheet.create({
    galleryView: {
        height: 6,
        position: 'absolute'  
    },
    imageView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        // TODO: Chrome browser has a bug - border blinking
        // borderWidth: 0.1,
        // borderColor: 'gray',
        borderRadius: 0.6
    },
    yearView: {
        alignItems: 'center'
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
    },
    arrowButton: {
        width: 2,
        height: 2,
        margin: 0.5,
        borderRadius: 0.5,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    arrowImage: {
        width: 1.5,
        height: 1.5
    },
    closeButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: 1,
        width: 1,
        height: 1,
        marginTop: 1
    },
    closeImage: {
        width: 0.5,
        height: 0.5
    }
});

export default styles;