import React from "react";
import "./card.css";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";


const Card = (props) => {
  const { title, rating, imgsrc } = props;
 
  return (
    <div className="card__container">
     
        <div className="card">
          <div className="image__container">
            <img src={imgsrc} />
          </div>

          <div className="icons__section">
            <div className="wishlist__container">
              <AiOutlineHeart className="wishlist__icon" />
            </div>
            <div className="smallcart__container">
              <AiOutlineShoppingCart className="smallcart__icon" />
            </div>
          </div>

          <div className="item__details__section">
            <div className="item__name">{title}</div>
            <div className="item__price">{rating}</div>
          </div>
        </div>
     
    </div>
  );
};

export default Card;
