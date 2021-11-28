import React, { useState } from "react";
import { cars } from "../Components/Pages/CarDetails/allCarsList";
import { useParams } from "react-router-dom";

function CarDetail() {
  const { carId } = useParams();
  const currentCar = cars.find(car => car.id === +carId);

  console.log(currentCar.price);

  return (
    <div>
      <h1 style={{ marginTop: "120px" }}>{currentCar.title}</h1>
    </div>
  );
}

export default CarDetail;
