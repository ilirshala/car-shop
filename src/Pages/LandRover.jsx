import React from "react";
import LandCon from "../Components/Pages/Brands/LandCon";
import CarsNavigator from "../Components/Shared/CarsNavigator";
import Description from "../Components/Shared/Description";

import logo20 from "../Assets/logos/logo20.png";
function LandRover() {
  return (
    <div>
      <CarsNavigator title='Land Rover' />

      <Description
        img={logo20}
        title='Showing 4 new Land Rover models. Select a model for pricing details'
        model='Land Rover  Models'
      />
      <LandCon />
    </div>
  );
}

export default LandRover;
