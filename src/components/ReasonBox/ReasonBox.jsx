import React from "react";

function ReasonBox({ icon, title, description }) {
  return (
    <div
      data-aos="fade-down-left"
      data-aos-duration="500"
      className="flex gap-x-5 w-full lg:w-[410px] items-center"
    >
      <div className="p-4 bg-primary/30 flex justify-center items-center rounded-xl">
        <img src={icon} alt={title} className="min-w-[24px] min-h-[24px] " />
      </div>
      <div className=" lg:w-[322px] h-[73px]">
        <h1 className="text-sm lg:text-lg font-semibold">{title}</h1>
        <p className="text-sm text-black/50">{description}</p>
      </div>
    </div>
  );
}

export default ReasonBox;
