import React from "react";
import { arrow } from "../utils/svgs/svgs";
import { footerLinks } from "./../utils/FooterLinks";

function Footer() {
  return (
    <div className="w-full items-center justify-center flex py-36  px-6 bg-black">
      {/* container */}
      <div className="lg:flex flex-col-1 w-full  items-center justify-center space-y-12 lg:space-y-0 lg:space-x-24">
        {/* left */}
        <div className="w-full items-start justify-start flex flex-col px-12 space-y-12">
          <h1 className="2xl:text-4xl text-3xl text-white">
            Subscribe to get tips and tactics to grow the way you want.
          </h1>
          <div className="flex items-center justify-center w-full space-x-1">
            <input
              type="text"
              className="bg-white py-4 px-2 rounded-l-md w-full outline-none "
            />
            <div className="bg-[#ff90e8] w-[50px] flex items-center justify-center py-4 rounded-r-md cursor-pointer ">
              <div className="h-6 w-6 ">{arrow}</div>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="w-full py-2 px-12">
          <div className="w-full grid grid-cols-2 gap-y-4">
            {footerLinks.map(({ title, link, id }) => (
              <a
                className="text-white font-medium hover:text-[#ff90e8]"
                key={id}
                href={link}
              >
                {title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
