import React from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import "./maincard.css";

const MainCard = (props) => {
  const { title, price, icon, category } = props;
  return (
    <div className="maincard__container">
      <div className="main_image__container">
        <figure>
          <img src={icon} alt="icon" />
        </figure>
      </div>
      <div className="main_card__title ">
        {title}
        <div className="maincard__icons">
          <AiOutlineHeart className="heart" />
          <AiOutlineShoppingCart className="maincart" />
        </div>
      </div>
      <div className="maincard__price">
        <small>Price: </small>
        {price}
      </div>
    </div>
  );
};

export default MainCard;
