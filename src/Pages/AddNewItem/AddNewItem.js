import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.inti";

const AddNewItem = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (
      data?.name &&
      data?.img &&
      data?.name &&
      data?.price &&
      data?.quantity &&
      data?.supplierName
    ) {
      const url = `https://pacific-castle-49013.herokuapp.com/product`;
      fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result?.insertedId) {
            toast.success("Add Item successfully!");
            navigate("/myItems");
          } else {
            toast.error("Sorry! Item is not add");
          }
        });
    } else {
      toast.error("Item filed is empty, Try again");
    }
  };

  return (
    <div className="container my-5 w-50 mx-auto">
      <h2 className="text-center text-info">Add New Item</h2>
      <form
        className="d-flex flex-column border border-3 border-success p-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          readOnly
          className="mb-3"
          {...register("email")}
          value={user?.email}
        />
        <input
          className="mb-3"
          {...register("name")}
          placeholder="product name"
        />
        <input
          className="mb-3"
          type="text"
          {...register("img")}
          placeholder="photo url"
        />

        <input
          className="mb-3"
          type="number"
          {...register("price")}
          placeholder="price"
        />
        <input
          className="mb-3"
          type="number"
          {...register("quantity")}
          placeholder="quantity"
        />

        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          className="mb-3"
          {...register("description")}
          placeholder="description"
        ></textarea>
        <input
          className="mb-3"
          type="text"
          {...register("supplierName")}
          placeholder="Supplier Name"
        />
        <input className="btn btn-primary" type="submit" value="Add New Item" />
      </form>
    </div>
  );
};

export default AddNewItem;
