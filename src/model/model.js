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
    selected:[],
    taken:[]
  },
  playerTwo:{
    id: 2,
    name: 'Zika',
    hand: [],
    onMove: false,
    selected: [],
    taken:[]
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

  takeCards: action((state, payload) => {
    // let active = state.players.find( player => player.hand === card);
    console.log(`This is player ${payload.cardOwner.id} card`, payload.card );
    state.playerOne.onMove ? state.playerOne.onMove = false : state.playerOne.onMove = true;
    state.playerTwo.onMove ? state.playerTwo.onMove = false : state.playerTwo.onMove = true;
  }),
  selectCard: action((state, payload) => {
    console.log(`Player`, payload.onMove.id, 'clicked on', payload.card);
    if(state.playerOne.selected.findIndex(e => e === payload.card) > -1){ state.playerOne.selected.splice(state.playerOne.selected.findIndex(e => e === payload.card), 1)}else {state.playerOne.selected.push(payload.card)};
    if(state.playerTwo.selected.findIndex(e => e === payload.card) > -1){ state.playerTwo.selected.splice(state.playerTwo.selected.findIndex(e => e === payload.card), 1)}else {state.playerTwo.selected.push(payload.card)};

    // state.playerOne.onMove ? state.playerOne.selected.push(payload.card) : state.playerTwo.selected.push(payload.card);

  }),

  };












