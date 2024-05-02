import React from "react";

function WorkingBox({ icon, title, description }) {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="500"
      className="flex flex-col gap-y-5 cursor-pointer justify-center items-center max-w-[165px] text-center  "
    >
      <div className="w-[112px] h-[112px] bg-primary/30 flex justify-center items-center rounded-xl">
        <img src={icon} className="w-[48px] h-[48px]" />
      </div>
      <h1 className="font-semibold">{title}</h1>
      <p className="text-sm text-black/50">{description}</p>
    </div>
  );
}

export default WorkingBox;
