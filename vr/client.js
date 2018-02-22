import '../process';
import {VRInstance} from 'react-vr-web';

import PersistenceOverlayModule from '../native-modules/persistenceOverlayModule';
import DomOverlayModule from '../native-modules/domOverlayModule';
import RayCastersModule from '../native-modules/rayCastersModule';

function init(bundle, parent, options) {

    const domOverlayContainer = document.createElement('div');
    const persistenceOverlayContainer = document.createElement('div');

    domOverlayContainer.id = 'dom-overlay';
    persistenceOverlayContainer.id = 'persistence-overlay';

    const domOverlay = new DomOverlayModule(domOverlayContainer);
    const persistenceOverlayOverlay = new PersistenceOverlayModule(persistenceOverlayContainer);

    const vr = new VRInstance(bundle, 'GrodnoVR', parent, {
        cursorVisibility: 'visible',

        allowCarmelDeeplink: true,
        antialias: true,
        hideFullscreen: true,
        enableHotReload: true,
        ...options,

        nativeModules: [domOverlay, persistenceOverlayOverlay]
    });

    window._rayCastersController = new RayCastersModule(vr);

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