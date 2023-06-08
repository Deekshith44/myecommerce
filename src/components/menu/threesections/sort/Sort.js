import React from "react";
import "./sort.css";
import { BsFillGridFill } from "react-icons/bs";
import { BiListUl } from "react-icons/bi";
import { useFilterContext } from "../../../context/filtercontext";
const Sort = () => {
  const { grid_view, setGridView, setListView, filter_data, Sorting } =
    useFilterContext();
  return (
    <div className="sort__container">
      <div className="grid__buttons">
        <div className="gridList__btn">
          <button
            className={grid_view ? "active sort__btn" : "sort__btn"}
            onClick={setGridView}
          >
            <BsFillGridFill className="sort__btn gridbtn__design" />
          </button>
          <button
            className={!grid_view ? "active sort__btn" : "sort__btn"}
            onClick={setListView}
          >
            <BiListUl className="sort__btn listbtn__design" />
          </button>
        </div>
      </div>
      <div className="total__products">
        <div>{`${filter_data.length}`} Products available</div>
      </div>
      <div className="sort__alphabets">
        <form action="#">
          <select
            name="sort"
            id="sort"
            className="select__holder"
            onClick={Sorting}
          >
            <option value="lowest">Price(Lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price(Highest)</option>
            <option value="#" disabled></option>
            <option value="a-z">Name(a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Name(z-a)</option>
            <option value="#" disabled></option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Sort;
