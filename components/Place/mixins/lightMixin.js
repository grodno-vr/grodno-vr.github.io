
const lightMixin = Base => class extends Base {

    constructor() {
        super();
        this.animationRequestId = null;
        // 1 - day, 0 - night
        this.state = { light: 0 };
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
        this.animationLoop(
            (v) => v <= 0,
            - 0.025,
            callback
        );
    }

    onLight(callback) {
        this.animationLoop(
            (v) => v >= 1,
            0.025,
            callback
        );
    }

    componentWillUnmount() {
        if (this.animationRequestId) {
            cancelAnimationFrame(this.animationRequestId);
        }
    }
};

export default lightMixin;