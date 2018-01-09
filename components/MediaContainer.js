import React from 'react';

const MediaContainer = props => (
    <div className="media-container">
        <div className="media-container__close close" onClick={props.onClose}>Close</div>
        <div className="media-container__layout">
            <div className="media-content">
                <header className="media-content__header">
                    <h1 className="heading">{props.title}</h1>
                </header>
                <article className="media-content__article article">
                    {props.description.split('\n').map((paragraph, index) => <p key={`paragraph-${index}`}>{paragraph}</p>)}
                </article>
            </div>
        </div>
    </div>
);

export default MediaContainer;
