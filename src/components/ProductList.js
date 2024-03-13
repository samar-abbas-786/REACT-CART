import React from "react";
import Product from "./Product";

export default function ProductList(props) {
  return props.products.length > 0 ? (
    <div className="row">
      {props.products.map((product, index) => (
        <Product
          key={index}
          product={product}
          incrementQuantity={() => props.incrementQuantity(index)}
          dicrementQuantity={() => props.dicrementQuantity(index)}
          removeItem={() => props.removeItem(index)}
        />
      ))}
    </div>
  ) : (
    <h1>No Products exist in the Cart</h1>
  );
}
