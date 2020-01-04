import React from 'react';
import {action, createComponentStore, useStoreActions, useStoreState} from "easy-peasy";

  const active = createComponentStore(initialData => ({
    active : initialData,
    click: action(state => {
      state.active !== state.active;
    })
  }));

const Card = (props) => {
  console.log("card props", props);
  const selectCard = useStoreActions(actions => actions.selectCard);
  const takeCards  = useStoreActions(actions => actions.takeCards);
  const onMove = useStoreState(state => state.onMove);
  const [state, actions] = active(props.active);

  let selectCardParms = {
    card: props.tableCard,
  };
  let takeCardsParms = {
    card: props.playerCard,
  };
  let tableClick =  ()=>{selectCard(selectCardParms)} ;
  let playerClick = props.cardOwner.id === onMove + 1 ? () => {takeCards(takeCardsParms)} : ()=>{};

  if (props.cardOwner === 'table') {
    return (
      <div className={props.styleName}  onClick={tableClick, ()=> actions.active() } >
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

};

export default Card;


