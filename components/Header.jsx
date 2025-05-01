import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-cneter justify-center gap-4">
      <div className="flex justify-center">
        {/* <Image
          src={assets.profile_img}
          alt=""
          className="rounded-full w-32 font-Ovo"
        /> */}
      </div>
      <div className="flex justify-center">
        {" "}
        <h3 className="flex items-end gap-2 text-3xl md:text-4xl mb-3 md:mt-20">
          Hi! I'm Vishali
          <Image src={assets.hand_icon} alt="" className=" w-6" />
        </h3>
      </div>

      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Frontend web developer
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        I am a passionate Frontend Developer with expertise in React.js,
        crafting high-performance, responsive, and user- friendly web
        applications.{" "}
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 justify-center">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Contact me{" "}
          <Image src={assets.right_arrow_white} alt="" className=" w-4 " />
        </a>
        <a
          href="/vishali.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          My resume
          <Image src={assets.download_icon} alt="" className=" w-4 " />
        </a>
      </div>
    </div>
  );
};

export default Header;
