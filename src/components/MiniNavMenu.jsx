import React from "react";

function MiniNavMenu() {
  return (
    <div
      className="h-[100vh] overflow-y-hidden max-h-[100vh] 
      items-center bg-black 
    justify-center flex lg:hidden w-full z-50 "
    >
      <div
        className="w-full h-full border border-gray-500
       flex flex-col items-center justif-center py-4"
      >
        <div className=" text-white font-medium space-y-4 w-full">
          <h1 className="mini-navtitle">Login</h1>
          <h1 className="mini-navtitle border-b border-gray-500 ">
            Start Selling
          </h1>
          <h1 className="mini-navtitle py-2">Features</h1>
          <h1 className="mini-navtitle">Pricing</h1>
          <h1 className="mini-navtitle">University</h1>
          <h1 className="mini-navtitle">Blog</h1>
          <h1 className="mini-navtitle">Discover</h1>
        </div>
      </div>
    </div>
  );
}

export default MiniNavMenu;
