import React, { useState } from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import './Palette.css';


const Palette = ({ palette }) => {
    const [level, setLevel] = useState(500);
    const [format, setFormat] = useState('hex');

    const changeLevel = (newLevel) => {
        setLevel(newLevel);
    };

    const changeFormat = (value) => {
        setFormat(value);
    }

    return (
        <div className='palette'>
            <NavBar
                level={level}
                changeLevel={changeLevel}
                changeFormat={changeFormat}
            />

            <div className='palette-color'>
                {palette.colors[level].map((color) => (
                    <ColorBox background={color[format]} name={color.name} />
                ))}
            </div>
        </div>
    );
}

export default Palette;