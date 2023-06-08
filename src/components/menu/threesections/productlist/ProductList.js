import React from "react";
import { useFilterContext } from "../../../context/filtercontext";
import GridView from "../../gridAndListView/gridview/GridView";
import ListView from "../../gridAndListView/listview/ListView";

const ProductList = () => {
  const { filter_data, grid_view } = useFilterContext();

  if (grid_view === true) {
    return <GridView products={filter_data} />;
  }

  if (grid_view === false) {
    return <ListView products={filter_data} />;
  }
};

export default ProductList;
