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
    card: props.card,
    cardOwner: props.cardOwner.id,
  }
  let playerClick = props.cardOwner.onMove ? ()=>{selectCard(selectCardParms)} : ()=>{} ;
  let tableClick = () => {takeCards(props.card)};
  return(
          <div className={props.styleName} onClick={props.cardOwner === 'table' ? tableClick : playerClick} >
              <img src={props.card.image} alt="card-img"/>
          </div>
    )
};

export default Card;


