import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { MdDateRange } from "react-icons/md";

function Filter() {
  return (
    <div
      data-aos="flip-up"
      data-aos-duration="500"
      className="bg-white w-full py-[10%] sm:py-[8%] md:py-[6%] lg:py-[0%]  lg:pr-[2%] xl:pr-[8%] "
    >
      <form className="bg-white lg:shadow-xl px-5 py-5 rounded-xl grid grid-cols-1 lg:grid-cols-4  gap-8">
        <div className="flex items-center w-full px-[20px] gap-x-3  max-lg:shadow-md min-w-[200px] lg:border-r border-r-black/20 ">
          <SlLocationPin className="text-2xl" />
          <div>
            <p className="">Location</p>
            <input
              type="text"
              className="text-xs outline-none "
              placeholder="Search your location"
              required
            />
          </div>
        </div>
        <div className="flex items-center w-full px-[20px] gap-x-3   max-lg:shadow-md min-w-[200px] lg:border-r border-r-black/20  ">
          <MdDateRange className="text-2xl" />
          <div>
            <p className="">Pickup date</p>
            <input
              type="datetime-local"
              className="text-xs outline-none  bg-transparent"
              required
            />
          </div>
        </div>
        <div className="flex items-center w-full px-[20px] gap-x-3 max-lg:shadow-md  min-w-[200px]   ">
          <MdDateRange className="text-2xl" />
          <div>
            <p className="">Return date</p>
            <input
              type="datetime-local"
              className="text-xs outline-none bg-transparent"
              required
            />
          </div>
        </div>
        <div className="flex items-center w-full  ">
          <button className="bg-primary hover:scale-105 duration-300 text-white py-2 px-4 rounded-xl w-[160px] h-[48px]">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default Filter;
