import React from 'react';
import ReactDOM from 'react-dom';
import { Module } from 'react-vr-web';
import Information from '../components/Information';
import Loading from '../components/Loading';

class InfoContainerModule extends Module {
    constructor(overlayContainer) {
        super('InfoContainerModule');

        this._closeOverlay = this.closeOverlay.bind(this);
        this._overlayContainer = overlayContainer;
    }

    openOverlay(props) {
        ReactDOM.render(
            <Information {...props} onClose={this._closeOverlay} />,
            this._overlayContainer,
        );
    }

    loading(props) {
        ReactDOM.render(
            <Loading {...props} onClose={this._closeOverlay} />,
            this._overlayContainer,
        );
    }

    closeOverlay() {
        ReactDOM.unmountComponentAtNode(this._overlayContainer);
    }

}

export default InfoContainerModule;
