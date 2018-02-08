// Auto-generated content.
// This file contains the boilerplate to set up your React app.
// If you want to modify your application, start in "index.vr.js"

// Auto-generated content.
import '../process';
import { VRInstance } from 'react-vr-web';

import * as THREE from 'three';
import * as OVRUI from 'ovrui';
import ControllerRayCaster from 'react-vr-controller-raycaster';

import PersistenceOverlayModule from '../native-modules/persistenceOverlayModule';
import DomOverlayModule from '../native-modules/domOverlayModule';


// const SimpleRaycaster = {
//   getType: () => "simple",
//   getRayOrigin: () => [0, 0, 0],
//   getRayDirection: () => [0, 0, -1],
//   drawsCursor: () => true
// };

function init(bundle, parent, options) {
  const domOverlayContainer = document.createElement('div');
  const persistenceOverlayContainer = document.createElement('div');

  domOverlayContainer.id = 'dom-overlay';
  persistenceOverlayContainer.id = 'persistence-overlay';

  const domOverlay = new DomOverlayModule(domOverlayContainer);
  const persistenceOverlayOverlay = new PersistenceOverlayModule(persistenceOverlayContainer);
  const scene = new THREE.Scene();

  const vr = new VRInstance(bundle, 'GrodnoVR', parent, {
    raycasters: [
      new ControllerRayCaster({scene, color: '#ff0000'}),
      new OVRUI.MouseRayCaster()
    ],
    scene: scene,
    cursorVisibility: 'visible',
    allowCarmelDeeplink: true,
    antialias: true,
    hideFullscreen: true,
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
