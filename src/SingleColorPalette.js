import React, { useState } from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteStyles';


const SingleColorPalette = ({ palette, colorId, classes }) => {

    const [format, setFormat] = useState('hex');


    const gatherShades = (palette, colorToFilterBy) => {
        let shades = [];
        let allColors = palette.colors;

        Object.keys(allColors).forEach(key => {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            )
        });

        return shades;
    }

    const changeFormat = (value) => {
        setFormat(value);
    }


    return (
        <div className={classes.palette}>
            <NavBar changeFormat={changeFormat} showLevels={false} />
            <div className={classes.paletteColors}>
                {gatherShades(palette, colorId).slice(1).map(color => (
                    <ColorBox
                        key={color.name}
                        name={color.name}
                        background={color[format]}
                        showLink={false}
                    />
                ))}
                <div className={classes.goBack}>
                    <Link to={`/palette/${palette.id}`}>Go Back</Link>
                </div>
            </div>
            <Footer paletteName={palette.paletteName} />
        </div>
    );
}

export default withStyles(styles)(SingleColorPalette);