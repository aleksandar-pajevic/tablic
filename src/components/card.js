import React from 'react';
import {useStoreActions} from "easy-peasy";


const Card = (props) => {
  const selectCard = useStoreActions(actions => actions.selectCard);
    // const clickHandler = () => {
    //     console.log('cliked on');
    // };
    return(
          <div className={props.styleName} onClick={()=> {selectCard(props.card ,props.playerId)}}>
              <img src={props.card.image} alt="card-img"/>
          </div>
    )
};

export default Card;


