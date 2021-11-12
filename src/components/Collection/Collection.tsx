import React from "react";
import Slider from "react-slick";
import "./styles.css";
import baby1 from "../../assets/baby1.png";
import baby2 from "../../assets/baby2.png";
import baby3 from "../../assets/baby3.png";
import baby4 from "../../assets/baby4.png";
import baby5 from "../../assets/baby5.png";
import baby6 from "../../assets/baby6.png";
import baby7 from "../../assets/baby7.png";
import baby8 from "../../assets/baby8.png";
import baby9 from "../../assets/baby9.png";
import baby10 from "../../assets/baby10.png";

const Collection = () => {
  const data = [
    baby1,
    baby2,
    baby3,
    baby4,
    baby5,
    baby6,
    baby7,
    baby8,
    baby9,
    baby10,
  ];
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    // centerPadding: "-160px",
    slidesToScroll: 5,
    slidesToShow: 5,
    speed: 500,
    rows: 2,
    // slidesPerRow: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="collection">
      <h1>The Collection</h1>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div className="each-item">
            <img key={index} src={item} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Collection;
