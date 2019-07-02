import React, { useState, useEffect } from 'react';
import Palette from './Palette';
import { Route, Switch } from 'react-router-dom';
import seedPalettes from './seedPalettes';
import PaletteList from './PaletteList';
import { generatePalette } from './colorHelpers';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';

function App() {
  const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
  const [palettes, setPalettes] = useState(savedPalettes || seedPalettes);

  useEffect(() => {
    window.localStorage.setItem("palettes", JSON.stringify(palettes));
  }, [palettes])

  const findPalette = (id) => {
    return palettes.find((palette) => {
      return palette.id === id;
    })
  }

  const deletePalette = (id) => {
    const filteredPalettes = palettes.filter(palette => {
      return palette.id !== id;
    })
    setPalettes(filteredPalettes);
  }

  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette]);
  }


  return (
    <Switch>
      <Route exac path='/palette/new' render={(routeProps) => <NewPaletteForm savePalette={savePalette} {...routeProps} palettes={palettes} />} />
      <Route exact path='/' render={(routeProps) => <PaletteList
        palettes={palettes}
        {...routeProps}
        deletePalette={deletePalette} />}
      />
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
      <Route render={(routeProps) => <PaletteList
        palettes={palettes}
        {...routeProps}
        deletePalette={deletePalette} />}
      />
    </Switch>
  );
}

export default App;
