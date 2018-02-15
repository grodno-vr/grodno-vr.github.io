import { Module } from 'react-vr-web';

class AjaxHandlersModule extends Module {

    constructor() {
        super('AjaxHandlersModule');
        this._handlers = {};
    }

    registerHandler(handler) {
        this._handlers[handler] = true; // can't share functions/cb between VR and native module
        console.log(this._handlers);
    }

    unregisterHandler(handler) {
        this._handlers[handler] = null;
    }
    
    getHandlers() {
        return this._handlers;
    }
}

export default AjaxHandlersModule;