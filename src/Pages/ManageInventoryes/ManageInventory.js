import React from "react";

const ManageInventory = (props) => {
  const { handleDeleteItems, product } = props;
  const { name , _id } = product;
  return (
    
      <div className="col">
        <h4>{name}</h4>
        <button onClick={()=> handleDeleteItems(_id)}>X</button>
      </div>
    
  );
};

export default ManageInventory;
