import React from 'react';
import {withStyles} from '@material-ui/styles';
import styles from './styles/PaletteFooterStyles';

const Footer = ({ paletteName, classes }) => {
    return (
        <footer className={classes.footer}>
            {paletteName}
        </footer>
    );
}

export default withStyles(styles)(Footer);