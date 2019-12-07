import React from 'react';
import Card from './card';

const Player = (props) => {
    console.log(props.deckId);
    return(
         <div id="player">
            <Card styleName="card-player" />
            <Card styleName="card-player" />
            <Card styleName="card-player" />
            <Card styleName="card-player" />
            <Card styleName="card-player" />
            <Card styleName="card-player" />
        </div>
    )
};

export default Player;
