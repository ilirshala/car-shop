import React from "react";
import "../../Styles/Shared/NewsCard.scss";

function NewsCard({ img, title, paragraf, journalist, dataaos }) {
  return (
    <div className='newsCard' data-aos={dataaos}>
      <div
        className='newsCardImg'
        style={{ backgroundImage: `url(${img})` }}></div>
      <h2>{title}</h2>
      <p>{paragraf}</p>
      <h3>{journalist}</h3>
    </div>
  );
}

export default NewsCard;
