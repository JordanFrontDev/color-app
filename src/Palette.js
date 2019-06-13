import React, { useState } from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import Footer from './Footer';
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

    const { colors, paletteName, emoji, id } = palette;
    return (
        <div className='palette'>
            <NavBar
                level={level}
                changeLevel={changeLevel}
                changeFormat={changeFormat}
                showLevels={true}
            />

            <div className='palette-color'>
                {colors[level].map((color) => (
                    <ColorBox
                        background={color[format]}
                        name={color.name} key={id}
                        colorId={color.id}
                        paletteId={id} 
                        showLink={true}
                    />
                ))}
            </div>
            <Footer paletteName={paletteName} />
        </div>
    );
}

export default Palette;