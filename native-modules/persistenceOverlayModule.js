import React from 'react';
import ReactDOM from 'react-dom';
import { Module } from 'react-vr-web';
import LocalizationButtons from '../components/LocalizationButtons';

class PersistenceOverlayModule extends Module {

    constructor(overlayContainer) {
        super('PersistenceOverlayModule');

        this._closeOverlay = this.closeOverlay.bind(this);
        this._overlayContainer = overlayContainer;
    }

    renderLocalizationButtons(props) {
        ReactDOM.render(
            <LocalizationButtons {...props} />,
            this._overlayContainer,
        );
    }

    closeOverlay() {
        ReactDOM.unmountComponentAtNode(this._overlayContainer);
    }

}

export default PersistenceOverlayModule;