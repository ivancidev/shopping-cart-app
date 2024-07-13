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
      case "DECREMENT_QUANTITY":
        return state.map((item) => {
          if (item.id === action.payload && item.quantity > 1) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        });
      case "INCREMENT_QUANTITY":
        return state.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      default:
        return state;
    }
  }

  const addShopping = (product) => {
    product.quantity = 1;
    const action = {
      type: "ADD_TO_SHOPPING",
      payload: product,
    };
    dispatch(action);
  };

  const removeShopping = (id) => {
    const action = {
      type: "REMOVE_FROM_SHOPPING",
      payload: id,
    };
    dispatch(action);
  };

  const decrementQuantity = (id) => {
    const action = {
      type: "DECREMENT_QUANTITY",
      payload: id,
    };
    dispatch(action);
  };

  const incrementQuantity = (id) => {
    const action = {
      type: "INCREMENT_QUANTITY",
      payload: id,
    };
    dispatch(action);
  };

  return (
    <ShoppingContext.Provider
      value={{
        listShopping,
        addShopping,
        removeShopping,
        decrementQuantity,
        incrementQuantity,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
}
