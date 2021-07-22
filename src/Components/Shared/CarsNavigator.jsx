import React from "react";
import "../../Styles/Shared/CarsNavigator.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function CarsNavigator({ title }) {
  const [path, setPath] = useState("");
  const onChange = (e) => {
    setPath(e.target.value);
  };
  return (
    <div className='carsNavigator'>
      <div className='nav'>
        <select name='' id='' onChange={onChange}>
          <option value=''>{title}</option>
          <option value='/brands/acura'>Acura</option>
          <option value='/brands/alfa-romeo'>Alfa Romeo</option>
          <option value='/brands/audi'>Audi</option>
          <option value='/brands/bmw'>BMW</option>
          <option value='/brands/chevrolet'>Chevrolet</option>
          <option value='/brands/fiat'>Fiat</option>
          <option value='/brands/ford'>Ford</option>
          <option value='/brands/jeep'>Jeep</option>
          <option value='/brands/nissan'>Nissan</option>
          <option value='/brands/hyundai'>Hyundai</option>
          <option value='/brands/land-rovers'>Land Rover</option>
          <option value='/brands'>Maserati</option>
          <option value='/brands/vw'>Volswagen</option>
          <option value='/brands/volvo'>Volvo</option>
          <option value='/brands'>Mazda</option>
          <option value='/brands/benz'>Mercedes-Benz</option>
          <option value='/brands/porsche'>Porsche</option>
          <option value='/brands'>Toyota</option>
        </select>
        <Link to={path}>Update</Link>
      </div>
    </div>
  );
}

export default CarsNavigator;
