import React from "react";
import Navbar from "../Navbar";
import heroDesign from "../../assets/images/Hero_bg.png";
import Hero from "../Hero/Hero";

function MainHero() {
  const bgImage = {
    backgroundImage: `url(${heroDesign})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "top right",
  };
  return (
    <div className="" style={bgImage}>
      <Navbar />
      <Hero />
    </div>
  );
}

export default MainHero;
