
const lightMixin = Base => class extends Base {

    constructor() {
        super();
        this.animationRequestId = null;
        // 1 - day, 0 - night
        this.state = { light: 0 };
    }

    animationLoop(condition, stepValue, callback) {
        const step = () => {
            if (condition()) {
                return callback && callback();
            }
            this.setState({ light: this.state.light + stepValue });
            this.animationRequestId = requestAnimationFrame(step);
        };
        this.animationRequestId = requestAnimationFrame(step);
    }

    offLight(callback) {
        this.animationLoop(
            () => this.state.light <= 0,
            - 0.03,
            callback
        );
    }

    onLight(callback) {
        this.animationLoop(
            () => this.state.light >= 1,
            0.03,
            callback
        );
    }

    componentWillUnmount() {
        if (this.animationRequestId) {
            cancelAnimationFrame(this.animationRequestId);
        }
    }

    // componentWillReceiveProps() {
    //     this.onLight();
    // }
};

export default lightMixin;