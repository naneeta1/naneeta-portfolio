import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import project1 from "../../img/project1.jpg";
import project2 from "../../img/project2.jpg";
import project3 from "../../img/project3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { useContext } from "react";
import { themeContext } from "../../Context";

const Testimonial = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const clients = [
    {
      img: project1,
      review:
        "I have created a social networking application using React and Node that I am proud to showcase in my portfolio. Inspired by the popular platform Facebook, my application allows users to create a profile, connect with friends, and share updates, photos, and videos.",
    },
    {
      img: project2,
      review:
        "I have created a food recipe application using HTML, CSS, and JavaScript that I am excited to showcase in my portfolio. My application allows users to search for recipes by ingredient or dish name and provides them with detailed information on each recipe, including ingredients, instructions, and nutritional information.",
    },
    {
      img: project3,
      review:
        "I have created a blogs website using ReactJS and a fake server that I am proud to showcase in my portfolio. My website allows users to browse through a collection of blog articles and read the latest news and opinions on various topics.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
