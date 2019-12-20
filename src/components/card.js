import React from 'react';
import {useStoreActions, useStoreState} from "easy-peasy";


const Card = (props) => {
  const selectCard = useStoreActions(actions => actions.selectCard);
  console.log("card props", props);
    // const clickHandler = () => {
    //     console.log('cliked on');
    // };
  let selectCardProps = {
    card: props.card,
    cardOwner: props.cardOwner,
    playerId: props.playerId,
  };
let click = props.onMove ? ()=> {selectCard(selectCardProps)} : ()=>{} ;
  return(
          <div className={props.styleName} onClick={click} >
              <img src={props.card.image} alt="card-img"/>
          </div>
    )
};

export default Card;


