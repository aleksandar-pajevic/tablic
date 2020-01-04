export default {
  alreadyHaveCard: (selectedCard, selectedCards)=>{
    for(let i=0; i<selectedCards.length; i++){
      if(selectedCard.code === selectedCards[i].code){
        return true;
      }
    };
    return false
  },
  deleteCard: (card, arr)=>{
    for (let i=0; i<arr.length; i++){
      if (arr[i].code === card.code){
        arr.splice(i, 1);
      }
    }
  },
changeTurn: (playerOnMove) => {
    console.log(playerOnMove);
    playerOnMove === 1 ? playerOnMove = 0 : playerOnMove = 1;
},
};
