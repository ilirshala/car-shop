import React from "react";
import Container from "../Components/Pages/Brands/Container";
import CarsNavigator from "../Components/Shared/CarsNavigator";
import Description from "../Components/Shared/Description";
import BlackNavbar from "../Components/Shared/BlackNavbar";
import logo1 from "../Assets/logos/logo1.png";

function Acura() {
  return (
    <div>
      <BlackNavbar />
      <CarsNavigator title='Acura' />
      <Description
        img={logo1}
        title='Showing 5 new Acura models. Select a model for pricing details'
        model='Acura Models'
      />
      <Container />
    </div>
  );
}

export default Acura;
