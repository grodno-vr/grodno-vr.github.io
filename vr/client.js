// Auto-generated content.
// This file contains the boilerplate to set up your React app.
// If you want to modify your application, start in "index.vr.js"

// Auto-generated content.
import '../process';
import { VRInstance } from 'react-vr-web';
import PersistenceOverlayModule from '../native-modules/persistenceOverlayModule';
import DomOverlayModule from '../native-modules/domOverlayModule';

function init(bundle, parent, options) {
  const domOverlayContainer = document.createElement('div');
  const persistenceOverlayContainer = document.createElement('div');

  domOverlayContainer.id = 'dom-overlay';
  persistenceOverlayContainer.id = 'persistence-overlay';

  const domOverlay = new DomOverlayModule(domOverlayContainer);
  const persistenceOverlayOverlay = new PersistenceOverlayModule(persistenceOverlayContainer);

  const vr = new VRInstance(bundle, 'GrodnoVR', parent, {
    allowCarmelDeeplink: true,
    antialias: true,
    hideFullscreen: true,
    cursorVisibility: 'visible',
    ...options,
    nativeModules: [domOverlay, persistenceOverlayOverlay]
  });

  vr.player._wrapper.appendChild(domOverlayContainer);
  vr.player._wrapper.appendChild(persistenceOverlayContainer);

  vr.render = function() {
    // Any custom behavior you want to perform on each frame goes here
    // vr.scene.rotation.y = vr.scene.rotation.y - 0.002;
  };
  // Begin the animation loop
  vr.start();
  return vr;
}

window.ReactVR = {init};
