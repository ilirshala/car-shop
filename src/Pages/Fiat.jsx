import React from "react";
import FiatCon from "../Components/Pages/Brands/FiatCon";
import CarsNavigator from "../Components/Shared/CarsNavigator";
import Description from "../Components/Shared/Description";
import BlackNavbar from "../Components/Shared/BlackNavbar";
import logo10 from "../Assets/logos/logo10.png";

function Fiat() {
  return (
    <div>
      <BlackNavbar />
      <CarsNavigator title='Fiat' />

      <Description
        img={logo10}
        title='Showing 2 new Fiat models. Select a model for pricing details'
        model='Fiat Models'
      />
      <FiatCon />
    </div>
  );
}

export default Fiat;
