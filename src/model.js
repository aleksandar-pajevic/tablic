import {useStoreActions ,thunk, action} from "easy-peasy";
import axios from "axios";

export default {
  deckId: '12345',
  todos: [],
  firstRound: [],
  playerOne: {
    hand: [],
    taken: [],
    onMove: true,
  },
  playerTwo: {
    hand: [],
    taken: [],
    onMove: false,
  },

  // THUNK
  fetchTodos: thunk(async actions => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    const todos = await resp.json();
    actions.addTodos(todos);
  }),

  //actions

  addTodos: action((state, todos) => {
    state.todos = todos;
  })

  // fetchFirstRound: thunk( async actions => {
  //
  //   let res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
  //   let { data } = res.data;
  //   actions.setDeckId({ data });
  //   console.log(store.deckId);
  // }),

    // axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1').then( res =>
    //   actions.setDeckId(res.data);
    // console.log("DeckIdResponse",res.data);
    // )
    // }),

    // //getting deck_id
    //   const resId = await fetch(
    //     'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
    //   ).then( res => res.json()).then(data => console.log("data",data)
    //   );
    //     const deck_id = await resId.json();
    //     console.log("deck_id",deck_id);
    //     actions.setDeckId(deck_id);
    //
    // //getting deck by deck_id
    //   const resCards = await fetch(
    //     `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=16`
    //   );
    //   const first_round = await resCards.json();
    //   actions.getFirstRound(first_round)

  // //ACTIONS
  //
  // setDeckId : action((state, deckId)=> {
  //   state.deckId = deckId;
  // }),
  // getFirstRound: action((state, first_round) => {
  //   state.firstRound = first_round.cards;
  // }),



  };












// axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
//   .then( res => {
//     axios.get(`https://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=16`)
//       .then( res =>{
//         model.firstRound = res.data.cards ;
//       })
//   });
