import React from "react";
import NissanCon from "../Components/Pages/Brands/NissanCon";
import CarsNavigator from "../Components/Shared/CarsNavigator";
import Description from "../Components/Shared/Description";
import BlackNavbar from "../Components/Shared/BlackNavbar";
import logo29 from "../Assets/logos/logo29.png";

function Nissan() {
  return (
    <div>
      <BlackNavbar />
      <CarsNavigator title='Nissan' />

      <Description
        img={logo29}
        title='Showing 4 new Nissan models. Select a model for pricing details'
        model='Nissan Models'
      />
      <NissanCon />
    </div>
  );
}

export default Nissan;
