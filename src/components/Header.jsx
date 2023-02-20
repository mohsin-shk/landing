import React, { useState } from "react";
import { logo_link, logo_white_link } from "./../utils/Image_Links";
import { useInView } from "react-intersection-observer";
import { mini_menu_icon } from "../utils/svgs/svgs";
import MiniNavMenu from "./MiniNavMenu";

const navlinks = ["Features", "Pricing", "University", "Blog", "Discover"];

function Header() {
  const [ref, inView] = useInView({
    threshold: 0,
  });
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="items-center justify-center flex flex-col w-full ">
        {/* logo */}
        <img
          alt="logo"
          src={logo_link}
          className="w-[2000px] px-6 py-4 mb-6 lg:flex hidden "
        />
        {/* this is just works as an anchor for Intersection observer */}
        <div ref={ref} className="w-full py-1 lg:flex hidden"></div>
      </div>

      {/* navbar */}
      <div
        className={` lg:py-0 py-2 items-center justify-between
       navbar flex-col-1 lg:flex w-full border-y-2 z-50
       border-black ${open ? "bg-black" : "bg-white"}`}
      >
        {/* navlinks */}
        <div className="flex lg:hidden">
          {!inView && (
            <img
              alt="logo"
              src={open ? logo_white_link : logo_link}
              className="w-[200px] px-6 py-4"
            />
          )}
          <div
            onClick={() => setOpen(!open)}
            className={`w-full cursor-pointer flex
             lg:hidden px-4 items-center justify-end ${
               open ? "text-white" : "text-black"
             } `}
          >
            {mini_menu_icon}
          </div>
        </div>
        {open && <MiniNavMenu />}
        {!inView && (
          <img
            alt="logo"
            src={logo_link}
            className="w-[200px] px-6 py-4 hidden lg:flex"
          />
        )}
        <div className="items-start justify-start space-x-10 lg:flex hidden pl-12 ">
          {navlinks.map((link) => (
            <p key={link} className="text-lg navlink cursor-pointer">
              {link}
            </p>
          ))}
        </div>
        <div className=" items-center justify-center lg:flex hidden">
          <button className="nav-btn">Login</button>
          <button className="nav-btn border-none bg-black text-gray-100 hover:text-black ">
            Start Selling
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
