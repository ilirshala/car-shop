import React from "react";
import "../../../Styles/Pages/Brands/BrandsContainer.scss";
import { list1, list2 } from "./brandsList.js";
import { Link } from "react-router-dom";

function BrandsContainer() {
  return (
    <div className='brandsContainer'>
      <h1>Browse By Brand</h1>
      <div className='brandsContainer__row'>
        <ul>
          {list1.map((list, key) => {
            return (
              <Link to={list.link} key={key}>
                <li>
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
                <li>
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
