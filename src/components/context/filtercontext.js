import { createContext, useContext, useEffect, useReducer } from "react";
import { useGlobalProductContext } from "./productcontext";
import reducer from "../reducer/FilterContextReducer";

const FilterContext = createContext();

const initialstate = {
  filter_data: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
    maxPrice: 0,
    minPrice: 0,
    price: 0,
  },
};

const FilterProvider = ({ children }) => {
  const { products } = useGlobalProductContext();
  const [state, dispatch] = useReducer(reducer, initialstate);

  //To set grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  //To set ListView
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  //sorting function
  const Sorting = () => {
    dispatch({ type: "GET_SORT_VALUE" });
  };

  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };

  //clear filters

  const clearFilters = () => {
    dispatch({ type: "CLEAR" });
  };

  //update according to the sort
  useEffect(() => {
    dispatch({ type: "SORTING_PRODUCTS", payload: products });
  }, [state.sorting_value]);

  useEffect(() => {
    dispatch({ type: "GET_FILTER_DATA", payload: products });
  }, [products]); //Because we created dispatch inside the useEffect, it will call when the page render for the 1st time, so pass "products as the dependencies "

  //Run filter function on page load
  useEffect(() => {
    dispatch({ type: "FILTERS_PRODUCTS" });
  }, [state.filters]);
  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        Sorting,
        updateFilterValue,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterProvider, useFilterContext };
