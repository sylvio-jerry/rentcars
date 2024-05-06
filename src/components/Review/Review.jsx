import React, { useEffect } from "react";
import { LiaStarSolid } from "react-icons/lia";

function Review({ stars, description, author, image, location }) {
  // Convertir le nombre de stars en un tableau d'étoiles pleines et vides
  const starArray = Array.from({ length: 5 }, (_, index) => (
    <LiaStarSolid
      key={index}
      className={`text-2xl ${
        index < Math.round(stars) ? "text-yellow-500" : "text-gray-400"
      }`}
    />
  ));

  return (
    <div
      data-aos="fade-right"
      data-aos-duration="500"
      className="
    flex flex-col 
    lg:flex-row
    w-[250px]
    sm:w-[300px]
    lg:w-[800px] 
    lg:h-[438px]
    h-[400px]
    shadow-xl overflow-hidden rounded-s-3xl rounded-e-3xl"
    >
      <div className="w-[100%] lg:w-[50%] lg:h-[438px] h-[50%] ">
        <img
          src={image}
          alt=""
          className="w-full h-full object-top object-cover"
        />
      </div>
      <div className="bg-white flex-1 flex flex-col justify-between py-5 px-10 max-lg:overflow-y-scroll">
        <div className="space-y-2">
          <div className="flex items-end gap-x-2">
            <h1 className="text-2xl lg:text-5xl font-bold">{stars}</h1>
            <span className="text-xl lg:text-2xl font-semibold">stars</span>
          </div>
          <div className="flex items-center">
            {starArray.map((star, index) => (
              <div key={index}>{star}</div>
            ))}
          </div>
        </div>
        <div className="max-w-[317px] my-5">
          <p>“{description}”</p>
        </div>
        <div className="max-w-[317px]">
          <h1 className="text-sm lg:text-lg font-semibold text-black/85">
            {author}
          </h1>
          <span className="text-xs lg:text-sm text-black/50">{location}</span>
        </div>
      </div>
    </div>
  );
}

export default Review;
