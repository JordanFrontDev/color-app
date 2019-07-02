import sizes from './sizes';

const styles = {
    navbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '6vh'
    },

    logo: {
        marginRight: '1.5rem',
        padding: '0 1.3rem',
        fontSize: '1rem',
        backgroundColor: '#eceff1',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        '& a': {
            textDecoration: 'none',
            color: '#000'
        },
        [sizes.down('sm')]: {
            display: 'none'
        }
    },

    slider: {
        width: '30rem',
        margin: '0 1rem',
        display: 'inline-block',
        padding: '.6rem',
        '& rc-slider-rail': {
            height: '8px'
        },
        '& .rc-slider-track': {
            backgroundColor: 'transparent'
        },
        '& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:hover': {
            backgroundColor: 'green',
            outline: 'none',
            border: '2px solid green',
            boxShadow: 'none',
            width: '1.3rem',
            height: '1.3rem',
            marginLeft: '-.7rem',
            marginTop: '-.3rem',
        },
        [sizes.down('md')]: {
            width: '150px'
        }
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        '& span': {
            fontSize: '1rem'
        }
    },
    selectContainer: {
        marginLeft: 'auto',
        marginRight: '1rem'
    }
}

export default styles;