import React from "react";
import style from "./Card.module.css";


const Card = ({title,image}) => {
  return (
      <div 
        className={style.cardDiv} 
        id="cardDiv">
        <div 
          className={style.card} 
          id="card">
          <div 
            className={style.image} 
            id="cardImage">
            <img 
              alt="" 
              id="blogImage" 
              src={image} 
            />
          </div>
          <div 
            className={style.topicName} 
            id="topicName">
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
