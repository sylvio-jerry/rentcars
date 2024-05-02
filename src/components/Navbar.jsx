import React, { useEffect, useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import logo from "../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { GrClose } from "react-icons/gr";

function Navbar() {
  const Menu = [
    {
      id: 1,
      name: "Become a renter",
      link: "become",
    },
    {
      id: 2,
      name: "How it work",
      link: "working",
    },
    {
      id: 3,
      name: "Why choose us",
      link: "reason",
    },
    {
      id: 4,
      name: "Rental deals",
      link: "deals",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  return (
    <header className="relative w-full">
      <div className="fixed top-0 w-full py-4 lg:px-[2%] xl:px-[8%] bg-white shadow-md z-[10]">
        <div className="w-full flex justify-between items-center cursor-pointer">
          <LinkScroll to="#" spy={true} smooth={true} offset={0} duration={500}>
            <img
              src={logo}
              className="pl-2 h-[20px] sm:h-[30px] max-w-[150px] sm:object-cover object-contain"
            />
          </LinkScroll>
          <ul
            className={`lg:flex items-center lg:gap-4 
            ${
              isOpen
                ? "bg-white py-10 shadow-xl z-[10] flex flex-col items-start absolute top-[60px] w-full"
                : "hidden"
            }  `}
          >
            {Menu.map((menu) => (
              <li
                key={menu.id}
                className=" hover:text-primary inline-block py-4 px-4 cursor-pointer"
              >
                <LinkScroll
                  to={menu.link}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={closeMenu}
                >
                  {menu.name}
                </LinkScroll>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-5 pr-2">
            <div>
              <button className="hover:text-primary">Sign in</button>
            </div>
            <button className="bg-primary hover:scale-105 duration-300 text-white py-2 px-4 rounded-xl flex items-center gap-3">
              Sign up
            </button>
            <div
              className="lg:hidden cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <GrClose className="text-3xl" />
              ) : (
                <CiMenuBurger className="text-3xl" />
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
