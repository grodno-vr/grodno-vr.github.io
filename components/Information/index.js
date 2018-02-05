import React from 'react';

const Information = props => (
    <div className="media-container">
        <div className="media-container__close close" onClick={props.onClose}>Close</div>
        <div className="media-container__layout">
            <div className="media-content">
                <header className="media-content__header">
                    <h1 className="heading">{props.title}</h1>
                </header>
                <article className="media-content__article article">
                    {props.description.split('\n').map((paragraph, index) => <p key={`paragraph-${index}`}>{paragraph}</p>)}
                    {/*<div className="sketchfab-embed-wrapper">*/}
                        {/*<iframe width="640" height="480" src="https://sketchfab.com/models/2f815995909f45b18a0e34d31a2fae74/embed"></iframe>*/}
                    {/*</div>*/}
                </article>
            </div>
        </div>
    </div>
);

export default Information;
