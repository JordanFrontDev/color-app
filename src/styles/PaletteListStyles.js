import sizes from './sizes';
import background from './background.svg';

const styles = {
    '@global': {
        '.fade-exit': {
            opacity: 1
        },
        '.fade-exit-active': {
            opacity: 0,
            transition: 'opacity 500ms ease-out'
        }
    },
    root: {
        backgroundColor: 'blue',
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        overflowY: 'scroll',
        backgroundImage: `url(${background})`
        /* background by SVGBackgrounds.com */
        
    },
    container: {
        width: '50%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap',
        [sizes.down('xl')]: {
            width: '75%'
        }
        
    },
    nav: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#fff',
        '& a': {
            color: '#fff',
            fontSize: '1.5rem'
        },
    },
    heading: {
        fontSize: '2rem'
    },
    palette: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '2rem',
        [sizes.down('md')]: {
            gridTemplateColumns: 'repeat(2, 50%)',
        },
        [sizes.down('sm')]: {
            gridTemplateColumns: 'repeat(1, 100%)',
        }
    }
}

export default styles;
