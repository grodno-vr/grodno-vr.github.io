import * as OVRUI from 'ovrui';
// import ControllerRayCaster from 'react-vr-controller-raycaster';

class RayCastersModule {
    constructor(vr) {
        this._vrRef = vr;
        this._currentRayCasters = [this.createMouseRayCaster()];

        this.changeRayCasters(this._currentRayCasters);

        window.addEventListener('vrdisplaypresentchange', event => {
            this._currentRayCasters = [];

            // TODO: OVRUI promise to support multiple ray casters in future
            if (event && event.display && event.display.isPresenting) {
                this._currentRayCasters.push(this.createVrDotRayCater());
            } else {
                this._currentRayCasters.push(this.createMouseRayCaster());
            }

            this.changeRayCasters(this._currentRayCasters);
        });
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

    turnOffRayCasters() {
        this.changeRayCasters([]);
    }

    turnOnRayCasters() {
        this.changeRayCasters(this._currentRayCasters);
    }

    changeRayCasters(rayCasters) {
        if (this._vrRef && this._vrRef.guiSys) {
            this._vrRef.guiSys._raycasters = rayCasters;
        }
    }
}

export default RayCastersModule;