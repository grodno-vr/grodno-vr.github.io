import React from 'react';
import ReactDOM from 'react-dom';
import { Module } from 'react-vr-web';
import Information from '../components/Information';
import WebLoading from '../components/Loading/WebLoading';

class WebBrowserModule extends Module {
    constructor(overlayContainer) {
        super('WebBrowserModule');

        this._closeOverlay = this.closeOverlay.bind(this);
        this._overlayContainer = overlayContainer;
    }

    openInformation(props) {
        ReactDOM.render(
            <Information {...props} onClose={this._closeOverlay} />,
            this._overlayContainer,
        );
    }

    loading() {
        ReactDOM.render(
            <WebLoading />,
            this._overlayContainer,
        );
    }

    closeOverlay() {
        ReactDOM.unmountComponentAtNode(this._overlayContainer);
    }

}

export default WebBrowserModule;
