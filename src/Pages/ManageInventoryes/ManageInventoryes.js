import React from "react";
import useInventory from "../../hook/useInventory";
import ManageInventory from "../ManageInventory/ManageInventory";

const ManageInventoryes = () => {
  const [products, setProduct] = useInventory();

  const handleDeleteItem = (id) => {
    // console.log(id)
    // const product = products.filter((product) => product._id !== id);
    var proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remainProduct = products.filter(
            (product) => product._id !== id
          );

          setProduct(remainProduct);
        });
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
            handleDeleteItem={handleDeleteItem}
          ></ManageInventory>
        ))}
      </div>
    </div>
  );
};

export default ManageInventoryes;
