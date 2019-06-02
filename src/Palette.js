import React from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

const Palette = ({ palette }) => {
    console.log(palette);
    return (
        <div className='palette'>
            <div className='palette-color'>
            {palette.colors.map((color) => (
                <ColorBox background={color.color} name={color.name} />
            ))}
            </div>
        </div>
    );
}

export default Palette;