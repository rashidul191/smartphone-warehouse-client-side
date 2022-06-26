import React from "react";
import useInventory from "../../../hook/useInventory";
import Product from "../Product/Product";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products] = useInventory();
  const navigate = useNavigate();

  const handleUpdateProduct = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div className="my-5 container">
      <h2 className="text-info text-center my-4">
        Inventory : {products.length}
      </h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            handleUpdateProduct={handleUpdateProduct}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
