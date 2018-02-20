import * as OVRUI from 'ovrui';
// import ControllerRayCaster from 'react-vr-controller-raycaster';

class RayCastersModule {
    constructor(/*scene*/) {
        // this.scene = scene;
    }

    createVrDotRayCater() {
        return {
            getType: () => 'simpleDot',
            getRayOrigin: () => [0, 0, 0],
            getRayDirection: () => [0, 0, -1],
            drawsCursor: () => true
            // getMaxLength: () => 20
        };
    }
    
    createMouseRayCaster() {
        return new OVRUI.MouseRayCaster();        
    }
}

export default RayCastersModule;