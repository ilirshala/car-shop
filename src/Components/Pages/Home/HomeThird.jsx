import React, { useEffect } from "react";
import "../../../Styles/Pages/Home/HomeThird.scss";
import AOS from "aos";
import "aos/dist/aos.css";

function HomeThird() {
  useEffect(() => {
    AOS.init({
      disable: "mobile",
      duration: 600,
    });
  }, []);
  return (
    <div className='homeThird'>
      <h1 data-aos='fade-up'>Who are We?</h1>
      <p data-aos='fade-up'>
        We are company who everybody can sell and buy any car, old or newest. We
        show you price ratings for new and used cars. We provide this
        information so you can feel confident in the upfront, discounted price
        you’ll pay at the dealership. If you need a fast and easy way to trade
        in your car, you can get a cash offer in minutes
      </p>
    </div>
  );
}

export default HomeThird;
