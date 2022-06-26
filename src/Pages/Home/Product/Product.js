import React from "react";

const Product = (props) => {
  const { handleUpdateProduct, product } = props;
  const { name, img, price, quantity, supplierName, _id } = product;
  return (
    <div className="col">
      <div className="card">
        <img
          className="card-img-top"
          width={300}
          height={200}
          src={img}
          alt=""
        />
        <div className="card-body">
          <h5>{name}</h5>
          <p className="m-0">Price : ${price}</p>
          <p className="m-0">Quantity : {quantity}</p>
          <p>Supplier : {supplierName}</p>

          <button
            onClick={() => handleUpdateProduct(_id)}
            className="btn btn-info w-100"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
