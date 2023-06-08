import React from "react";

import "./listmenucard.css";
import FormatPrice from "../../helpers/FormatPrice";

const ListMenuCard = (props) => {
  const { id, name, image, price, description } = props;
  return (
    <div className="listview__grid listview__container">
      <figure>
        <img src={image} alt={image} className="listmenu__image" />
      </figure>
      <div className="listview__details" key={id}>
        <div className="listview__title">{name}</div>
        <div className="listview__desc">{description.slice(0, 190)}...</div>
        <div className="listview__price">{<FormatPrice price={price} />}</div>
        <button className="readmore__btn">Read More</button>
      </div>
    </div>
  );
};

export default ListMenuCard;
