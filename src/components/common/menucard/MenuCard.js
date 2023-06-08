import React from "react";
import "./menucard.css";
import FormatPrice from "../../helpers/FormatPrice";

const MenuCard = (props) => {
  const { price } = props;
  return (
    <div className="menu__section">
      <div className="menuCard__holder">
        <figure>
          <img src={props.icon} alt={props.icon} />
        </figure>
        <div className="menu_details">
          <div className="menu_title">{props.title}</div>

          <div className="menu_price">{<FormatPrice price={price} />}</div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
