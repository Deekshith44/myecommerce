import React from "react";
import { NavLink } from "react-router-dom";
import loginImg from "../../assets/Home&AboutImages/avatar.png";
import "./header.css";

const Header = () => {
  return (
    <nav className="nav max__width">
      <div className="logo__container">
        <NavLink to="/" className="logo">
          <h1>
            Joy<span>Buy</span>
          </h1>
        </NavLink>
      </div>

      <ul className="link__list">
        <li>
          <NavLink to="/" className="links">
            <h3>Home</h3>
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="links">
            <h3>About</h3>
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu" className="links">
            <h3>Menu</h3>
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="links">
            <h3>Cart</h3>
          </NavLink>
        </li>
        <li>
          <div className="profile">
            <figure>
              <img src={loginImg} alt="profile" />
            </figure>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
