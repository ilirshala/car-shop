import React from "react";
import HyndaiCon from "../Components/Pages/Brands/HyndaiCon";
import CarsNavigator from "../Components/Shared/CarsNavigator";
import Description from "../Components/Shared/Description";
import BlackNavbar from "../Components/Shared/BlackNavbar";
import logo15 from "../Assets/logos/logo15.png";

function Hyndai() {
  return (
    <div>
      <BlackNavbar />
      <CarsNavigator title='Hyundai' />

      <Description
        img={logo15}
        title='Showing 4 new Hyundai models. Select a model for pricing details'
        model='Hyundai Models'
      />
      <HyndaiCon />
    </div>
  );
}

export default Hyndai;
