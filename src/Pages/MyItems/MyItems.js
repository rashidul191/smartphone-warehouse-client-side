import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.inti";
import MyItem from "../MyItem/MyItem";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    const getMyItems = async () => {
      const email = user?.email;
      const url = `https://smartphone-warehouse-server.onrender.com/product?email=${email}`;
      const { data } = await axios.get(url);
      setMyItems(data);
    };
    getMyItems();
  }, [user]);

  const handleDeleteItem = (id) => {
    const proceed = window.confirm("Are you sure? Delete it!");
    if (proceed) {
      const url = `https://smartphone-warehouse-server.onrender.com/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
         .then((res) => res.json())
        .then((data) => {
          const remainItem = myItems.filter((item) => item._id !== id);
          setMyItems(remainItem);
        });
    }
  };
  return (
    <div className="container my-sm-5">
      <h2 className="text-center text-info mb-3">My Items</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
        {myItems.map((item) => (
          <MyItem
            key={item._id}
            item={item}
            handleDeleteItem={handleDeleteItem}
          ></MyItem>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
