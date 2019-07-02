import React, { useState } from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import Footer from './Footer';
import {withStyles} from '@material-ui/styles';
import styles from './styles/PaletteStyles';


const Palette = ({ palette, classes }) => {
    const [level, setLevel] = useState(500);
    const [format, setFormat] = useState('hex');

    const changeLevel = (newLevel) => {
        setLevel(newLevel);
    };

    const changeFormat = (value) => {
        setFormat(value);
    }

    const { colors, paletteName, id } = palette;
    return (
        <div className={classes.palette}>
            <NavBar
                level={level}
                changeLevel={changeLevel}
                changeFormat={changeFormat}
                showLevels={true}
            />

            <div className={classes.paletteColors}>
                {colors[level].map((color) => (
                    <ColorBox
                        key={color.id}
                        background={color[format]}
                        name={color.name} 
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

export default withStyles(styles)(Palette);