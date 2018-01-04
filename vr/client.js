// Auto-generated content.
// This file contains the boilerplate to set up your React app.
// If you want to modify your application, start in "index.vr.js"

// Auto-generated content.
import '../process';
import {VRInstance} from 'react-vr-web';
import MediaContainerModule from '../native-modules/MediaContainerModule';

function init(bundle, parent, options) {
  const domOverlayContainer = document.createElement('div');
  domOverlayContainer.id = 'dom-overlay';

  const mediaContainer = new MediaContainerModule(domOverlayContainer);

  const vr = new VRInstance(bundle, 'WelcomeToVR', parent, {
    allowCarmelDeeplink: true,
    ...options,
    nativeModules: [mediaContainer],
  });

  vr.player._wrapper.appendChild(domOverlayContainer);

  vr.render = function() {
    // Any custom behavior you want to perform on each frame goes here
  };
  // Begin the animation loop
  vr.start();
  return vr;
}

window.ReactVR = {init};
