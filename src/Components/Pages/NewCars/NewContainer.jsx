import React, { useEffect } from "react";
import "../../../Styles/Pages/NewCars/NewContainer.scss";
import {
  hyndaiList,
  nissanList,
  landList,
  vwList,
} from "../../Pages/Brands/carsList.js";
import BrandCard from "../../Shared/BrandCard";
import AOS from "aos";
import "aos/dist/aos.css";

function NewContainer() {
  useEffect(() => {
    AOS.init({
      disable: "mobile",
      duration: 700,
    });
  }, []);
  return (
    <div className='newContainer'>
      <h1>New Cars</h1>
      <div className='newContainer__row' data-aos='fade-right'>
        {hyndaiList.map((item, key) => {
          return (
            <BrandCard
              id={item.id}
              img={item.img}
              title={item.title}
              price={item.price}
              key={key}
            />
          );
        })}
      </div>
      <div className='newContainer__row' data-aos='fade-left'>
        {nissanList.map((item, key) => {
          return (
            <BrandCard
              id={item.id}
              img={item.img}
              title={item.title}
              price={item.price}
              key={key}
            />
          );
        })}
      </div>
      <div className='newContainer__row' data-aos='fade-right'>
        {landList.map((item, key) => {
          return (
            <BrandCard
              id={item.id}
              img={item.img}
              title={item.title}
              price={item.price}
              key={key}
            />
          );
        })}
      </div>
      <div className='newContainer__row' data-aos='fade-left'>
        {vwList.map((item, key) => {
          return (
            <BrandCard
              id={item.id}
              img={item.img}
              title={item.title}
              price={item.price}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
}

export default NewContainer;
