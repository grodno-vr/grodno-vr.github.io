import React from 'react';
import { asset, VrButton, Animated, VrSoundEffects } from 'react-vr';

const GAZE_TIMEOUT = 1500; // 1.5s
const AnimatedButton = Animated.createAnimatedComponent(VrButton);

class GazeButton extends React.Component {

    constructor(props) {
        super(props);
        this.lastTimeoutId = 0;
        this.state = { hasFocus: false };
    }

    componentWillUnmount() {
        if (this.lastTimeoutId) {
            clearTimeout(this.lastTimeoutId);
        }
    }

    render() {
        const { onClick, onExit, onEnter, children, ...others } = this.props;
        return (
            <AnimatedButton
                {...others}
                onClick={() => onClick()}
                onEnter={() => {
                    onEnter && onEnter();
                    this.setState({ hasFocus: true });
                    this.lastTimeoutId = setTimeout(() => {
                        this.setState({ hasFocus: false });
                        VrSoundEffects.play(asset('audio/click.wav'));
                        onClick();
                    }, GAZE_TIMEOUT);
                }}
                onExit={() => {
                      onExit && onExit();
                      this.setState({ hasFocus: false });
                      clearTimeout(this.lastTimeoutId);
                      this.lastTimeoutId = 0;
                }}
                // onEnterSound={asset('audio/hover-1.wav')}
                onClickSound={asset('audio/click.wav')}
                // onLongClickSound={onClickSound}
            >
                {children}
            </AnimatedButton>
        );
    }
}

module.exports = GazeButton;