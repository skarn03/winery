import React from 'react';
import './Overlay.css';

const Overlay = ({ onClose, children }) => {
    return (
        <div className="overlay-backdrop">
            <div className="overlay-content">
                <button className="overlay-close-button" onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Overlay;
