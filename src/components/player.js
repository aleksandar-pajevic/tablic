import React from 'react';
import Card from './card';

const Player = (props) => {
  let player = props.player;
  console.log(player);

  return(
         <div id="player">
            {player.hand.map( card => <Card playerCard={card} cardOwner={player} key={card.code} styleName="card-player" />)}
        </div>
    )
};

export default Player;
