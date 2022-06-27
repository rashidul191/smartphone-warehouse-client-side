import React from "react";
import useInventory from "../../hook/useInventory";
import ManageInventory from "./ManageInventory";

const ManageInventoryes = () => {
  const [products, setProducts] = useInventory();

  const handleDeleteItems = (id) => {
    // console.log(id)
    const product = products.filter((product) => product._id !== id);
    var result = window.confirm("Are you sure?");
    if (result) {
      setProducts(product);
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center text-info">Manage Inventory</h2>
      <div className="row row-cols-1 row-cols-sm-2 g-5 my-5">
        {products.map((product) => (
          <ManageInventory
            key={product._id}
            product={product}
            handleDeleteItems={handleDeleteItems}
          ></ManageInventory>
        ))}
      </div>
      
    </div>
  );
};

export default ManageInventoryes;
