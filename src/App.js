import React from 'react';
import Palette from './Palette';
import { Route, Switch } from 'react-router-dom';
import seedPalettes from './seedPalettes';
import PaletteList from './PaletteList';
import { generatePalette } from './colorHelpers';
import SingleColorPalette from './SingleColorPalette';

function App() {
  const findPalette = (id) => {
    return seedPalettes.find((palette) => {
      return palette.id === id;
    })
  }

  return (
    <Switch>
      <Route exact path='/' render={(routeProps) => <PaletteList palettes={seedPalettes} {...routeProps} />} />
      <Route
        exact
        path='/palette/:id'
        render={routeProps => <Palette palette={generatePalette(findPalette(routeProps.match.params.id))} />}
      />
      <Route
        exact
        path='/palette/:id/:colorId'
        render={routeProps => <SingleColorPalette 
          palette={generatePalette(findPalette(routeProps.match.params.id))} 
          colorId={routeProps.match.params.colorId}
          />} />
    </Switch>
  );
}

export default App;
