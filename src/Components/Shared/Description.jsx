import React from "react";
import "../../Styles/Shared/Description.scss";

function Description({ img, title, model }) {
  return (
    <div className='description'>
      <h2>{title}</h2>
      <div>
        <img src={img} alt='' />
        <p>{model}</p>
      </div>
    </div>
  );
}

export default Description;
