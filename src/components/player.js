import React from 'react';
import Card from './card';

const Player = (props) => {
  let player = props.player;

  return(
         <div id="player">
            {player.hand.map( card => <Card key={card.code} cardOwner={`player ${player.id}`} playerId={player.id} onMove={player.onMove} card={card} styleName="card-player" />)}
        </div>
    )
};

export default Player;
