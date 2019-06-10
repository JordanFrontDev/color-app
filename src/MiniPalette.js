import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        backgroundColor: '#fff',
        borderRadius: '5px',
        border: '1px solid black',
        padding: '0.5rem',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    colors: {
        backgroundColor: 'grey'
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        margin: '0',
        color: '#000',
        paddingTop: '0.5rem',
        fontSize: '1rem',
        position: 'relative' 
    }
}

const MiniPalette = ({classes, paletteName}) => {
    return (
        <div className={classes.root}>
           <div className={classes.colors}></div>
           <h5 className={classes.title}>{paletteName}</h5>
        </div>
    );
}

export default withStyles(styles)(MiniPalette);