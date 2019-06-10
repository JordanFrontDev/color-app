import React from 'react';
import Palette from './Palette';
import { Route, Switch } from 'react-router-dom';
import seedPalettes from './seedPalettes';
import PaletteList from './PaletteList';
import { generatePalette } from './colorHelpers';

function App() {
  console.log(generatePalette(seedPalettes[4]));
  const findPalette = (id) => {
    return seedPalettes.find((palette) => {
      return palette.id === id;
    })
  }
  return (
    <Switch>
      <Route exact path='/' render={() => <PaletteList palettes={seedPalettes} />}/>
      <Route 
        exact 
        path='/palette/:id' 
        render={routeProps => <Palette palette={generatePalette(findPalette(routeProps.match.params.id))}/>}
      />
    </Switch>
  );
}

export default App;
