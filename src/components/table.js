import React from 'react';
import Card from './card';

const Table = (props) => {

    return(
        <div id="table">
          {props.cards.map( card => <Card tableCard={card} cardOwner={`table`} key={card.code} styleName="card-table" active={false}/>) }
        </div>

    )
}

export default Table;
