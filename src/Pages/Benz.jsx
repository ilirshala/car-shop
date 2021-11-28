import React from "react";
import BenzCon from "../Components/Pages/Brands/BenzCon";
import CarsNavigator from "../Components/Shared/CarsNavigator";
import Description from "../Components/Shared/Description";

import logo26 from "../Assets/logos/logo26.png";

function Benz() {
  return (
    <div>
      <CarsNavigator title='Mercedes-Benz' />

      <Description
        img={logo26}
        title='Showing 4 new Mercedes Benz models. Select a model for pricing details'
        model='Mercedes-Benz Models'
      />
      <BenzCon />
    </div>
  );
}

export default Benz;
