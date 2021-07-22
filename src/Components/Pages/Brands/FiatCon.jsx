import React from "react";
import "../../../Styles/Pages/Brands/Container.scss";
import BrandCard from "../../Shared/BrandCard";
import { fiatList } from "./carsList";

function Container() {
  return (
    <div className='container'>
      {fiatList.map((acure, key) => {
        return (
          <BrandCard
            id={acure.id}
            img={acure.img}
            title={acure.title}
            price={acure.price}
            key={key}
          />
        );
      })}
    </div>
  );
}

export default Container;
