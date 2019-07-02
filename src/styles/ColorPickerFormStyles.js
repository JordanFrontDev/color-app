import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    picker: {
        width: '100% !important',
        marginTop: '2rem'
    },
    addColor: {
        width: '100%',
        padding: '.5rem',
        fontSize: '1.5rem'
    },
    colorNameInput: {
        width: '100%',
        'height': '70px'

    }
   
}));

export default useStyles;