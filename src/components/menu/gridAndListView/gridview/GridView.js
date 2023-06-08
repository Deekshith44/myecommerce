import React from "react";
import "./gridview.css";
import MenuCard from "../../../common/menucard/MenuCard";

const GridView = ({ products }) => {
  console.log({ products });
  return (
    <div className="section grid__holder">
      {products.map((elem) => {
        const { id, image, price, name } = elem;
        return (
          <div className="section" key={id}>
            <MenuCard title={name} icon={image} price={price} />
          </div>
        );
      })}
    </div>
  );
};

export default GridView;
