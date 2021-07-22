import React, { useEffect } from "react";
import "../../../Styles/Pages/Home/HomeFifth.scss";
import NewsCard from "../../Shared/NewsCard";
import Carousel from "react-elastic-carousel";
import { newsCard } from "./brandsList";
import AOS from "aos";
import "aos/dist/aos.css";

function HomeFifth() {
  useEffect(() => {
    AOS.init({
      disable: "mobile",
      duration: 700,
    });
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 1, pagination: false },
    { width: 850, itemsToShow: 2 },
    { width: 1150, itemsToShow: 3, itemsToScroll: 1 },
    { width: 1450, itemsToShow: 4 },
    { width: 1750, itemsToShow: 4 },
  ];
  return (
    <div className='homeFifth'>
      <h1>Flash News</h1>
      <Carousel
        breakPoints={breakPoints}
        enableAutoPlay={true}
        autoPlaySpeed={2000}>
        {newsCard.map((news, key) => {
          return (
            <NewsCard
              img={news.img}
              title={news.title}
              paragraf={news.paragraf}
              journalist={news.journalist}
              key={key}
              dataaos='flip-right'
            />
          );
        })}
      </Carousel>
    </div>
  );
}

export default HomeFifth;
