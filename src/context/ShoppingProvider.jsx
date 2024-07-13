import React, { useReducer } from "react";
import { ShoppingContext } from "./ShoppingContext";

const initialState = [];

export default function ShoppingProvider({ children }) {
  const [listShopping, dispatch] = useReducer(shoppingReducer, initialState);

  function shoppingReducer(state, action) {
    switch (action.type) {
      case "ADD_TO_SHOPPING":
        return [...state, action.payload];
      case "REMOVE_FROM_SHOPPING":
        return state.filter((item) => item.id !== action.payload);
      default:
        return state;
    }
  }

  const addShopping = (product) => {
    const action = {
      type: "ADD_TO_SHOPPING",
      payload: product,
    };
    dispatch(action);
  };

  return (
    <ShoppingContext.Provider value={{ listShopping, addShopping }}>
      {children}
    </ShoppingContext.Provider>
  );
}
