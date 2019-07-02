import React, {useState} from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteListStyles';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import List from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';



const PaletteList = ({ palettes, classes, history, deletePalette }) => {
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [deletingId, setDeletingId] = useState('');


    const goToPalette = (id) => {
        history.push(`/palette/${id}`)
    }

    const openDialog = (id) => {
        setDeleteDialog(true);
        setDeletingId(id);
    }

    const closeDialog = () => {
        setDeleteDialog(false);
        setDeletingId('');

    }

    const handleDelete = () => {
        deletePalette(deletingId);
        closeDialog();
    }

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1 className={classes.heading}>React Colors</h1>
                    <Link to='/palette/new'>Create Palette</Link>
                </nav>
                <TransitionGroup className={classes.palette}>
                    {palettes.map((palette) => (
                        <CSSTransition key={palette.id} classNames='fade' timeout={500}>
                            <MiniPalette
                                {...palette}
                                openDialog={openDialog}
                                goToPalette={goToPalette}
                                id={palette.id}
                            />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>
            <Dialog open={deleteDialog} aria-labelledby='delete-dialog-title' onClose={closeDialog}>
                <DialogTitle id='delete-dialog-title'>Delette This Palette?</DialogTitle>
                <List>
                    <ListItem button onClick={handleDelete}>
                        <ListItemAvatar>
                            <Avatar style={{backgroundColor: blue[100], color: blue[600]}}>
                                <CheckIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='delete'>Delete</ListItemText>
                    </ListItem>
                    <ListItem button onClick={closeDialog}>
                        <ListItemAvatar>
                            <Avatar style={{backgroundColor: red[100], color: red[600]}}>
                                <CloseIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='cancel'>Close</ListItemText>
                    </ListItem>
                </List>
            </Dialog>
        </div>
    );
};

export default withStyles(styles)(PaletteList);