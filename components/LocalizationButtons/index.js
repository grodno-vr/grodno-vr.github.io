import React from 'react';

const LocalizationButtons = props => {
    const { buttons = [] } = props;
    return (
        <div className="localization-buttons">
            {
                buttons.map((button, index) => {
                    return (
                        <div
                            style={{ color: index ? 'gray' : 'white' }}
                            className="localization-button"
                            key={`${button}-${index}`}
                        >
                            <p>{button}</p>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default LocalizationButtons;