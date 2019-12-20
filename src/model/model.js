import {thunk, action} from "easy-peasy";

export default {
  deckId: '12345',
  cards: [],
  table:[],
  playerOne: {
    id: 1,
    name: 'Mika',
    hand: [],
    onMove: true,
    selected:[]
  },
  playerTwo:{
    id: 2,
    name: 'Zika',
    hand: [],
    onMove: false,
    selected: []
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
    state.playerTwo.hand = state.cards.splice(0,6);
    state.table = state.cards.splice(0,4);
  }),

  selectCard: action((state, props) => {
    // let active = state.players.find( player => player.hand === card);
    console.log(`This is ${props.cardOwner} card`, props.card );
  }),


  };












