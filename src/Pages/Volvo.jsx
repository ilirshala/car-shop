import React from "react";
import VolvoCon from "../Components/Pages/Brands/VolvoCon";
import CarsNavigator from "../Components/Shared/CarsNavigator";
import Description from "../Components/Shared/Description";
import BlackNavbar from "../Components/Shared/BlackNavbar";
import logo35 from "../Assets/logos/logo35.png";

function Volvo() {
  return (
    <div>
      <BlackNavbar />
      <CarsNavigator title='Volvo' />

      <Description
        img={logo35}
        title='Showing 4 new Volvo models. Select a model for pricing details'
        model='Volvo Models'
      />
      <VolvoCon />
    </div>
  );
}

export default Volvo;
