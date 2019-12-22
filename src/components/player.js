import React from 'react';
import Card from './card';

const Player = (props) => {
  let player = props.player;
  console.log(player);

  return(
         <div id="player">
            {player.hand.map( card => <Card key={card.code}  card={card} cardOwner={player}  styleName="card-player" />)}
        </div>
    )
};

export default Player;
