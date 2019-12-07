import React from 'react';
import Card from './card';

const Table = (props) => {
  console.log('table props', props.todos);
    return(
        <div id="table">
          <Card styleName="card-table" />
          <Card styleName="card-table" />
          <Card styleName="card-table" />
          <Card styleName="card-table" />
        </div>

    )
}

export default Table;
