const styles = {
    root: {
        backgroundColor: '#fff',
        borderRadius: '5px',
        padding: '0.5rem',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        '&:hover svg': {
            opacity: 1
        },
    },
    colors: {
        height: '115px',
        width: '100%',
        borderRadius: '5px',
        overflow: 'hidden'
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        margin: '0',
        color: '#000',
        paddingTop: '0.5rem',
        fontSize: '1rem',
        position: 'relative' 
    },
    miniColor: {
        height: '25%',
        width: '20%',
        display: 'inline-block',
        margin: '0 auto',
        position: 'relative',
        marginBottom: '-3.5px'
    },
    delete: {

    },
    deleteIcon: {
        color: '#fff',
        backgroundColor: '#eb3d30',
        width: '2rem',
        height: '2rem',
        position: 'absolute',
        right: 0,
        top: 0,
        padding: '1rem',
        zIndex: '5',
        opacity: 0,
        transition: 'all .2s ease-in-out'
    }
}

export default styles;