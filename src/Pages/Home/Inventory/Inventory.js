import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Inventory = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const url = ` http://localhost:5000/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  //   const productDetails = products.find((product) => product._id === id);

  //   const preQuantityText = productDetails?.quantity;

  let [quantity, setQuantity] = useState(0);
  console.log(quantity);

  let currentQuantity;
  if (quantity > 0) {
    console.log(quantity);
    currentQuantity = quantity;
  } else {
    currentQuantity = 0;
  }
  // handle Delivered btn
  const handleDelivered = () => {
    let newQuantity = quantity - 1;
    setQuantity(newQuantity);
  };

  // handle add Quantity btn
  const handleAddQuantity = (event) => {
    event.preventDefault();
    const newQuantity = event.target.quantity.value;
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center text-info mb-sm-5">Update Inventory</h2>
      <div className="row row-cols-1 row-cols-sm-2 g-5">
        <div className="col border text-center py-3">
          <img width={300} src={product?.img} alt="" />
          <h4>{product?.name}</h4>
          <p>Quantity: {currentQuantity}</p>
          <button onClick={handleDelivered} className="btn btn-success w-50">
            Delivered
          </button>
        </div>
        <div className="col">
          {/* Add Quantity Form */}
          <Form onSubmit={handleAddQuantity}>
            <Form.Group className="mb-3" controlId="formBasicAddQuantity">
              <Form.Control
                type="number"
                name="quantity"
                placeholder="add quantity"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-50">
              Add Quantity
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
