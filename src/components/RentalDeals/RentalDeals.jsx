import React from "react";
import CustomTitle from "../CustomTitle/CustomTitle";
import PopularCars from "../PopularCars/PopularCars";
import Cars1 from "../../assets/images/cars_1.png";
import Cars2 from "../../assets/images/cars_2.png";
import Cars3 from "../../assets/images/cars_3.png";
import Cars4 from "../../assets/images/cars_4.png";
import { GoArrowRight } from "react-icons/go";

function RentalDeals() {
  const carsData = [
    {
      cars: Cars1,
      brand: "Jaguar XE L P250",
      stars: "4.8",
      review: "2.436",
      passagers: "4",
      vitesse: "Auto",
      doors: "4",
      conditioning: "Air Conditioning",
      price: "1.800",
    },
    {
      cars: Cars2,
      brand: "Audi R8",
      stars: "4.6",
      review: "1.936",
      passagers: "2",
      vitesse: "Auto",
      doors: "2",
      conditioning: "Air conditioning",
      price: "2.100",
    },
    {
      cars: Cars3,
      brand: "Jaguar XE L P250",
      stars: "4.8",
      review: "2.436",
      passagers: "4",
      vitesse: "Manual",
      doors: "4",
      conditioning: "Air Conditioning",
      price: "1.600",
    },
    {
      cars: Cars4,
      brand: "Lamborghini Huracan",
      stars: "4.3",
      review: "2.236",
      passagers: "2",
      vitesse: "Auto",
      doors: "2",
      conditioning: "Air Conditioning",
      price: "2.300",
    },
  ];

  return (
    <div
      id="deals"
      className="w-full container mx-auto gap-x-5 gap-y-10  flex flex-col justify-center items-center my-10"
    >
      <CustomTitle title="POPULAR RENTAL DEALS" />
      <h1
        data-aos="fade-up"
        data-aos-duration="500"
        className="text-3xl font-semibold py-10 tracking-widest text-center "
      >
        Most popular cars rental deals
      </h1>
      <div className="w-full grid sm:grid-cols-2 xl:grid-cols-4 place-items-center ">
        {carsData.map((cars, index) => (
          <div
            data-aos={index < 2 ? "zoom-in-right" : "zoom-in-left"}
            data-aos-duration="500"
          >
            <PopularCars key={index} {...cars} />
          </div>
        ))}
      </div>
      <button
        className="w-[216px] h-[48px] flex justify-center gap-x-4 items-center  rounded-lg px-5 py-3 border transition-all duration-300 hover:scale-105"
      >
        <div className="">Show all vehicles</div>
        <GoArrowRight className="text-black text-[20px]" color="black" />
      </button>
    </div>
  );
}

export default RentalDeals;
