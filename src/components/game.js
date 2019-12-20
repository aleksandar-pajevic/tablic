import React, {useEffect} from 'react';
import Player from './player';
import Table from './table';
import {useStoreState, useStoreActions} from "easy-peasy";

const Game = () => {
    let playerOne = useStoreState(state => state.playerOne);
    let playerTwo = useStoreState(state => state.playerTwo);
    let cards = useStoreState(state => state.cards);
    let table = useStoreState(state => state.table);
    const fetchDeckId = useStoreActions(actions => actions.fetchDeckId);



    useEffect(()=>{
        fetchDeckId();
        //eslint-disable-next-line
    }, []);
if(cards.length > 0){
  console.log("cards from game", cards);

  return(

    <div id="game">
      <Player player={playerOne} />
      <Table cards={table}/>
      <Player player={playerTwo} />

    </div>

);
} return (<div id="game">aaaaaa</div>)


};

export default Game;
