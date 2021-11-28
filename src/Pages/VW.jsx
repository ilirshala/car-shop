import React from "react";
import VwCon from "../Components/Pages/Brands/VwCon";
import CarsNavigator from "../Components/Shared/CarsNavigator";
import Description from "../Components/Shared/Description";

import logo34 from "../Assets/logos/logo34.png";

function VW() {
  return (
    <div>
      <CarsNavigator title='Volkswagen' />

      <Description
        img={logo34}
        title='Showing 4 new Volgswagen models. Select a model for pricing details'
        model='Volgswagen Models'
      />
      <VwCon />
    </div>
  );
}

export default VW;
