import React, {useEffect} from 'react';
import Player from './player';
import Table from './table';
import {useStoreState, useStoreActions} from "easy-peasy";

const Game = () => {
    let playerOneHand = useStoreState(state => state.playerOne.hand);
    let table = useStoreState(state => state.table);
    let playerTwoHand = useStoreState(state => state.playerTwo.hand);
    let addFirstRound = useStoreActions(actions => actions.addFirstRound);
    console.log("PlayerOne from game", playerOneHand);
    const fetchDeckId = useStoreActions(actions => actions.fetchDeckId);




    useEffect(()=>{
        fetchDeckId();
        //eslint-disable-next-line
    }, []);



    return(
      <div id="game" onDoubleClickCapture={()=>{addFirstRound()}}>
        <Player cards={playerOneHand}/>
        <Table cards={table}/>
        <Player cards={playerTwoHand}/>
        
      </div>
    )
};

export default Game;
