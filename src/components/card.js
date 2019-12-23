import React from 'react';
import {useStoreActions} from "easy-peasy";


const Card = (props) => {
  console.log("card props", props);
  const selectCard = useStoreActions(actions => actions.selectCard);
  const takeCards  = useStoreActions(actions => actions.takeCards);

  // const clickHandler = () => {0
    //     console.log('cliked on');
    // };
  let selectCardParms = {
    card: props.tableCard,
    onMove: props.onMove,
  };
  let takeCardsParms = {
    card: props.playerCard,
    cardOwner: props.cardOwner,
  };

  let tableClick =  ()=>{selectCard(selectCardParms)} ;
  let playerClick = props.cardOwner.onMove ? () => {takeCards(takeCardsParms)} : ()=>{};

  if (props.cardOwner === 'table') {
    return (
      <div className={props.styleName} onClick={tableClick} >
        <img src={props.tableCard.image} alt="card-img"/>
      </div>
    )
  }else {
    return (
      <div className={props.styleName} onClick={playerClick} >
        <img src={props.playerCard.image} alt="card-img"/>
      </div>
    )
  }
// console.log("selectCardParms", selectCardParms);
//   let tableClick =  ()=>{selectCard(selectCardParms)} ;
//   let playerClick = props.cardOwner.onMove ? () => {takeCards(props.card)} : ()=>{};
//   return(
//           <div className={props.styleName} onClick={props.cardOwner === 'table' ? tableClick : playerClick} >
//               <img src={props.cardOwner === 'table' ? props.tableCard.image : props.playerCard.image} alt="card-img"/>
//           </div>
//     )
};

export default Card;


