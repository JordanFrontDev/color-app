import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Palette.css';


const Palette = ({ palette }) => {
    const [level, setLevel] = useState(500);

    const changeLevel = (newLevel) => {
        setLevel(newLevel);
    };

    return (
        <div className='palette'>
            <div className='slider'>
                <Slider
                    defaultValue={level}
                    min={100} max={900}
                    onAfterChange={changeLevel}
                    step={100}
                />
            </div>
            <div className='palette-color'>
                {palette.colors[level].map((color) => (
                    <ColorBox background={color.hex} name={color.name} />
                ))}
            </div>
        </div>
    );
}

export default Palette;