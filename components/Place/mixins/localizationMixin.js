import React from 'react';
import { VrHeadModel, NativeModules } from 'react-vr';

const { PersistenceOverlayModule } = NativeModules;

const localizationMixin = Base => class extends Base {

    constructor(props) {
        super(props);
        // this.state = { ...this.state, locale: 'ENG' };
    }

    renderLocalizationControls() {
        if (VrHeadModel.inVR()) {
            // TODO render VR controls
        } else {
            PersistenceOverlayModule.renderLocalizationButtons({
                buttons: ['ENG', 'RU', 'BY']
            });
        }
    }
};

export default localizationMixin;