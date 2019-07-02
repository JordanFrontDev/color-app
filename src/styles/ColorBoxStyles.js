import chroma from 'chroma-js';
import sizes from './sizes';

const styles = {
    colorBox: {
        width: '20%',
        height: props => props.showLink ? '25%' : '50%',
        margin: '0 auto',
        display: 'inline-block',
        cursor: 'pointer',
        position: 'relative',
        marginBottom: '-3.5px',
        '&:hover button': {
            opacity: 1
        },
        [sizes.down('lg')]: {
            width: '25%',
            height: props => props.showLink ? '20%' : '33.33333%',
        },
        [sizes.down('md')]: {
            width: '50%',
            height: props => props.showLink ? '10%' : '20%',
        },
        [sizes.down('sm')]: {
            width: '100%',
            height: props => props.showLink ? '5%' : '10%',

        }
    },
    boxContent: {
        position: 'absolute',
        width: '100%',
        left: '0rem',
        bottom: '0rem',
        padding: '.5rem',
        color: '#000',
        letterSpacing: '0.1rem',
        textTransform: 'uppercase'
    },
    copyText: {
        color: props => chroma(props.background).luminance() >= 0.7 ? 'black' : 'white'
    },
    colorName: {
        color: props => chroma(props.background).luminance() <= 0.08 ? 'white' : 'black'
    },
    seeMore: {
        background: 'rgba(255, 255, 255, 0.3)',
        position: 'absolute',
        border: 'none',
        right: '0rem',
        bottom: '0rem',
        color: props => chroma(props.background).luminance() >= 0.7 ? 'black' : 'white',
        width: '5rem',
        height: '2rem',
        textAlign: 'center',
        lineHeight: '2rem',
        textTransform: 'uppercase'
    },
    copyButton: {
        width: '6rem',
        height: '3rem',
        position: 'absolute',
        display: 'inline-block',
        top: '50%',
        left: '50%',
        marginLeft: '-2.4rem',
        marginTop: '-1.5rem',
        textAlign: 'center',
        outline: 'none',
        background: 'rgba(255, 255, 255, 0.3)',
        fontSize: '1.5rem',
        lineHeight: '30px',
        color: props => chroma(props.background).luminance() >= 0.7 ? 'black' : 'white',
        textTransform: 'uppercase',
        border: 'none',
        textDecoration: 'none',
        opacity: 0
    },
    copyOverlay: {
        opacity: 0,
        zIndex: 0,
        height: '100%',
        width: '100%',
        transition: 'transform 0.6s ease-in-out'
    },
    showOverlay: {
        opacity: 1,
        zIndex: 10,
        transform: 'scale(50)',
        position: 'absolute'
    },
    copyMsg: {
        position: 'fixed',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        fontSize: '3rem',
        transform: 'scale(0.1)',
        opacity: 0,
        color: '#fff',
        textAlign: 'center',
        '& h1': {
            fontWeight: 400,
            background: 'rgba(255, 255, 255, 0.3)',
            width: '100%',
            marginBottom: 0,
            padding: '1rem',
            textTransform: 'uppercase',
            [sizes.down('sm')]: {
                fontSize: '5rem'
            }
        }

    },
    showCopyMsg: {
        opacity: 1,
        transform: 'scale(1)',
        zIndex: 11,
        transition: 'all .4s ease-in-out'

    }
}

export default styles;
