const FilterContextReducer = (state, action) => {
  switch (action.type) {
    case "GET_FILTER_DATA":
      let priceArr = action.payload.map((curElem) => {
        return curElem.price;
      });

      //find maximum price in an array

      let maxPrice = Math.max(...priceArr);
      return {
        ...state,
        filter_data: [...action.payload], //[...]-> Because we are taking a copy of original set of data to play with it so original data not be harmed
        all_products: [...action.payload],
        filters: {
          ...state.filters,
          maxPrice: maxPrice,
          price: maxPrice,
        },
      };
    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_VALUE":
      //select the full drop down
      let userSortValue = document.getElementById("sort");

      //selecting each child

      let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      return {
        ...state,
        sorting_value: sort_value,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      let tempSortproduct = [...action.payload];
      if (state.sorting_value === "a-z") {
        newSortData = tempSortproduct.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      if (state.sorting_value === "z-a") {
        console.log("hi");
        newSortData = tempSortproduct.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }
      if (state.sorting_value === "lowest") {
        const sortingProducts = (a, b) => {
          return a.price - b.price;
        };
        newSortData = tempSortproduct.sort(sortingProducts);
      }
      if (state.sorting_value === "highest") {
        const sortingProducts = (a, b) => {
          return b.price - a.price;
        };
        newSortData = tempSortproduct.sort(sortingProducts);
      }
      return {
        ...state,
        filter_data: newSortData,
      };

    //very important case
    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTERS_PRODUCTS":
      let { all_products } = state;
      let tempFilterProducts = [...all_products];
      const { text, category, company, price } = state.filters;
      if (text) {
        tempFilterProducts = tempFilterProducts.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text);
        });
      }

      if (category !== "all") {
        tempFilterProducts = tempFilterProducts.filter(
          (curElem) => curElem.category === category
        );
      }

      if (company !== "all") {
        tempFilterProducts = tempFilterProducts.filter(
          (curElem) => curElem.company === company
        );
      }

      if (price === 0) {
        tempFilterProducts = tempFilterProducts.filter((curElem) => {
          return curElem.price === price;
        });
      } else {
        tempFilterProducts = tempFilterProducts.filter((curElem) => {
          return curElem.price <= price;
        });
      }
      return {
        ...state,
        filter_data: tempFilterProducts,
      };

    case "CLEAR":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          maxPrice: state.filters.maxPrice,
          minPrice: state.filters.minPrice,
          price: state.filters.maxPrice,
        },
      };
    default:
      return state;
  }
};

export default FilterContextReducer;
