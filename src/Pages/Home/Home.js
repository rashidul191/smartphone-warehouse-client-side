import React from "react";
import ContactUs from "../ContactUs/ContactUs";
import Banner from "./Banner/Banner";
import Products from "./Products/Products";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
