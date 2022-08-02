import React from "react";

const ManageInventory = (props) => {
  const { product, handleDeleteItem, index } = props;
  const { name, price, quantity } = product;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <h5>{name}</h5>
      </td>
      <td>$ {price}</td>
      <td>{quantity}</td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => handleDeleteItem(product)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageInventory;
