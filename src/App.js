import React from 'react';
import './App.css';
import Game from './components/game'
import {createStore, StoreProvider, useStore} from "easy-peasy";
import model from "./model";

const store = createStore(model);

function App() {
  const state = store.getState();
  console.log("store:", state);
  return (
      <StoreProvider store={store}>
        <div className="App">
          <Game/>
        </div>
      </StoreProvider>
  );
}

export default App;
