import React from "react";
import BmwCon from "../Components/Pages/Brands/BmwCon";
import CarsNavigator from "../Components/Shared/CarsNavigator";
import Description from "../Components/Shared/Description";

import logo4 from "../Assets/logos/logo4.png";

function BMW() {
  return (
    <div>
      <CarsNavigator title='BMW' />

      <Description
        img={logo4}
        title='Showing 8 new BMW models. Select a model for pricing details'
        model='BMW Models'
      />
      <BmwCon />
    </div>
  );
}

export default BMW;
