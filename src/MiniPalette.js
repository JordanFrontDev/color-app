import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        backgroundColor: '#fff',
        borderRadius: '5px',
        padding: '0.5rem',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    colors: {
        height: '115px',
        width: '100%',
        borderRadius: '5px',
        overflow: 'hidden'
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        margin: '0',
        color: '#000',
        paddingTop: '0.5rem',
        fontSize: '1rem',
        position: 'relative' 
    },
    miniColor: {
        height: '25%',
        width: '20%',
        display: 'inline-block',
        margin: '0 auto',
        position: 'relative',
        marginBottom: '-3.5px'
    }
}

const MiniPalette = ({classes, paletteName, colors, goToPalette, id}) => {
    const miniColorBoxes = colors.map((color) => (
        <div 
            className={classes.miniColor} 
            style={{backgroundColor: color.color}}
            key={color.name}
        ></div>
    ))
    return (
        <div className={classes.root} onClick={() => goToPalette(id)}>
           <div className={classes.colors}>{miniColorBoxes}</div>
           <h5 className={classes.title}>{paletteName}</h5>
        </div>
    );
}

export default withStyles(styles)(MiniPalette);