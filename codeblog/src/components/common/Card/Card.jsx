import React from "react";
import style from "./Card.module.css";


const Card = ({title,image}) => {
  return (
      <div 
        className={style.cardDiv} 
        id="cardDivId">
        <div 
          className={style.card} 
          id="cardId">
          <div 
            className={style.image} 
            id="cardImageId">
            <img 
              alt="" 
              id="blogImageId" 
              src={image} 
            />
          </div>
          <div 
            className={style.topicName} 
            id="topicNameId">
            {title}
            <button 
              id={style.exploreButton}>
                explore
            </button>
          </div>
        </div>
      </div>

  );
};

export default Card;
