import React from "react";
import AudiCon from "../Components/Pages/Brands/AudiCon";
import CarsNavigator from "../Components/Shared/CarsNavigator";
import Description from "../Components/Shared/Description";
import BlackNavbar from "../Components/Shared/BlackNavbar";
import logo3 from "../Assets/logos/logo3.png";

function Audi() {
  return (
    <div>
      <BlackNavbar />
      <CarsNavigator title='Audi' />

      <Description
        img={logo3}
        title='Showing 12 new Audi models. Select a model for pricing details.'
        model='Audi Models'
      />
      <AudiCon />
    </div>
  );
}

export default Audi;
