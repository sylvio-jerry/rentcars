import React from "react";
import logo from "../../assets/images/logo.png";
import { SlLocationPin } from "react-icons/sl";
import { IoCallOutline } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { AiOutlineFacebook } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";

function Footer() {
  return (
    <div className="w-full space-y-10 bg-secondary pt-10 sm:pt-[5%] md:pt-[3%] text-white/75 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16">
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          className="space-y-5"
        >
          <div>
            <img src={logo} className="h-[25px] max-w-[150px] object-contain" />
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex gap-x-2">
              <SlLocationPin className="text-xl" color="white" />
              <p>25566 Hc 1, Glenallen, Alaska, 99588, USA</p>
            </div>
            <div className="flex gap-x-2">
              <IoCallOutline className="text-xl" color="white" />
              <p>+603 4784 273 12</p>
            </div>
            <div className="flex gap-x-2">
              <IoMail className="text-xl" color="white" />
              <p>rentcars@gmail.com</p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="500"
          className="space-y-5"
        >
          <h1 className="font-semibold text-white ">Our Pruduct</h1>
          <div className="space-y-2 text-sm">
            <p>Career</p>
            <p>Car</p>
            <p>Packages</p>
            <p>Features</p>
            <p>Priceline</p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          className="space-y-5"
        >
          <h1 className="font-semibold text-white">Resources</h1>
          <div className="space-y-2 text-sm">
            <p>Download</p>
            <p>Help Centre</p>
            <p>Guides</p>
            <p>Partner Network</p>
            <p>Cruises</p>
            <p>Developer</p>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="500"
          className="space-y-5"
        >
          <h1 className="font-semibold text-white">About Rentcars</h1>
          <div className="space-y-2 text-sm">
            <p>Why choose us</p>
            <p>Our Story</p>
            <p>Investor Relations</p>
            <p>Press Center</p>
            <p>Advertise</p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          className="space-y-5"
        >
          <h1 className="font-semibold text-white">Follow Us</h1>
          <div className="flex gap-x-2">
            <SlLocationPin className="text-xl" color="white" />
            <AiOutlineFacebook className="text-xl" color="white" />
            <IoLogoInstagram className="text-xl" color="white" />
          </div>
        </div>
      </div>
      <div
        className="bg-red-500d container mx-auto flex flex-col justify-center items-center text-center text-[12px] py-5 border-t border-white/20 "
      >
        <p className="">© 2024 Rentcars. All rights reserved</p>
        <p>
          Made with ❤️ by{" "}
          <a href="https://github.com/ronydevs">Sylvio jerry Rajaonarivony</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
