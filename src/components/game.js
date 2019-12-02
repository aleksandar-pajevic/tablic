import React from 'react';
import Player from './player';
import Table from './table';

const Game = () => {
    return(
      <div id="game">
        <Player/>
        <Table/>
        <Player/>
        
      </div>
    )
}

export default Game;