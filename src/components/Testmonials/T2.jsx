import React from "react";
import { t2_icon2_link, t2_link } from "../../utils/Image_Links";
import { t2_icon1_link } from "./../../utils/Image_Links";

function T2() {
  return (
    <div className="py-24 px-12 items-center justify-between flex border-b-2 border-black bg-[#23A094] ">
      <div className="2xl:w-[50%] items-center justify-center flex flex-col">
        <h1 className="2xl:w-[80%] text-4xl  leading-snug">
          “Originally, I took pre-orders for my Trend Reports on Gumroad. But I
          received... exactly $0. So I changed tactics: I made half of my report
          free, and the other half paid. Today, 99% of Trends.VC revenue is
          recurring in the form of annual and quarterly subscriptions.”
        </h1>
        <h1 className="w-full pt-12 px-24 text-xl font-medium ">
          Riley sells business insights and expertise
        </h1>
      </div>
      <div className="w-[50%] items-center justify-center hidden 2xl:flex relative">
        <img
          src={t2_link}
          className="w-[600px] h-[700px] "
          alt="testmonial_1"
        />
        <img
          src={t2_icon1_link}
          className="absolute right-10 top-0 "
          alt="t2_icon1"
        />
        <img
          src={t2_icon2_link}
          className="absolute left-24 bottom-0  object-fit object-center"
          alt="t2_icon2"
        />
      </div>
    </div>
  );
}

export default T2;
