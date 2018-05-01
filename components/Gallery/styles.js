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
    centerView: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    yearLabel: {
        backgroundColor: 'black',
        borderRadius: 0.2,
        padding: 0.2,
        marginBottom: 0.2,
        textAlign: 'center',
        fontSize: 0.3,
        opacity: 0.5,
        height: 0.7,
        color: 'white'
    },
   tooltipButton: {
        opacity: 0.9,
        padding: 0.1,
        marginTop: 0.2,
        textAlign: 'center',
        fontSize: 0.3,
        height: 0.5,
        color: 'white'  
    },
    arrowButton: {
        width: 0.8,
        height: 0.8,
        marginLeft: 0.5,
        marginRight: 0.5,
        marginTop: 0.5,
        borderRadius: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    arrowImage: {
        width: 0.4,
        height: 0.4
    },
    closeButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: 1,
        width: 0.8,
        height: 0.8,
        marginTop: 0.5
    },
    closeImage: {
        width: 0.4,
        height: 0.4
    }
});

export default styles;