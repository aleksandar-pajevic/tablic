import React from 'react';
import Card from './card';

const Player = (props) => {
  let player = props.player;
  console.log("@@@ player props:", player);

  return(
         <div id="player">
            {player.hand.map( card => <Card key={card.code} card={card} styleName="card-player" />)}
        </div>
    )
};

export default Player;
