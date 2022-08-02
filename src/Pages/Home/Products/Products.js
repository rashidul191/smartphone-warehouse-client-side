import React from "react";
import useInventory from "../../../hook/useInventory";
import Product from "../Product/Product";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../../Shared/Loading/Loading";

const Products = () => {
  const [products] = useInventory();
  const navigate = useNavigate();

  const handleUpdateProduct = (id) => {
    navigate(`/inventory/${id}`);
  };

  if(products.length === 0){
    return <Loading></Loading>
  }
  return (
    <div className="my-5 container">
      <h2 className="text-info text-center my-4">Inventory</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
        {products.slice(0, 6).map((product) => (
          <Product
            key={product._id}
            product={product}
            handleUpdateProduct={handleUpdateProduct}
          ></Product>
        ))}
      </div>
      <div className="text-center">
        <Link to="/manageInventory">
          {" "}
          <button className="btn btn-warning">Manage Inventory </button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
