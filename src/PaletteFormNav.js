import React, {useState} from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';
import PaletteMetaForm from './PaletteMetaForm';
import useStyles from './styles/PaletteNewFormNavStyles';


const PaletteFormNav = ({ open, palettes, handleSubmit, handleDrawerOpen}) => {
    const classes = useStyles();
    const [isFormShowing, setIsFormShowing] = useState(false);

    const showForm = () => {
        setIsFormShowing(true);
    }

    const hideForm = () => {
        setIsFormShowing(false);
    }

    return (
        <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color='default'
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
        <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Create Palette
            </Typography>
        </Toolbar>
        <div className={classes.buttons}>
            
            <Link to='/'>
                  <Button variant='contained' color='primary' className={classes.button} >Go Back</Button>
            </Link>
            <Button variant="contained" color="secondary" onClick={showForm} className={classes.button}>
                Save
            </Button>
        </div>
        </AppBar>
        {isFormShowing && 
            <PaletteMetaForm 
                palettes={palettes}  
                handleSubmit={handleSubmit} 
                hideForm={hideForm} 
            />}

        </div>
    );
}

export default PaletteFormNav;