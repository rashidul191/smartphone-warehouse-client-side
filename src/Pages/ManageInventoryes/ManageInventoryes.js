import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useInventory from "../../hook/useInventory";
import Loading from "../../Shared/Loading/Loading";
import ManageInventory from "../ManageInventory/ManageInventory";

const ManageInventoryes = () => {
  const [products, setProduct] = useInventory();

  useEffect(() => {
    const url = `https://smartphone-warehouse-server.onrender.com/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [setProduct]);

  const handleDeleteItem = (product) => {
    const id = product._id;
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",

        text: product.name,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          const url = `https://smartphone-warehouse-server.onrender.com/product/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data?.deletedCount > 0) {
                const remainProduct = products.filter(
                  (product) => product._id !== id
                );
                setProduct(remainProduct);
              }
            });

          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };

  if (products.length === 0) {
    return <Loading></Loading>;
  }

  return (
    <div className="container my-5">
      <h2 className="text-center text-info">Manage Inventory</h2>
      <div className="w-75 mx-auto">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S.N</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <ManageInventory
                key={product._id}
                index = {index}
                product={product}
                handleDeleteItem={handleDeleteItem}
              ></ManageInventory>
            ))}
          </tbody>
        </Table>
        <div className="text-center">
          <Link to="/addItem">
            <button className="btn btn-warning text-white w-25">Add New Item</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ManageInventoryes;
