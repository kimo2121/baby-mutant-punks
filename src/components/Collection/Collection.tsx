import React from "react";
import Slider from "react-slick";
import "./styles.css";
import baby4 from "../../assets/baby4.png";
import baby3 from "../../assets/baby3.png";
import baby2 from "../../assets/baby2.png";
import baby1 from "../../assets/baby1.png";

const Collection = () => {
  const data = [
    baby4,
    baby2,
    baby3,
    baby1,
    baby4,
    baby2,
    baby3,
    baby1,
    baby4,
    baby2,
    baby3,
    baby1,
    baby4,
    baby2,
    baby3,
    baby1,
    baby4,
    baby2,
    baby3,
    baby1,
    baby4,
    baby2,
    baby3,
    baby1,
  ];
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    // centerPadding: "-160px",
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
