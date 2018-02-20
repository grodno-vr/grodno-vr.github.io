import '../process';
import {VRInstance} from 'react-vr-web';

import PersistenceOverlayModule from '../native-modules/persistenceOverlayModule';
import DomOverlayModule from '../native-modules/domOverlayModule';
import RayCastersModule from '../native-modules/rayCastersModule';
import AjaxHandlerModule from '../native-modules/ajaxHandlerModule';

function init(bundle, parent, options) {

    const ajaxModule = new AjaxHandlerModule();
    wrapXMLHttpRequest(ajaxModule);

    const domOverlayContainer = document.createElement('div');
    const persistenceOverlayContainer = document.createElement('div');

    domOverlayContainer.id = 'dom-overlay';
    persistenceOverlayContainer.id = 'persistence-overlay';

    const domOverlay = new DomOverlayModule(domOverlayContainer);
    const persistenceOverlayOverlay = new PersistenceOverlayModule(persistenceOverlayContainer);
    const rayCastersFactory = new RayCastersModule();

    const vr = new VRInstance(bundle, 'GrodnoVR', parent, {
        raycasters: [rayCastersFactory.createMouseRayCaster()],
        cursorVisibility: 'visible',

        allowCarmelDeeplink: true,
        antialias: true,
        hideFullscreen: true,
        enableHotReload: true,
        ...options,

        nativeModules: [domOverlay, persistenceOverlayOverlay, ajaxModule]
    });

    window.addEventListener('vrdisplaypresentchange', event => {
        const rayCasters = [];
        // OVRUI promise to support multiple ray casters in future
        if (event && event.display && event.display.isPresenting) {
            rayCasters.push(rayCastersFactory.createVrDotRayCater());
        } else {
            rayCasters.push(rayCastersFactory.createMouseRayCaster());
        }

        if (vr && vr.guiSys) {
            vr.guiSys._raycasters = rayCasters;
        }
    });

    vr.player._wrapper.appendChild(domOverlayContainer);
    vr.player._wrapper.appendChild(persistenceOverlayContainer);

    vr.render = function () {
        // Any custom behavior you want to perform on each frame goes here
        // vr.scene.rotation.y = vr.scene.rotation.y - 0.002;
    };
    // Begin the animation loop
    vr.start();
    return vr;
}

window.ReactVR = {init, handlers: []};

function wrapXMLHttpRequest(ajaxModule) {
    const _send = XMLHttpRequest.prototype.send;

    XMLHttpRequest.prototype.send = function () {
        var callback = this.onreadystatechange;
        this.onreadystatechange = function () {
            if (this.readyState) {
                const handlers = ajaxModule.getHandlers();
                const keys = Object.keys(handlers);

                for (let i = 0; i < keys.length; i++) {
                    const key = keys[i];
                    if (this.responseURL.indexOf(key)) {
                        // handlers[key] && handlers[key](this);
                        handlers[key] && console.log('Got it:', key);
                        ajaxModule.unregisterHandler(key);
                    }
                }
            }

            callback && callback.apply(this, arguments);
        };

        _send.apply(this, arguments);
    };
}