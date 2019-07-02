import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const PaletteMetaForm = ({palettes, handleSubmit, hideForm}) => {
    const [open] = useState(true);
    const [newPaletteName, setNewPaletteName] = useState('');


    useEffect(() => {
      ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => {
          return palettes.every((palette) => palette.paletteName.toLowerCase() !== value.toLowerCase())
      })

  });

  const handleNewPaletteChange = (e) => {
    setNewPaletteName(e.target.value);
  }



  return (
      <Dialog open={open} onClose={hideForm} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
        <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
        <DialogContent>
          <DialogContentText>
            Please enter a name for your new beutiful palette. Make sure it's unique.
          </DialogContentText>
          
              <TextValidator 
                  label='Palette Name' 
                  value={newPaletteName} 
                  onChange={handleNewPaletteChange}
                  fullWidth
                  margin='normal'
                  name='newPaletteName'
                  validators={['required', 'isPaletteNameUnique']}
                  errorMessages={['Enter Palette Name', 'Palette Name Must Be Unique']}
              />
              
          </DialogContent>
          <DialogActions>
            <Button onClick={hideForm} color="primary">
              Cancel
            </Button>
          <Button variant='contained' color='secondary' type='submit'>Save Palette</Button>
        </DialogActions>
        </ValidatorForm> 

      </Dialog>
  );
}

export default PaletteMetaForm;