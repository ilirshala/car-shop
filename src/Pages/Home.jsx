import React from "react";
import HomeFifth from "../Components/Pages/Home/HomeFifth";
import HomeFourth from "../Components/Pages/Home/HomeFourth";
import HomeThird from "../Components/Pages/Home/HomeThird";
import Header from "../Components/Shared/Header";
import homeBg from "../Assets/homeBg.webp";
import Navbar from "../Components/Shared/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <Header bgImg={homeBg} />
      <HomeThird />
      <HomeFourth />
      <HomeFifth />
    </div>
  );
}

export default Home;
