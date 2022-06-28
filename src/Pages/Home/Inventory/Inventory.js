import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Inventory = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { name, img, price, quantity } = product;
  const updateQuantity = parseInt(quantity);
  useEffect(() => {
    const url = `http://localhost:5000/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id, product]);

  // handle Delivered btn
  const handleDelivered = () => {
    const newQuantity = updateQuantity - 1;
    const url = `http://localhost:5000/product/${id}`;
    fetch(url, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        quantity: newQuantity,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        toast.success("Delivery Successfully!");
      });
  };

  // handle add Quantity btn
  const handleAddQuantity = (event) => {
    event.preventDefault();
    const userQuantity = parseInt(event.target.quantity.value);
    const addQuantity = userQuantity + updateQuantity;
    const url = ` http://localhost:5000/product/${id}`;
    if (addQuantity) {
      fetch(url, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          quantity: addQuantity,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
          toast.success("Add Quantity Successfully !!");
        });
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center text-info mb-sm-5">Update Inventory</h2>
      <div className="row row-cols-1 row-cols-sm-2 g-5">
        <div className="col border text-center py-3">
          <img width={300} src={img} alt="" />
          <h4>{name}</h4>
          <p>Price: ${price}</p>
          <p>Quantity: {quantity}</p>
          <p></p>
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
