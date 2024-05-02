import React from "react";
import CustomTitle from "../CustomTitle/CustomTitle";
import ReasonCars from "../../assets/images/ReasonCars.png";
import ReasonBg from "../../assets/images/ReasonBg.png";
import IconWallet from "../../assets/images/icon_wallet.png";
import IconUser from "../../assets/images/icon_user_tick.png";
import IconMessage from "../../assets/images/icon_message.png";
import IconVector from "../../assets/images/icon_vector.png";
import ReasonBox from "../ReasonBox/ReasonBox";

function Reason() {
  const bgImage = {
    backgroundImage: `url(${ReasonBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "left",
  };
  const ReasonData = [
    {
      icon: IconWallet,
      title: "Best price guaranteed",
      description:
        "Find a lower price? We’ll refund you 100% of the difference.",
    },
    {
      icon: IconUser,
      title: "Experience driver",
      description:
        "Don’t have driver? Don’t worry, we have many experienced driver for you.",
    },
    {
      icon: IconVector,
      title: "24 hour car delivery",
      description:
        "Book your car anytime and we will deliver it directly to you.",
    },
    {
      icon: IconMessage,
      title: "24/7 technical support",
      description:
        "Have a question? Contact Rentcars support any time when you have problem.",
    },
  ];

  return (
    <div
      id="reason"
      className="w-full my-[25%] sm:my-[15%] md:my-[10%] lg:md:my-[8%] 2xl:md:my-[5%]  grid grid-cols-1 lg:grid-cols-2 gap-16 min-h-[600px] lg:pr-[2%] xl:pr-[8%]"
    >
      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        className=" flex justify-start items-center"
        style={bgImage}
      >
        <img
          src={ReasonCars}
          className="object-fill object-center max-w-[300px] sm:max-w-[400px] md:max-xl:max-w-[500px] xl:max-2xl:min-w-[600px] 2xl:min-w-[700px] "
          alt="cars"
        />
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="1500"
        className=" flex flex-col items-center lg:items-end  text-start max-lg:mx-5"
      >
        <div className=" w-full flex flex-col  max-lg:items-center px-[8%]r lg:max-w-[576px] ">
          <div className="max-lg:self-center">
            <CustomTitle title="WHY CHOOSE US" />
          </div>
          <h1 className="text-xl lg:text-2xl font-semibold py-10 tracking-widest text-center lg:text-start">
            We offer the best experience with our rental deals
          </h1>
          <div className="flex flex-col max-lg:items-center gap-y-8 lg:gap-y-5">
            {ReasonData.map((item, index) => (
              <ReasonBox key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reason;
