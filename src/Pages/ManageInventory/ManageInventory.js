import React from "react";

const ManageInventory = (props) => {
  const { product, handleDeleteItem } = props;
  const { name, price, quantity, _id } = product;
  return (
    <tr>
      <td><h5>{name}</h5></td>
      <td>$ {price}</td>
      <td>{quantity}</td>
      <td>
        <button className="btn btn-danger" onClick={() => handleDeleteItem(_id)}>Delete</button>
      </td>
    </tr>
  );
};

export default ManageInventory;
