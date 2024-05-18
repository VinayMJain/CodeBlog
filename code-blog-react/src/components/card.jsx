// import React from 'react';
import "../assets/style/card.css"
import cardImage from "../assets/images/BlogData/binary search.png"
function Card() {
  return (
    <div className="card">
      <div className="image"><img src={cardImage} alt="" /> </div>
      <div className="topic-name">Binary Search</div>
      <div id="explore-button">Explore</div>
    </div>

  )
}
export default Card
