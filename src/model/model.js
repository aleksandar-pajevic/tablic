import { thunk, action } from "easy-peasy";
import gameLogic from "../game logic";
export default {
  deckId: '12345',
  cards: [],
  table: [],
  onMove: 1,
  players: [{
    id: 1,
    name: 'Mika',
    hand: [],
    selected: [],
    taken: []
  }, {
    id: 2,
    name: 'Zika',
    hand: [],
    selected: [],
    taken: []
  }],

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
    for (let i = 0; i < state.players.length; i++) {
      state.players[i].hand = state.cards.splice(0, 6);
    }
    state.table = state.cards.splice(0, 4);
  }),

  takeCards: action((state, payload) => {
    let onMove = state.onMove;
    let playerOnMove = state.players[onMove];
    let playerHand = playerOnMove.hand;
    let card = payload.card;
    let table = state.table;
    if (playerOnMove.selected.length < 1){
      state.table.push(payload.card);
      gameLogic.deleteCard(card, playerHand);
      state.onMove === 1 ? state.onMove = 0 : state.onMove = 1;
      //not working - fix it
      // gameLogic.changeTurn(onMove);
    }else {
    for (let i = 0; i < playerOnMove.selected.length; i++){
      gameLogic.deleteCard(playerOnMove.selected[i], table)
    }
    playerOnMove.taken = [...playerOnMove.taken,...playerOnMove.selected, payload.card];
    playerOnMove.selected = [];
    gameLogic.deleteCard(payload.card, playerHand);
    state.onMove === 1 ? state.onMove = 0 : state.onMove = 1;
      //not working - fix it
    // gameLogic.changeTurn(onMove);

    };

  }),

  selectCard: action((state, payload) => {
    let player = state.players[state.onMove];
    let playerSelectedCards = player.selected;
    let card = payload.card;
    // state.table[card] = {...card, active: true};
    if (playerSelectedCards.length === 0) {
      playerSelectedCards.push(card);
    } else {
        if (gameLogic.alreadyHaveCard(card, playerSelectedCards)) {
          gameLogic.deleteCard(card, playerSelectedCards);
        }else{
      console.log(`ADDING CARD`);
      playerSelectedCards.push(payload.card);
    }
    }
  }),

  addToTable: action((state, card )=>{

  }),

};












