import React from "react";

export default function Product(props) {
  return (
    <div className="row mt-4">
      <div className="col-5">
        <h2>
          {props.product.name}
          <span class="badge text-bg-secondary">₹{props.product.price}</span>
        </h2>
      </div>
      <div className="col-3">
        <button
          type="button"
          class="btn btn-success"
          onClick={() => {
            props.dicrementQuantity(props.index);
          }}
        >
          -
        </button>
        {/* dicrementQuantity */}
        <button type="button" class="btn btn-danger">
          {props.product.quantity}
        </button>
        <button
          type="button"
          class="btn btn-warning"
          onClick={() => {
            props.incrementQuantity(props.index);
          }}
        >
          +
        </button>
      </div>
      <div className="col-2">
        {props.product.quantity * props.product.price}
      </div>
      <button
        className="col-2 btn btn-dark"
        onClick={() => {
          props.removeItem(props.index);
        }}
      >
        Remove
      </button>
    </div>
  );
}
