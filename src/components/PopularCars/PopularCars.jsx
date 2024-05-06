import React from "react";
import { LiaStarSolid } from "react-icons/lia";
import IconPassagers from "../../assets/images/icon_user.png";
import IconConditioning from "../../assets/images/icon_air_conditioning.png";
import IconDoors from "../../assets/images/icon_doors.png";
import IconVitesse from "../../assets/images/icon_vitesse.png";
import { GoArrowRight } from "react-icons/go";

function PopularCars({
  cars,
  brand,
  stars,
  review,
  passagers,
  vitesse,
  conditioning,
  doors,
  price,
}) {
  return (
    <div className="shadow-xl h-[400px] w-[256px] p-4 my-10 transition-all duration-300 hover:scale-105 rounded-2xl cursor-pointer flex flex-col justify-between items-center ">
      <div className="hover:scale-110 transition-all hover:skew-x-2 duration-500">
        <img
          src={cars}
          alt={brand}
          className="object-contain min-h-[104px] min-w-[208px]"
        />
      </div>
      <div className=" flex flex-col justify-between gap-y-5">
        <div className="space-y-5">
          <div className=" space-y-5 ">
            <div className="space-y-2">
              <h1 className="text-sm lg:text-base font-semibold">
                {brand || ""}
              </h1>
              <div className="flex gap-x-2">
                <LiaStarSolid className="text-yellow-500 text-md" />
                <div className="flex gap-x-2">
                  <p className="text-sm">{stars || ""}</p>
                  <p className="text-sm text-black/50">{`(${
                    review || ""
                  } reviews)`}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between w-full  gap-x-3 text-xs ">
              {/* firsts stack */}
              <div className="space-y-2">
                <div className="flex gap-x-2">
                  <img
                    src={IconPassagers}
                    alt=""
                    className="object-fill h-[20px] w-[20px]"
                  />
                  <span>{`${passagers || ""} Passagers`}</span>
                </div>
                <div className="flex gap-x-2">
                  <img
                    src={IconConditioning}
                    alt=""
                    className="object-fill h-[20px] w-[20px]"
                  />
                  <span>{conditioning}</span>
                </div>
              </div>
              {/* second stack */}
              <div className="space-y-2">
                <div className="flex gap-x-2">
                  <img
                    src={IconVitesse}
                    alt=""
                    className="object-fill h-[20px] w-[20px]"
                  />
                  <span>{vitesse}</span>
                </div>
                <div className="flex gap-x-2">
                  <img
                    src={IconDoors}
                    alt=""
                    className="object-fill h-[20px] w-[20px]"
                  />
                  <span>{`${doors || ""} Doors`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* price */}
        <div className="w-full flex justify-between text-sm">
          <p>Price</p>
          <p>
            <span className="font-bold text-sm">{`$ ${price}`}</span> /day
          </p>
        </div>
      </div>
      <button className="w-full flex justify-center gap-x-4 items-center bg-primary  rounded-lg px-5 py-3 text-white">
        <div className="">Rent Now</div>
        <GoArrowRight className="text-black text-[20px]" color="white" />
      </button>
    </div>
  );
}

export default PopularCars;
