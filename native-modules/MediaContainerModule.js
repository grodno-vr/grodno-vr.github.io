import React from 'react';
import ReactDOM from 'react-dom';
import { Module } from 'react-vr-web';
import MediaContainer from '../components/MediaContainer';

class MediaContainerModule extends Module {
    constructor(overlayContainer) {
        super('MediaContainerModule');

        this._closeOverlay = this.closeOverlay.bind(this);
        this._overlayContainer = overlayContainer;
    }

    openOverlay(props) {
        ReactDOM.render(
            <MediaContainer {...props} onClose={this._closeOverlay} />,
            this._overlayContainer,
        );
    }

    closeOverlay() {
        ReactDOM.unmountComponentAtNode(this._overlayContainer);
    }

}

export default MediaContainerModule;
