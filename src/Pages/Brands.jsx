import React from "react";
import Header from "../Components/Shared/Header";
import brandsBg from "../Assets/brandsBg.webp";
import BrandsContainer from "../Components/Pages/Brands/BrandsContainer";
import HomeFifth from "../Components/Pages/Home/HomeFifth";
import Navbar from "../Components/Shared/Navbar";

function Brands() {
  return (
    <div>
      <Navbar />
      <Header bgImg={brandsBg} />
      <BrandsContainer />
      <HomeFifth />
    </div>
  );
}

export default Brands;
