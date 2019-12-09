import React from 'react';
import Card from './card';

const Player = (props) => {
  console.log("player props:", props.cards);
    return(
         <div id="player">
           {props.cards.map(card => <Card styleName="card-player" key={card.code} card={card}> </Card>)}
        </div>
    )
};

export default Player;
