import React from "react";
import FordCon from "../Components/Pages/Brands/FordCon";
import CarsNavigator from "../Components/Shared/CarsNavigator";
import Description from "../Components/Shared/Description";

import logo11 from "../Assets/logos/logo11.png";

function Ford() {
  return (
    <div>
      <CarsNavigator title='Ford' />

      <Description
        img={logo11}
        title='Showing 4 new Ford models. Select a model for pricing details'
        model='Ford Models'
      />
      <FordCon />
    </div>
  );
}

export default Ford;
