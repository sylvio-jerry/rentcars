import React from "react";
import CustomTitle from "../CustomTitle/CustomTitle";
import LocationTrick from "../../assets/images/location-tick.png";
import Calendar from "../../assets/images/calendar.png";
import Car from "../../assets/images/car.png";
import WorkingBox from "../WorkingBox/WorkingBox";
import CarsBrand from "../CarsBrand/CarsBrand";

function WorkingStep() {
  const workingBoxData = [
    {
      icon: LocationTrick,
      title: "Choose location",
      description: "Choose and find your best car",
    },
    {
      icon: Calendar,
      title: "Pick-up date",
      description: "Select your pick up date and time to book your car ",
    },
    {
      icon: Car,
      title: "Book your car",
      description: "Book your car and we will deliver it directly to you",
    },
  ];

  return (
    <div id="working" className="my-5 space-y-[8%]">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <CustomTitle title="HOW IT WORKS" />
        <h1
          data-aos="fade-up"
          data-aos-duration="1500"
          className="text-3xl font-semibold py-10 tracking-widest text-center"
        >
          Rent with following 3 working steps
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5  p-2 container place-items-center">
          {workingBoxData.map((item, index) => (
            <WorkingBox
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
      <CarsBrand />
    </div>
  );
}

export default WorkingStep;
