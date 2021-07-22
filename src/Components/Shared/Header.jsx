import React from "react";
import "../../Styles/Shared/Header.scss";

function Header({ bgImg }) {
  return (
    <div className='header' style={{ backgroundImage: `url(${bgImg})` }}></div>
  );
}

export default Header;
