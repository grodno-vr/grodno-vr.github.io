import * as OVRUI from 'ovrui';
import ControllerRayCaster from 'react-vr-controller-raycaster';

class RayCastersModule {
    constructor(scene) {
        this.scene = scene;
        this.simpleDotRaycaster = {
            getType: () => 'simple',
            getRayOrigin: () => [0, 0, 0],
            getRayDirection: () => [0, 0, -1],
            drawsCursor: () => true
        };
    }

    createRayCasters() {
        const { scene, simpleDotRaycaster } = this;
        return [
            simpleDotRaycaster
            //new ControllerRayCaster({ scene, color: '#ff0000'}),
            // new OVRUI.MouseRayCaster()
        ];
    }
}

export default RayCastersModule;