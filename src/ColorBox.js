import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { withStyles } from '@material-ui/styles';
import styles from './styles/ColorBoxStyles';


const ColorBox = ({ background, name, colorId, paletteId, showLink, classes }) => {
    const [isCopied, setIsCopied] = useState(false);

    const changeCopyState = () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1500);
    };

    return (
        <CopyToClipboard text={background} onCopy={changeCopyState}>
            <div style={{ background }} className={classes.colorBox}>
                <div style={{ background }} className={`${classes.copyOverlay} ${isCopied && classes.showOverlay}`} />
                <div className={`${classes.copyMsg} ${isCopied && classes.showCopyMsg}`}>
                    <h1>Copied!</h1>
                    <p className={classes.copyText}>{background}</p>
                </div>
                <div>
                    <div className={classes.boxContent}>
                        <span className={classes.colorName}>{name}</span>
                    </div>
                    <button className={classes.copyButton}>Copy</button>
                </div>
                {showLink &&
                    <Link to={`/palette/${paletteId}/${colorId}`} onClick={(e) => e.stopPropagation()}>
                        <span className={classes.seeMore}>More</span>
                    </Link>}
            </div>
        </CopyToClipboard>
    );
}

export default withStyles(styles)(ColorBox);