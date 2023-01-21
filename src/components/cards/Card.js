import React from "react";
import "./Card.css";

function Card(){
    return(
        <div className="card">
      <div className="cardImg">
        <img src="https://images.pexels.com/photos/22687/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=400" alt="No Image found"/>
      </div>
      <div className="cardContent">
        <h2>Trail</h2>
        <p>
          This trail flourishes during summer with flowers freshly sprung along both the sides of the path.
        </p>
        <input value="Buy Now" id="btn" type="submit"/>
      </div>
    </div>
    );

}

export default Card;