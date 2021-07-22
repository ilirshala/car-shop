import React from "react";
import "../../../Styles/Pages/Home/HomeFourth.scss";
import BrandCard from "../../Shared/BrandCard";
import { list1, list2 } from "./brandsList";

function HomeFourth() {
  return (
    <div className='homeFourth'>
      <h1>Top Brands</h1>
      <div className='homeFourth__row'>
        {list1.map((car, key) => {
          return (
            <BrandCard
              id={car.id}
              img={car.img}
              title={car.title}
              price={car.price}
              key={key}
            />
          );
        })}
      </div>
      <div className='homeFourth__row'>
        {list2.map((car, key) => {
          return (
            <BrandCard
              id={car.id}
              img={car.img}
              title={car.title}
              price={car.price}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomeFourth;
