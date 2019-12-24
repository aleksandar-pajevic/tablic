import { thunk, action } from "easy-peasy";

export default {
  deckId: '12345',
  playerOneOnMove: true,
  cards: [],
  table: [],
  players: [
    {
      id: 1,
      name: 'Mika',
      hand: [],
      selected: [],
      taken: []
    },
    {
      id: 2,
      name: 'Zika',
      hand: [],
      selected: [],
      taken: []
    },
  ],

  dealWithCards: thunk(async (actions, payload) => {
    let playersLength = payload.players[payload.player].selected.length;
    for (let i = 0; i <= playersLength; i++) {
      // console.log('sdfsdkjfsdkjfksjdhfksdjhfksdjhfkjh', payload)
      if (playersLength === 0) {
        actions.addCardToSelected({ player: payload.player, card: payload.card });
      } else {
        if (payload.players.selected[i].code == payload.card.code) {
          actions.removeCardFromSelected({ player: payload.player, index: i });
        } else {
          actions.addCardToSelected({ player: payload.player, card: payload.card });
        }
      }
    }
  }),

  addCardToSelected: action((state, payload) => {
    state.players[payload.player].selected.push(payload.card);
  }),

  removeCardFromSelected: action((state, payload) => {
    state.players[payload.player].selected.splice(payload.index, 1);
  }),

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
    for (let index = 0; index < state.players.length; index++) {
      state.players[index].hand = state.cards.splice(0, 6)
    }
    state.table = state.cards.splice(0, 4);
  }),

  takeCards: action((state, payload) => {
    state.playerOneOnMove = !state.playerOneOnMove;
  }),
  selectCard: thunk(async (actions, payload) => {
    if (actions.playerOneOnMove) {
      actions.dealWithCards({ card: payload.card, player: 0, players: payload.players })
    } else {
      actions.dealWithCards({ card: payload.card, player: 1, players: payload.players })
    }
    // for (let i = 0; i < state.players.length; i++) {
    //   if(state.players[i].onMove){
    //     //player on move
    //     let playerOnMove = state.players[i];

    //     for (let index = 0; index < playerOnMove.selected.length; index++) {

    //       if(playerOnMove.selected[index].code === payload.card.code){
    //         // player have selected card
    //         playerOnMove.selected.splice(index,1);
    //       }else{
    //         //player dont have selected card
    //         playerOnMove.selected.push(payload.card);
    //       } ;
    //     }
    //   }
    // }

  }),

};












