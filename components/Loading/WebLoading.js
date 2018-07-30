import React from 'react';

const WebLoading = props => (
    <div className="loading">
        <div className="loader"></div>
        <p>{props.text || 'Loading...'}</p>
    </div>
);

export default WebLoading;