import React from "react";

function CustomTitle({ title }) {
  return (
    <div 
    data-aos="fade-up"
    data-aos-duration="1500"
    className="w-fit bg-primary/20 py-2 px-4 rounded-lg text-primary text-base font-light">
      <h1 className="">{title}</h1>
    </div>
  );
}

export default CustomTitle;
