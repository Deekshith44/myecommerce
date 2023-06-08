import React from "react";
import ListMenuCard from "../../../common/listmenucard/ListMenuCard";

const ListView = ({ products }) => {
  return (
    <div className="list__container">
      {products.map((elem) => {
        return <ListMenuCard {...elem} />;
      })}
    </div>
  );
};

export default ListView;
