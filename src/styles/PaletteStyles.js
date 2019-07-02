import sizes from './sizes';

const styles = {
    palette: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
    },
    paletteColors: {
        height: '90%'
    },
    goBack: {
        width: '20%',
        height: props => props.showLink ? '25%' : '50%',
        margin: '0 auto',
        display: 'inline-block',
        cursor: 'pointer',
        position: 'relative',
        marginBottom: '-3.5px',
        backgroundColor: 'black',
        '& a': {
            color: '#fff',
            width: '13rem',
            height: '3rem',
            position: 'absolute',
            display: 'inline-block',
            top: '50%',
            left: '50%',
            marginLeft: '-5rem',
            marginTop: '-1.5rem',
            textAlign: 'center',
            outline: 'none',
            background: 'rgba(255, 255, 255, 0.3)',
            fontSize: '1.5rem',
            lineHeight: '30px',
            textTransform: 'uppercase',
            border: 'none',
            textDecoration: 'none',
        },
        [sizes.down('lg')]: {
            width: '25%',
            height: '33.3333% !important'
        },
        [sizes.down('md')]: {
            width: '50%',
            height: '20% !important'
        },
        [sizes.down('sm')]: {
            width: '100%',
            height: '10% !important'
        }
    }
}

export default styles;