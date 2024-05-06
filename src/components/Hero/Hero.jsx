import React from "react";
import HeroCars from "../../assets/images/hero_cars.png";
import CustomUnderline from "../../assets/images/custom_underline.png";
import Filter from "../Filter/Filter";
import CustomButton from "../CustomButton/CustomButton";
import logoApple from "../../assets/images/logo_apple.png";
import logoPlaystore from "../../assets/images/logo_playstore.png";

function Hero() {
  return (
    <div id="become"  className=" h-full pl-2 lg:pl-[2%] xl:pl-[8%] flex flex-col items-start 
    pt-[40%] pb-[15%] 
    sm:pt-[30%] sm:pb-[5%]  
    md:pt-[25%] 
    xl:pt-[20%] 
    2xl:pt-[15%]
    ">
      <div className="w-full h-full gap-10  grid grid-cols-1 lg:grid-cols-3 ">
        <div className="h-[75%]  flex flex-col justify-center items-center lg:items-start order-2 lg:order-1">
          <div className="text-2xl md:text-5xl w-full md:w-[450px] flex flex-col items-center lg:items-start justify-start   gap-10 lg:text-start text-center">
          <div data-aos="zoom-out" data-aos-duration="500" >
              <p className="font-semibold">Find, book and </p>{" "}
              <div className="flex gap-2">
                <p className="font-semibold">rent a car</p>{" "}
                <div className=" flex-col gap-2 relative">
                  <span className="text-primary">Easily</span>
                  <img
                    src={CustomUnderline}
                    className="w-[130px]  absolute -bottom-4 "
                  />
                </div>
              </div>
            </div>
            <p className="text-xl " data-aos="zoom-out" data-aos-duration="500">
              Get a car wherever and whenever you need it with your IOS and
              Android device.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 ">
              <CustomButton
                logo={logoPlaystore}
                name="Google Play"
                title="Get in on"
              />
              <CustomButton
                logo={logoApple}
                name="App Store"
                title="Download on the"
              />
            </div>
          </div>
        </div>
        <div 
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-once="true"
        className="flex-1 lg:col-span-2 self-center order-1 lg:order-2 ">
          <div className="flex justify-end items-center">
            <img
              src={HeroCars}
              className="object-fill object-center max-w-[300px] sm:max-w-[400px] md:max-xl:max-w-[500px] xl:max-2xl:min-w-[650px] 2xl:min-w-[700px]  "
              alt="cars"
            />
          </div>
        </div>
      </div>
      <Filter />
    </div>
  );
}
export default Hero;
