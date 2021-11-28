import React from "react";
import CarsNavigator from "../Components/Shared/CarsNavigator";
import Description from "../Components/Shared/Description";

import logo18 from "../Assets/logos/logo18.png";

function Jeep() {
  return (
    <div>
      <CarsNavigator title='Jeep' />

      <Description
        img={logo18}
        title='Jeep Models coming soon.'
        model='Fiat Models'
      />
    </div>
  );
}

export default Jeep;
