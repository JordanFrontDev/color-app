import React, { useState } from 'react';
import './ColorBox.css';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ColorBox = ({ background, name, colorId, paletteId, showLink }) => {
    const [isCopied, setIsCopied] = useState(false);

    const changeCopyState = () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1500);
    };

    return (
        <CopyToClipboard text={background} onCopy={changeCopyState}>
            <div style={{ background }} className='color-box'>
                <div style={{ background }} className={`copy-overlay ${isCopied && "show"}`} />
                <div className={`copy-msg ${isCopied && "show"}`}>
                    <h1>Copied!</h1>
                    <p>{background}</p>
                </div>
                <div className='copy-container'>
                    <div className='box-content'>
                        {name}
                    </div>
                    <button className='copy-button'>Copy</button>
                </div>
                {showLink && 
                <Link to={`/palette/${paletteId}/${colorId}`} onClick={(e) => e.stopPropagation()}>
                    <span className='see-more'>More</span>
                </Link>}
            </div>
        </CopyToClipboard>
    );
}

export default ColorBox;