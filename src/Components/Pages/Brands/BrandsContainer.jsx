import React, { useEffect } from "react";
import "../../../Styles/Pages/Brands/BrandsContainer.scss";
import { list1, list2 } from "./brandsList.js";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function BrandsContainer() {
  useEffect(() => {
    AOS.init({
      disable: "mobile",
      duration: 700,
    });
  }, []);
  return (
    <div className='brandsContainer'>
      <h1>Browse By Brand</h1>
      <div className='brandsContainer__row'>
        <ul>
          {list1.map((list, key) => {
            return (
              <Link to={list.link} key={key}>
                <li data-aos='fade-right'>
                  <img src={list.img} alt='' />
                  {list.name}
                </li>
              </Link>
            );
          })}
        </ul>
        <ul>
          {list2.map((list, key) => {
            return (
              <Link to={list.link} key={key}>
                <li data-aos='fade-left'>
                  <img src={list.img} alt='' />
                  {list.name}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default BrandsContainer;
