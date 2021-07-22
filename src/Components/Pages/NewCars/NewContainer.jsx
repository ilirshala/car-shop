import React from "react";
import "../../../Styles/Pages/NewCars/NewContainer.scss";
import {
  hyndaiList,
  nissanList,
  landList,
  vwList,
} from "../../Pages/Brands/carsList.js";
import BrandCard from "../../Shared/BrandCard";

function NewContainer() {
  return (
    <div className='newContainer'>
      <h1>New Cars</h1>
      <div className='newContainer__row'>
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
      <div className='newContainer__row'>
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
      <div className='newContainer__row'>
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
      <div className='newContainer__row'>
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
