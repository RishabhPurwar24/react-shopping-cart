import React, { createContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { CartReducer } from "./Reducer";
import { useContext } from "react";

const Cart = createContext();

// renders only one type of data.
// faker.seed(99);

const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));

  const initialState = {
    products: products,
    cart: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

// Consume state values
export const CartState = () => {
  return useContext(Cart);
};
