import React from "react";
import "../../Styles/Shared/Footer.scss";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__left'>
        <h1>Contact</h1>
        <h3>
          Car<span>Company</span>
        </h3>
        <p>500 Terry Francois Street</p>
        <p>San Francisco, CA 94158</p>
      </div>
      <div className='footer__middle'>
        <p>Tel 123-456-789</p>
        <p>Email: info@mysite.com</p>
        <p>Book a Consulation</p>
        <div>
          <FacebookIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
      </div>
      <div className='footer__right'>
        <h2>Subscribe to NewsLetter</h2>
        <div className='inputField'>
          <input type='text' placeholder='Enter your email here*' />
          <button>Join</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
