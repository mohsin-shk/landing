import React from "react";
import { t3_icon2_link, t3_link } from "../../utils/Image_Links";
import { t3_icon1_link } from "../../utils/Image_Links";

function T3() {
  return (
    <div className="py-24 px-12 items-center justify-between flex-col-1 2xl:flex border-b-2 border-black bg-[#FF90E8] ">
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
      <div className="2xl:w-[50%] items-center justify-center hidden 2xl:flex relative">
        <img
          src={t3_link}
          className="w-[600px] h-[750px] object-fit object-center "
          alt="testmonial_1"
        />
        <img
          src={t3_icon1_link}
          className="absolute right-24 bottom-0  object-fit object-center"
          alt="t3_icon2"
        />
        <img
          src={t3_icon2_link}
          className="absolute left-48 top-0 "
          alt="t3_icon1"
        />
      </div>
    </div>
  );
}

export default T3;
