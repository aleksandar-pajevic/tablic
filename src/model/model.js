import { thunk, action } from "easy-peasy";

export default {
  deckId: '12345',
  cards: [],
  table: [],
  playerOnMove: 1,
  players: [{
    id: 1,
    name: 'Mika',
    hand: [],
    onMove: true,
    selected: [],
    taken: []
  }, {
    id: 2,
    name: 'Zika',
    hand: [],
    onMove: false,
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
    // let active = state.players.find( player => player.hand === card);
    let playerOnMove = state.players[state.playerOnMove];
    playerOnMove.taken = [...playerOnMove.selected, payload.card];
    playerOnMove.selected = [];
    // state.playerOne.onMove ? state.playerOne.onMove = false : state.playerOne.onMove = true;
    // state.playerTwo.onMove ? state.playerTwo.onMove = false : state.playerTwo.onMove = true;
  }),
  selectCard: action((state, payload) => {
    console.log("********ACTION SELECT CARD CALLED********");

    // console.log(`Player`, state.playerOnMove + 1, 'clicked on', payload.card);
    // state.playerOne.onMove ? state.playerOne.selected.push(payload.card) : state.playerTwo.selected.push(payload.card);


    //player on move
    let playerOnMove = state.players[state.playerOnMove];

    if (playerOnMove.selected.length === 0) {
      // console.log("playerOnMove", playerOnMove, "Card", payload.card);
      console.log(`PLAYER ON MOVE LENGTH = 0`);

      playerOnMove.selected.push(payload.card);
    }

    else {
      function haveCardAllready(selectedCard, selectedCards){
        var index;
        for(index=0; index<selectedCards.length; index++){
          if(selectedCard.code === selectedCards[index].code){
            return true;
          }
        };
        return false
      };
      
        console.log("PLAYER SELECTED LENGTH", playerOnMove.selected.length)
        if (haveCardAllready(payload.card, playerOnMove.selected)) {
          // player have selected card
          // console.log(`DELETEING CARD# ${index}time`);
          for(let i = 0; i< playerOnMove.selected.length; i++){
            if(playerOnMove.selected[i].code === payload.card.code){
              playerOnMove.selected.splice(i, 1);
            }
        }
        }else{
      
      console.log(`ADDING CARD`);

      playerOnMove.selected.push(payload.card);
      //player dont have selected card
    }
    }
  }),

};












