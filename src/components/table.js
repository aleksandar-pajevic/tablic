import React from 'react';
import Card from './card';

const Table = (props) => {
    return(
        <div id="table">
          {props.cards.map( card => <Card key={card.code} card={card} styleName="card-table" />) }
        </div>

    )
}

export default Table;
