import React from 'react';
import './ColorBox.css';

const ColorBox = ({ background, name }) => {
    return (
        <div style={{background}} className='color-box'>
        <span>{name}</span>
            <span>MORE</span>
        </div>
    );
}

export default ColorBox;