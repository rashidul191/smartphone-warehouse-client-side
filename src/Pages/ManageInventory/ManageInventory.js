import React from 'react';

const ManageInventory = (props) => {
    const {product, handleDeleteItem} = props
    const {name, _id} = product
    return (
        <div>
            <h5>{name}</h5>
            <button onClick={()=> handleDeleteItem(_id)}>X</button>
        </div>
    );
};

export default ManageInventory;