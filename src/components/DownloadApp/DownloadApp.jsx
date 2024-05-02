import React from "react";
import CustomTitle from "../CustomTitle/CustomTitle";
import logoApple from "../../assets/images/logo_apple.png";
import logoPlaystore from "../../assets/images/logo_playstore.png";
import CustomButton from "../CustomButton/CustomButton";
import RentCarsApp from "../../assets/images/rentCarsApp.png";
import ReasonBg from "../../assets/images/ReasonBg.png";

function DownloadApp() {
  const bgImage = {
    backgroundImage: `url(${ReasonBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "left",
  };
  return (
    <div
      className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-14  pl-2 lg:pl-[2%] xl:pl-[8%]"
      style={bgImage}
    >
      <div className="w-full h-full space-y-5 md:min-w-[300px] text-center flex flex-col justify-center max-lg:items-center">
        <CustomTitle title="DOWNLOAD" />
        <div className=" text-2xl md:text-5xl w-full md:w-[480px] flex flex-col items-center lg:items-start justify-start gap-10 lg:text-start text-center">
          <div data-aos="zoom-out" data-aos-duration="1200" >
            <p className="font-semibold">Download Rentcars </p>{" "}
            <div className="flex gap-2">
              <p className="font-semibold">App for</p>{" "}
              <span className="text-primary font-bold" data-aos="flip-left" data-aos-duration="3000">FREE</span>
            </div>
          </div>
          <p className="text-xl" data-aos="zoom-out" data-aos-duration="1200">
            For faster, easier booking and exclusive deals.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
      <div data-aos="fade-up" data-aos-duration="1200" className="flex- flex justify-center items-end h-[200px] md:h-[300px] lg:h-[400px] ">
        <img
          src={RentCarsApp}
          className="object-contain object-center  h-full "
          alt="cars"
        />
      </div>
    </div>
  );
}

export default DownloadApp;
