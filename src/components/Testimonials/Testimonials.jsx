import React from "react";
import Slider from "react-slick";
import CustomTitle from "../CustomTitle/CustomTitle";
import Review from "../Review/Review";
import Comma from "../../assets/images/comma.png";
import Client1 from "../../assets/images/client_1.png";
import Client2 from "../../assets/images/client_2.jpg";
import Client3 from "../../assets/images/client_3.jpg";
import Client4 from "../../assets/images/client_4.jpg";

function Testimonials() {
  const blogData = [
    {
      stars: 4.8,
      description:
        "I feel very secure when using caretall's services. Your customercare team is very enthusiastic and the driver is always on time.",
      author: "Charlie Johnson",
      image: Client1,
      location: "From New York, US",
    },
    {
      stars: 3.6,
      description:
        "Utilizing Caretall's services instills in me a profound sense of security, knowing that their customer care team is exceptionally dedicated and their drivers are consistently punctual.",
      author: "Sylvio Scofild",
      image: Client2,
      location: "From Madagascar",
    },
    {
      stars: 2.7,
      description:
        "Caretall's services provide me with a reassuring sense of safety; their customer care team exudes enthusiasm, and their drivers maintain impeccable punctuality.",
      author: "Chun Xiang",
      image: Client3,
      location: "From China",
    },
    {
      stars: 4.3,
      description:
        "The reliability of Caretall's services bolsters my confidence; their enthusiastic customer care team and unfailingly punctual drivers ensure a seamless experience every time.",
      author: "Sylvio Scofild",
      image: Client4,
      location: "From India",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.7,
    slidesToScroll: 1,
    initialSlide: 0,
    mobileFirst: true,
    lazyLoad: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1590,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1355,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 0.9,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-primary/5  w-full h-[800px] my-[20%] sm:my-[15%] md:my-[12%] lg:my-[8%] py-10 flex flex-col  overflow-hidden">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="flex flex-col bg-red-500s justify-center items-center relative">
          <CustomTitle title="Testimonials" />
          <h1
            data-aos="fade-up"
            data-aos-duration="1500"
            className="text-xl lg:text-2xl font-semibold py-10 tracking-widest text-center lg:text-start"
          >
            What peole say about us ?
          </h1>
          <div className="w-[225px] h-[250px] max-lg:hidden absolute -left-[250px] lg:-left-[300px] top-[4px] z-[-1]">
            <img
              src={Comma}
              className="w-full  h-full object-contain object-center bg-blue-200s p-1"
            />
          </div>
          <div className="w-[225px] h-[250px] max-lg:hidden absolute -right-[250px] lg:-right-[300px] -top-[125px] scale-x-[-1]  z-[-1] ">
            <img
              src={Comma}
              className="w-full h-full object-contain object-center bg-blue-200s p-1"
            />
          </div>
        </div>
      </div>
      <div className="w-full mx-autod py-10 ">
        <Slider {...settings}>
          {blogData.map((item, index) => (
            <Review key={index} {...item} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;
