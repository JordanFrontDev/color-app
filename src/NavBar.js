import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import { IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './styles/NavBarStyles';
import 'rc-slider/assets/index.css';



const NavBar = ({ level, changeLevel, changeFormat, showLevels, classes }) => {
    const [format, setFormat] = useState('hex');
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (e) => {
        setFormat(e.target.value);
        changeFormat(e.target.value);
        setIsOpen(true);
    }

    const closeSnackBar = () => {
        setIsOpen(false);
    }


    return (
        <header className={classes.navbar}>
            <div className={classes.logo}>
                <Link to='/'>ReactColorPicker</Link>
            </div>
            {showLevels &&
                <div className={classes.container}>
                    <span>Level: {level}</span>
                    <div className={classes.slider}>
                        <Slider
                            defaultValue={level}
                            min={100} max={900}
                            onAfterChange={changeLevel}
                            step={100}
                        />
                    </div>
                </div>}

            <div className={classes.selectContainer}>
                <Select value={format} onChange={handleChange}>
                    <MenuItem value='hex'>HEX - #ffffff</MenuItem>
                    <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
                    <MenuItem value='rgba'>RGBA - rgba(255,255,255, 1.0)</MenuItem>

                </Select>
            </div>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                open={isOpen}
                autoHideDuration={3000}
                message={<span id='message-id'>Format changed to {format.toUpperCase()}</span>}
                ContentProps={{
                    'aria-describedby': 'message-id'
                }}
                onClose={closeSnackBar}
                action={[
                    <IconButton
                        onClick={closeSnackBar}
                        color='inherit'
                        key='close'
                        aria-label='close'
                    >
                        <CloseIcon />
                    </IconButton>
                ]}
            />
        </header>
    )
}

export default withStyles(styles)(NavBar);