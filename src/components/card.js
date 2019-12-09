import React from 'react';


const Card = (props) => {
  console.log("card props" , props);
    // const clickHandler = () => {
    //     console.log('cliked on');
    // };
    return(
          <div className={props.styleName}>
              <img src={props.card.image} alt="card-img"/>
          </div>
    )
};

export default Card;
