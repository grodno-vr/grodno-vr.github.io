import { Animated } from 'react-vr';

const lightMixin = Base => class extends Base {

    constructor(...args) {
        super(args);
        // 1 - day, 0 - night
        this.state = { ...this.state, light: new Animated.Value(0.001) };
    }

    offLight(callback) {
        Animated.timing(
            this.state.light,
            {
                toValue: 0.001,
                duration: 800
            }
        ).start(() => callback && callback());
    }

    onLight(callback) {
        Animated.timing(
            this.state.light,
            {
                toValue: 1,
                duration: 800,
                delay: 500
            }
        ).start(() => callback && callback());
    }
    
    putOutLight(endValue, callback) {
        Animated.timing(
            this.state.light,
            {
                toValue: endValue,
                duration: 600
            }
        ).start(() => callback && callback());
    }
};

export default lightMixin;