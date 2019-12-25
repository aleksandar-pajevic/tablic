import React from 'react';
import Card from './card';

const Table = (props) => {
    let players = {
        playerOne: props.playerOne,
        playerTwo: props.playerTwo
    };
    return(
        <div id="table">
          {props.cards.map( card => <Card tableCard={card} cardOwner={`table`} key={card.code} styleName="card-table" />) }
        </div>

    )
}

export default Table;
