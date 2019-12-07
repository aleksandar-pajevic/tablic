import React, {useEffect} from 'react';
import Player from './player';
import Table from './table';
import {useStoreState, useStoreActions} from "easy-peasy";

const Game = () => {

    const deckId = useStoreState(state => state.deckId);
    const todos = useStoreState(state => state.todos);
    console.log('~~~~', todos);
    const fetchTodos = useStoreActions(actions => actions.fetchTodos);
    console.log("deckId:", deckId);
    useEffect(()=>{
        fetchTodos()
        //eslint-disable-next-line
    }, []);
    console.log("todos:", todos);


    return(
      <div id="game">
        <Player deckid={deckId}/>
        <Table todos={todos} deckid={deckId}/>
        <Player deckid={deckId}/>
        
      </div>
    )
}

export default Game;
