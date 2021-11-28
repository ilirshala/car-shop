import React from "react";
import RomeoCon from "../Components/Pages/Brands/RomeoCon";
import CarsNavigator from "../Components/Shared/CarsNavigator";
import Description from "../Components/Shared/Description";

import logo2 from "../Assets/logos/logo2.png";

function AlfaRomeo() {
  return (
    <div>
      <CarsNavigator title='Alfa Romeo' />
      <Description
        img={logo2}
        title='Showing 3 new Alfa Romeo models. Select a model for pricing details.'
        model='Alfa Romeo Models'
      />
      <RomeoCon />
    </div>
  );
}

export default AlfaRomeo;
