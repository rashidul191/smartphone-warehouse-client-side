import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useInventory from "../../hook/useInventory";
import ManageInventory from "../ManageInventory/ManageInventory";

const ManageInventoryes = () => {
  const [products, setProduct] = useInventory();

  useEffect(() => {
    // const url = `https://pacific-castle-49013.herokuapp.com/products`;
    const url = `https://pacific-castle-49013.herokuapp.com/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  const handleDeleteItem = (id) => {
    const proceed = window.confirm("Are you sure? Delete it!");
    if (proceed) {
      const url = `https://pacific-castle-49013.herokuapp.com/product/${id}`;
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
      <div className="w-75 mx-auto">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ManageInventory
                key={product._id}
                product={product}
                handleDeleteItem={handleDeleteItem}
              ></ManageInventory>
            ))}
          </tbody>
        </Table>
        <div className="text-center">
          <Link to="/additem">
            <button className="btn btn-warning w-25">Add Item</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ManageInventoryes;
