import React from "react";

const MyItem = (props) => {
  const { handleDeleteItem, item } = props;
  const { name, img, price, quantity, supplierName, description, _id } = item;
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
          <p className="m-0">Price : $ {price}</p>
          <p className="m-0">Quantity : {quantity}</p>
          <p>Supplier : {supplierName}</p>
          <p>Description : {description.slice(0, 50)}....</p>

          <button
            onClick={() => handleDeleteItem(_id)}
            className="btn btn-danger w-100"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyItem;
