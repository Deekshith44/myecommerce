import React, { Fragment } from "react";
import { useFilterContext } from "../../../context/filtercontext";
import "./filtersection.css";
import FormatPrice from "../../../helpers/FormatPrice";

const FilterSection = () => {
  const {
    filters: { text, category, minPrice, maxPrice, price },
    updateFilterValue,
    all_products,
    clearFilters,
  } = useFilterContext();

  //to get unique data for each field
  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });
    return (newVal = ["all", ...new Set(newVal)]);
  };

  //need unique data
  const categoryOnlyData = getUniqueData(all_products, "category");

  //for company
  const companyyOnlyData = getUniqueData(all_products, "company");

  return (
    <Fragment>
      <div className="filter__section__holder">
        <div className="search__container">
          <form onSubmit={(e) => e.preventDefault}>
            <input
              type="text"
              name="text"
              placeholder="Search for items"
              value={text}
              onChange={updateFilterValue}
              className="search__input"
            />
          </form>
        </div>
        <div className="category__filter">
          <h3>Category</h3>
          <div className=" category__filter__section">
            {categoryOnlyData.map((curElem) => {
              return (
                <button
                  key={curElem.id}
                  type="button"
                  name="category"
                  value={curElem}
                  onClick={updateFilterValue}
                >
                  {curElem}
                </button>
              );
            })}
          </div>
        </div>

        <div className="company_filter__section">
          <h3>Company</h3>
          <form action="#">
            <select
              name="company"
              id="company"
              className="filter_company_select"
              onClick={updateFilterValue}
            >
              {companyyOnlyData.map((curElem) => {
                return (
                  <option key={curElem.id} name="company">
                    {curElem}
                  </option>
                );
              })}
            </select>
          </form>
        </div>

        <div className="price__range">
          <h3>Price</h3>
          <p>
            <FormatPrice price={price} />
          </p>
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={price}
            name="price"
            onChange={updateFilterValue}
          />
        </div>

        <div className="clear__filter">
          <button className="clear__btn" onClick={clearFilters}>
            Clear Filters
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default FilterSection;
