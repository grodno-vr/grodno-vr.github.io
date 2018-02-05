import { Animated } from 'react-vr';

const lightMixin = Base => class extends Base {

    constructor() {
        super();
        this.animationRequestId = null;
        // 1 - day, 0 - night
        this.state = { light: new Animated.Value(0.001) };
    }

    animationLoop(condition, stepValue, callback) {
        const step = () => {
            if (condition(this.state.light)) {
                return callback && callback();
            }
            this.setState({ light: this.state.light + stepValue });
            this.animationRequestId = requestAnimationFrame(step);
        };
        this.animationRequestId = requestAnimationFrame(step);
    }

    offLight(callback) {
        Animated.timing(
            this.state.light,
            {
                toValue: 0.001,
                duration: 800
            }
        ).start(() => callback && callback());
        // this.cancelCurrentAnimationRequest();
        // this.animationLoop(
        //     (v) => v <= 0,
        //     - 0.025,
        //     callback
        // );
    }

    onLight(callback) {
        console.log(this.state.light);
        Animated.timing(
            this.state.light,
            {
                toValue: 1,
                duration: 800,
                delay: 500
            }
        ).start(() => callback && callback());
        // this.cancelCurrentAnimationRequest();
        // this.animationLoop(
        //     (v) => v >= 1,
        //     0.025,
        //     callback
        // );
    }
    
    putOutLight(endValue, callback) {
        Animated.timing(
            this.state.light,
            {
                toValue: endValue,
                duration: 600
            }
        ).start(() => callback && callback());
        // this.cancelCurrentAnimationRequest();
        // this.animationLoop(
        //     (v) => v <= endValue,
        //     - 0.025,
        //     callback
        // );
    }

    cancelCurrentAnimationRequest() {
        if (this.animationRequestId) {
            cancelAnimationFrame(this.animationRequestId);
        }
    }

    componentWillUnmount() {
        this.cancelCurrentAnimationRequest();
    }
};

export default lightMixin;