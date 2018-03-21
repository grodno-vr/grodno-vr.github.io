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
        borderRadius: 30
    },
    centerView: {
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
    tooltipButton: {
        //opacity: 0.4,
        padding: 1,
        marginTop: 10,
        textAlign: 'center',
        fontSize: 30,
        height: 10,
        color: 'white'
    },
    arrowButton: {
        width: 60,
        height: 60,
        margin: 38,
        borderRadius: 50,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    arrowImage: {
        width: 40,
        height: 40
    },
    closeButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: 50,
        width: 60,
        height: 60,
        marginTop: 38
    },
    closeImage: {
        width: 40,
        height: 40
    }
});

export default styles;