import { createContext, useReducer } from "react";
import productsData from "../data/products.js";

export const InventoryContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "TRANSFER":
      return state.map(p =>
        p.id === action.payload.id
          ? { ...p, stock: p.stock - action.payload.qty }
          : p
      );
    default:
      return state;
  }
};

export const InventoryProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, productsData);

  return (
    <InventoryContext.Provider value={{ products, dispatch }}>
      {children}
    </InventoryContext.Provider>
  );
};
