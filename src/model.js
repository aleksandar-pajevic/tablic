import {thunk, action} from "easy-peasy";
// import axios from "axios";

export default {
  deckId: '12345',
  cards: [],
  table:[],
  playerOne: {
    name: 'Mika',
    hand: [],
    selected: {
      player: [],
      game: []
    },
    taken: [],
    onMove: true,
  },
  playerTwo: {
    name: 'Zika',
    hand: [],
    selected: {
      player: [],
      game: []
    },
    taken: [],
    onMove: false,
  },

  // THUNK
  fetchDeckId: thunk(async actions => {
    const resp = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    const deckId = await resp.json();
    actions.addDeckId(deckId);
    actions.fetchCards(deckId.deck_id);
  }),

  fetchCards: thunk(async (actions, deckId) => {
    const resp = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=52`);
    const cards = await resp.json();
    actions.addCards(cards);
  }),
  setFirstRound: thunk(async (actions) => {
    actions.addFirstRound();
  }),

  //actions

  addDeckId: action((state, deckId) => {
    state.deckId = deckId.deck_id;
  }),

  addCards: action((state, cards) => {
    state.cards = cards.cards;
  }),

  addFirstRound: action((state) => {
    state.playerOne.hand = state.cards.splice(0,6);
    state.table = state.cards.splice(0,4);
    state.playerTwo.hand = state.cards.splice(0,6);
  }),

  selectCard: action((state, card) => {
    state.playerOne.selected.push(card);
    console.log("selected card is :", card );
  }),
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
