import React from 'react';
import { asset, Model, Animated, NativeModules } from 'react-vr';

const { AjaxHandlersModule } = NativeModules;
const AnimatedModel = Animated.createAnimatedComponent(Model);
const Easing = require('Easing');

class Model3D extends React.Component {

    constructor(props) {
        super(props);
        this.state = { rotation: new Animated.Value(50) };
    }

    componentWillReceiveProps(nextProps) {
        const { rotation } = nextProps;

        Animated.timing(
            this.state.rotation,
            {
                toValue: rotation,
                duration: 450,
                easing: Easing.in
            }
        ).start();
    }

    componentDidMount() {
        AjaxHandlersModule.registerHandler(this.props.details.mtl);
        AjaxHandlersModule.registerHandler(this.props.details.obj);
    }

    render() {
        const { style, obj, mtl, rotationAxis } = this.props.details || {};
        
        return (
            <AnimatedModel
                style={{
                    ...style,
                    transform: [
                        ...style.transform,
                        { [rotationAxis]: this.state.rotation }
                    ]
                }}
                lit={true}
                source={{
                    obj: asset(obj),
                    mtl: asset(mtl)
                }}
            />
        );
    }
}

export default Model3D;