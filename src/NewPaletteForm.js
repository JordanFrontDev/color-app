import React, { useState } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DraggableColorList from './DraggableColorList';
import arrayMove from 'array-move';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import useStyles from './styles/NewPaletteFormStyles';
import seedPalettes from './seedPalettes';



const NewPaletteForm = ({ savePalette, history, palettes }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [colors, setColors] = useState(seedPalettes[0].colors);

    const isPaletteFull = colors.length >= 20;

    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }

    const createColor = (currColor, newColorName) => {
        const newColor = { color: currColor, name: newColorName }
        setColors([...colors, newColor]);
    }


    const handleSubmit = (newPaletteName) => {
        const newPalette = {
            paletteName: newPaletteName,
            colors,
            id: newPaletteName.toLowerCase().replace(/ /g, '-')
        };
        savePalette(newPalette);
        history.push('/');
    }

    const removeColor = (colorName) => {
        const filteredColors = colors.filter(color => {
            return color.name !== colorName;
        })
        setColors(filteredColors);
    }

    const onSortEnd = ({ oldIndex, newIndex }) => {
        setColors(arrayMove(colors, oldIndex, newIndex));
    };

    const clearColors = () => {
        setColors([]);
    }

    const addRandomColor = () => {
        const allColors = palettes.map(p => p.colors).flat();
        let randomNumber;
        let randomColor;
        let IsDuplicateColor = true;
        while(IsDuplicateColor) {
            randomNumber = Math.floor(Math.random() * allColors.length);
            randomColor = allColors[randomNumber];
            IsDuplicateColor = colors.some(color => color.name  === randomColor.name)
        }
        setColors([...colors, randomColor]);
    }

    return (
        <div className={classes.root}>
            <PaletteFormNav
                classes={classes}
                open={open}
                palettes={palettes}
                handleSubmit={handleSubmit}
                handleDrawerOpen={handleDrawerOpen}
            />
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{ paper: classes.drawerPaper }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <div className={classes.container}>
                <Typography variant='h5' gutterBottom>
                    Design Your Palette
                </Typography>
                <div className={classes.buttons}>
                    <Button
                        variant='contained'
                        color='secondary'
                        onClick={clearColors}
                    >
                        Clear Palette
                    </Button>
                <Button
                    variant='contained'
                    color='primary'
                    onClick={addRandomColor}
                    disabled={isPaletteFull}
                >
                    Ramdom Color
                </Button>
                    
                </div>
                <ColorPickerForm
                    isPaletteFull={isPaletteFull}
                    createColor={createColor}
                    colors={colors}
                 />
            </div>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                <DraggableColorList
                    onSortEnd={onSortEnd}
                    colors={colors}
                    removeColor={removeColor}
                    axis='xy'
                />
            </main>
        </div>
    );
}

export default NewPaletteForm;