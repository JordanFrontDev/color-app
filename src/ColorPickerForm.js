import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';
import useStyles from './styles/ColorPickerFormStyles';


const ColorPickerForm = ({isPaletteFull, createColor, colors}) => {
    const [currColor, setCurrColor] = useState('teal');
    const [newColorName, setNewColorName] = useState('');

    const classes = useStyles();

    useEffect(() => {
        ValidatorForm.addValidationRule('isColorNameUnique', (value) => {
            return colors.every((color) => color.name.toLowerCase() !== value.toLowerCase())
        })

        ValidatorForm.addValidationRule('isColorUnique', (value) => {
            return colors.every((color) => color.color !== currColor)
        })

    }, [colors, currColor])


    const updateCurrColor = (newColor) => {
        setCurrColor(newColor.hex);
    }

    
    const handleNewColorChange = (e) => {
        setNewColorName(e.target.value);
    }
    
    return (
        <div>
            <ChromePicker 
                color={currColor} 
                onChangeComplete={updateCurrColor}
                className={classes.picker} 
            />
            <ValidatorForm onSubmit={() => createColor(currColor, newColorName)} instantValidate={false}>
                <TextValidator
                    value={newColorName}
                    variant='filled'
                    name='newColorName'
                    margin='normal'
                    placeholder='New Color Name'
                    className={classes.colorNameInput}
                    onChange={handleNewColorChange}
                    validators={['required', 'isColorNameUnique', 'isColorUnique']}
                    errorMessages={['You must provide a color', 'color name must be unique', 'color already exists']}
                />
                <Button
                    variant='contained'
                    type='submit'
                    color='primary'
                    className={classes.addColor}
                    style={{ background: isPaletteFull ? 'lightgrey' : currColor }}
                    disabled={isPaletteFull}
                >
                    {isPaletteFull ? 'Palette Full' : 'Add Color'}
                </Button>
            </ValidatorForm>
        </div>
    );
}

export default ColorPickerForm;