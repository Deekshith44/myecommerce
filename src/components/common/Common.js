import React from "react";
import "./common.css";
import { NavLink } from "react-router-dom";
import Button from "../styles/button/Button";
import home from "../../assets/Home&AboutImages/Home.png";
import home1 from "../../assets/Home&AboutImages/HomeHd.png";

const Common = (props) => {
  return (
    <div className="section container common__section">
      <div className="details__section">
        <h2>{props.name}</h2>
        <h3>{props.subtitle}</h3>
        <p>{props.desc}</p>
        <NavLink to="/menu">
          <Button />
        </NavLink>
      </div>

      <div className="image__section">
        <figure>
          <img src={props.image} alt="home" />
        </figure>
      </div>
    </div>
  );
};

export default Common;
