import React, {useEffect} from 'react';
import Player from './player';
import Table from './table';
import {useStoreState, useStoreActions} from "easy-peasy";

const Game = () => {
    let players = useStoreState(state => state.players);
    let cards = useStoreState(state => state.cards);
    let table = useStoreState(state => state.table);
    const fetchDeckId = useStoreActions(actions => actions.fetchDeckId);



    useEffect(()=>{
        fetchDeckId();
        //eslint-disable-next-line
    }, []);
if(cards.length > 0){
  console.log("players from game", players);
  console.log("cards from game", cards);

  return(

    <div id="game" >
      {players.map( (player, index) => <Player key={player.name + index} player={player}/>)}
      <Table cards={table}/>
    </div>

);
} return (<div id="game">aaaaaa</div>)


}
export default Game;
