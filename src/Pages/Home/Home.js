import React from "react";
import ContactUs from "../ContactUs/ContactUs";
import Banner from "./Banner/Banner";
import Products from "./Products/Products";
import Review from "./Review/Review";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <Review></Review>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
