import React from "react";
import { CartState } from "../context/Context";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";

import "./style.css";

const Home = () => {
  const {
    dispatch,
    state: { products },
    state: { cart },
  } = CartState();

  console.log(products, cart);

  return (
    <div className="home">
      <Filters />
      <div className="product-container">
        {products.map((product) => (
          <SingleProduct
            product={product}
            key={product.id}
            dispatch={dispatch}
            cart={cart}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
