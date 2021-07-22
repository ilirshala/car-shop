import React, { useEffect } from "react";
import "../../../Styles/Pages/Home/HomeFourth.scss";
import BrandCard from "../../Shared/BrandCard";
import { list1, list2 } from "./brandsList";
import AOS from "aos";
import "aos/dist/aos.css";

function HomeFourth() {
  useEffect(() => {
    AOS.init({
      disable: "mobile",
      duration: 700,
    });
  }, []);
  return (
    <div className='homeFourth'>
      <h1 data-aos='fade-up'>Top Brands</h1>
      <div className='homeFourth__row' data-aos='fade-right'>
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
      <div className='homeFourth__row' data-aos='fade-left'>
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
