import React from "react";
import ChevCon from "../Components/Pages/Brands/ChevCon";
import CarsNavigator from "../Components/Shared/CarsNavigator";
import Description from "../Components/Shared/Description";
import BlackNavbar from "../Components/Shared/BlackNavbar";
import logo7 from "../Assets/logos/logo7.png";

function Chevrolet() {
  return (
    <div>
      <BlackNavbar />
      <CarsNavigator title='Chevrolet' />

      <Description
        img={logo7}
        title='Showing 8 new Chevrolet models. Select a model for pricing details'
        model='Chevrolet Models'
      />
      <ChevCon />
    </div>
  );
}

export default Chevrolet;
