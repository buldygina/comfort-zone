import React from 'react';
const Circle = ({onClick, children }) => {
    return (
        <button className="round-button" onClick={onClick}>{children}
        </button>
    );
}

export default Circle;