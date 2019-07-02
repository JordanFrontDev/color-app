import sizes from './sizes';
import chroma from 'chroma-js';

const styles = {
    root: {
        width: '20%',
        height: '25%',
        margin: '0 auto',
        display: 'inline-block',
        cursor: 'pointer',
        position: 'relative',
        marginBottom: '-5px',
        '&:hover svg': {
            color: '#fff',
            transform: 'scale(1.5)'
        },
        [sizes.down('lg')]: {
            width: '25%',
            height: '20%'
        },
        [sizes.down('md')]: {
            width: '50%',
            height: '10%'
        },
        [sizes.down('sm')]: {
            width: '100%',
            height: '5%'
        }
    },
    boxContent:{
        position: 'absolute',
        width: '100%',
        left: '0rem',
        color: props => chroma(props.color).luminance() <= 0.08 ? 'white' : 'black',
        bottom: '0rem',
        padding: '.5rem',
        letterSpacing: '0.1rem',
        textTransform: 'uppercase',
        display: 'flex',
        justifyContent: 'space-between'
    },
    deleteIcon: {
       transition: 'all .2s ease-in-out',
    }
};

export default styles;