import React from "react";

function CustomButton({ logo, title, name }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      className="bg-black/90 flex justify-center items-center  py-2 h-12 min-w-48 rounded-xl gap-x-2 cursor-pointer duration-300 hover:scale-105"
    >
      <img src={logo} className="w-[30px] h-[30px] object-contain" />
      <div>
        <p className="text-white/70 text-sm">{title}</p>
        <p className="text-white/90 text-base">{name}</p>
      </div>
    </div>
  );
}

export default CustomButton;
