import { makeStyles } from '@material-ui/core/styles';
import {DRAWER_WIDTH} from '../constants';
import sizes from './sizes';
const drawerWidth = DRAWER_WIDTH;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    buttons: {
            marginRight: '.5rem',
        '& a': {
            textDecoration: 'none'
        },
        [sizes.down('sm')]: {
            margin: '0.3rem'
        }
    },
    button: {
        margin: '0 0.5rem',
        [sizes.down('sm')]: {
            margin: '0',
            padding: '0.2rem'
        }
    }
}));

export default useStyles;
