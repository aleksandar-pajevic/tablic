import React, {useEffect} from 'react';
import Player from './player';
import Table from './table';
import {useStoreState, useStoreActions} from "easy-peasy";

const Game = () => {

    const deckId = useStoreState(state => state.deckId);
    const fetchDeckId = useStoreActions(actions => actions.fetchDeckId);
    console.log("deckId:", deckId);
    useEffect(()=>{
        fetchDeckId()
        //eslint-disable-next-line
    }, []);


    return(
      <div id="game">
        <Player />
        <Table deckid={deckId}/>
        <Player />
        
      </div>
    )
}

export default Game;
