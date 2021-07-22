import React from "react";
import "../../Styles/Shared/NavbarResp.scss";
import { Link } from "react-router-dom";
import { useStateValue } from "../../Redux/StateProvider";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

function NavbarResp() {
  const [{ basket }] = useStateValue();

  return (
    <div className='navbarResp'>
      <div className='navbarResp__logo'>
        <Link to='/'>
          <h1>
            Car<span>Company</span>
          </h1>
        </Link>
      </div>
      <ul>
        <li>
          {" "}
          <Link to='/brands'>Buy Car</Link>
        </li>

        <li>
          <Link to='/about-us'>About Us</Link>
        </li>
        <li>
          <Link to='/new-cars'>New Cars</Link>
        </li>
        <Link to='/checkout'>
          <li>
            <ShoppingCartOutlinedIcon /> <span>{basket?.length}</span>
          </li>
        </Link>
        <li>
          <Link to='signUp'>
            Sign Up <PersonOutlineOutlinedIcon />{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavbarResp;
