import React from 'react';

const Card = ({styleName}) => {
    console.log(styleName);
    const clickHandler = () => {
        console.log('cliked on');
    }
    return(
          <div className={styleName}>
              <img src="" alt="card-img"/>
          </div>
    )
};

export default Card;