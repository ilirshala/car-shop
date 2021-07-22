import React from "react";
import PorCon from "../Components/Pages/Brands/PorCon";
import CarsNavigator from "../Components/Shared/CarsNavigator";
import Description from "../Components/Shared/Description";
import BlackNavbar from "../Components/Shared/BlackNavbar";
import logo30 from "../Assets/logos/logo30.png";

function Porsche() {
  return (
    <div>
      <BlackNavbar />
      <CarsNavigator title='Porsche' />

      <Description
        img={logo30}
        title='Showing 4 new Porsche models. Select a model for pricing details'
        model='Porsche Models'
      />
      <PorCon />
    </div>
  );
}

export default Porsche;
