import React, { useEffect, useRef } from "react";
import "../../Styles/Shared/Navbar.scss";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useState } from "react";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import { Link } from "react-router-dom";
import { useStateValue } from "../../Redux/StateProvider";
import NavbarResp from "./NavbarResp";
import CloseIcon from "@material-ui/icons/Close";

function Navbar() {
  const [{ basket }] = useStateValue();
  const wrapperRef = useRef(null);
  const [navbar, setNavbar] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 100) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", changeBackground);
  }, []);

  //this is for mobile menu click outside close it
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowNavbar(showNavbar);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <>
      <div
        ref={wrapperRef}
        className='navbarResponse'
        style={{ transform: showNavbar ? "translateX(0)" : "" }}>
        <NavbarResp />
      </div>
      <div className={navbar ? "navbarActive navbar" : "navbar"}>
        <div className='logo'>
          <Link to='/'>
            <h1>
              Car<span>Company</span>
            </h1>
          </Link>
        </div>
        <div className='links'>
          <ul>
            <li>
              <Link to='/brands'>Buy Car</Link>
            </li>
            <li>
              <Link to='/about-us'>About Us</Link>
            </li>
            <li>
              <Link to='new-cars'>New Cars</Link>
            </li>
            <Link to='/checkout'>
              <li>
                <ShoppingCartOutlinedIcon /> <span>{basket?.length}</span>
              </li>
            </Link>
            <li>
              <Link to='/signUp'>
                Sign Up <PersonOutlineOutlinedIcon />
              </Link>
            </li>
          </ul>
        </div>
        <div className='burgerIcon'>
          <MenuOpenIcon
            style={{
              display: showNavbar ? "none" : "",
              transition: "0.2s linear",
            }}
            onClick={() => setShowNavbar(!showNavbar)}
          />
          <CloseIcon
            style={{
              display: showNavbar ? "" : "none",
              transition: "0.2s linear",
            }}
            onClick={() => setShowNavbar(!showNavbar)}
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
