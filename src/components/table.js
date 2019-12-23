import React from 'react';
import Card from './card';

const Table = (props) => {
    let players = {
        playerOne: props.playerOne,
        playerTwo: props.playerTwo
    };
    return(
        <div id="table">
          {props.cards.map( card => <Card tableCard={card} cardOwner={`table`} key={card.code} onMove={players.playerOne.onMove ? players.playerOne : players.playerTwo} styleName="card-table" />) }
        </div>

    )
}

export default Table;
