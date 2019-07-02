import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/MiniPaletteStyles';
import DeleteIcon from '@material-ui/icons/Delete';

const MiniPalette = React.memo(({classes, paletteName, colors, goToPalette, id, openDialog}) => {

    const handleDelete = (e) => {
        e.stopPropagation();
        openDialog(id);
    }
    const handleClick = () => {
        goToPalette(id)

    }

    const miniColorBoxes = colors.map((color) => (
        <div 
            className={classes.miniColor} 
            style={{backgroundColor: color.color}}
            key={color.name}
        ></div>
    ))

    return (
        <div className={classes.root} onClick={handleClick}>
        {console.log('rerendering', paletteName)}
            <DeleteIcon 
                className={classes.deleteIcon} 
                onClick={handleDelete} 
            />
      
           <div className={classes.colors}>{miniColorBoxes}</div>
           <h5 className={classes.title}>{paletteName}</h5>
        </div>
    );
});

export default withStyles(styles)(MiniPalette);