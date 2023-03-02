import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Project1 from "../../img/project1.jpg";
import Project2 from "../../img/project2.jpg";
import Project3 from "../../img/Project3.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Project1} alt="" style={{ height: '200px', width: '350px' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Project2} alt="" style={{ height: '200px', width: '350px' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Project3} alt="" style={{ height: '200px', width: '350px' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" style={{ height: '200px', width: '350px' }} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
