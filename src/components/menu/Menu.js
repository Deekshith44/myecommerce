import React from "react";
import "./menu.css";
import FilterSection from "./threesections/filtersection/FilterSection";
import Sort from "./threesections/sort/Sort";
import ProductList from "./threesections/productlist/ProductList";

const Menu = () => {
  return (
    <div className="section container grid__container_menu">
      <div className="filter__section">
        <FilterSection />
      </div>

      <section className="sort_and_data__section">
        <div className="sort__section">
          <Sort />
        </div>
        <div className="product__list">
          <ProductList />
        </div>
      </section>
    </div>
  );
};

export default Menu;
