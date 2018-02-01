// Auto-generated content.
// This file contains the boilerplate to set up your React app.
// If you want to modify your application, start in "index.vr.js"

// Auto-generated content.
import '../process';
import { VRInstance } from 'react-vr-web';
import WebBrowserModule from '../native-modules/webBrowserModule';

function init(bundle, parent, options) {
  const domOverlayContainer = document.createElement('div');
  domOverlayContainer.id = 'dom-overlay';

  const webBrowser = new WebBrowserModule(domOverlayContainer);

  const vr = new VRInstance(bundle, 'GrodnoVR', parent, {
    allowCarmelDeeplink: true,
    antialias: true,
    hideFullscreen: true,
    cursorVisibility: 'visible',
    ...options,
    nativeModules: [webBrowser]
  });

  vr.player._wrapper.appendChild(domOverlayContainer);

  vr.render = function() {
    // Any custom behavior you want to perform on each frame goes here
    // vr.scene.rotation.y = vr.scene.rotation.y - 0.002;
  };
  // Begin the animation loop
  vr.start();
  return vr;
}

window.ReactVR = {init};
