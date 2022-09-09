import React from "react";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";
import Accordian from "../components/Accordian";
import { motion, useAnimation } from "framer-motion";
import Image from "next/Image";

export default function Faq() {
  return (
    <div className="flex-col bg-[#374149]">
      <Header2 />
      <div className="w-full h-[45vh]  bg-[url('/FAQ.png')] [background-size:1008px_756px] bg-top bg-no-repeat md:bg-cover md:bg-center flex bg-fixed items-end"></div>
      <div className="w-full h-auto bg-[url('/AboutHead.png')] bg-cover bg-center">
        <div className="mx-auto pt-20 pb-20 font-aldrich font-semibold text-5xl lg:text-6xl text-center text-nord-orange">
          FAQs
        </div>
        <div className="flex md:mx-auto">
          <div className="flex-grow h-[2px] bg-nord-secondary w-full"></div>
        </div>
      </div>
      <div className="py-20 bg-nord-secondary">
        <Accordian />
      </div>
      <div className="w-full h-[50vh] bg-[url('/Map.png')] bg-cover bg-center flex justify-center items-center border-t-4 border-nord-dark-foot"></div>
      <Footer />
    </div>
  );
}
