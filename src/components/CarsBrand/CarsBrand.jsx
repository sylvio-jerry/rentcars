import React from "react";
import Slider from "react-slick";
import brand_1 from "../../assets/images/brand_1.png";
import brand_2 from "../../assets/images/brand_2.png";
import brand_3 from "../../assets/images/brand_3.png";
import brand_4 from "../../assets/images/brand_4.png";
import brand_5 from "../../assets/images/brand_5.png";
import brand_6 from "../../assets/images/brand_6.png";

function CarsBrand() {
  const carsBrand = [
    {
      id: 1,
      img: brand_1,
    },
    {
      id: 2,
      img: brand_2,
    },
    {
      id: 3,
      img: brand_3,
    },
    {
      id: 4,
      img: brand_4,
    },
    {
      id: 5,
      img: brand_5,
    },
    {
      id: 6,
      img: brand_6,
    },
  ];

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    initialSlide: 0,
    mobileFirst: true,
    lazyLoad: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1590,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
      <div className="container mx-auto py-[15%] sm:py-[8%] md:py-[5%] bg-red-500x ">
        <Slider {...settings}>
          {carsBrand.map(({ id, img }) => (
            <img
              key={id}
              src={img}
              className="h-[66px]  object-contain w-[200px]"
            />
          ))}
        </Slider>
      </div>
  );
}

export default CarsBrand;
