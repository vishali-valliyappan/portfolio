import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Service = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      {/* <h4 className="text-center mb-2 text-lg font-Ovo">What I Offer</h4> */}
      <h2 className="text-center text-5xl font-Ovo">My Skills</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I'm a Frontend Developer from Karaikudi, specializing in React.js, with
        a focus on building high-performance, responsive, and user-friendly web
        applications.
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] md:grid-cols-3 gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff]  hover:-translate-y-1 duration-500 "
          >
            {/* <Image src={icon} alt="icon" className="w-10" /> */}
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
            {/* <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read More{" "}
              <Image src={assets.right_arrow} alt="" className="w-4" />
            </a> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
