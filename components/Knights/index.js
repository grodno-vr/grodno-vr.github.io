import React from 'react';
import { asset, Model, DirectionalLight } from 'react-vr';

const Knights = (props) => {
    return (
        <DirectionalLight intensity={3}>
            <Model
                style={{
                    transform: [...props.transform]
                }}
                lit={true}
                source={{
                    obj: asset('models/knight/knight.obj'),
                    mtl: asset('models/knight/knight.mtl')
                }}
            />
        </DirectionalLight>
    );
};

export default Knights;