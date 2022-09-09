import React from "react";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Image from "next/Image";


const container = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.25,
    },
  },
  hidden: {
    opacity: 0,
  },
};

function Appear(props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={container}
      viewport={{ once: true }}
      className="flex-col max-w-xs pb-10 mx-auto basis-[1000px]"
    >
      <div className="max-w-xs bg-nord-orange rounded-lg mx-4 shadow-lg pb-[1px]">
        <div className=" p-2">
          <Image
            src={props.img}
            alt="Picture of Kevin Kuttner"
            className="[border-radius:6px_6px_6px_0px]"
            width={768}
            height={1024}
          />
        </div>
        <div className="text-2xl lg:text-xl md:text-base text-center font-aldrich font-semibold text-nord-dark-foot p-2">
          {props.name}
        </div>
        <div className="bg-nord-dark-foot [border-radius:0px_5px_5px_5px] m-2">
          <div className="font-inter text-base text-nord-white p-2 text-center">
            {props.job}
          </div>
          <div className="block sm:hidden font-inter text-base text-nord-white p-2 text-center">
            {props.bio}
          </div>
        </div>
      </div>
      <div className="">
        <div className="hidden sm:block font-aldrich text-thin text-nord-white p-2 text-center">
          {props.bio}
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <div className="flex-col bg-[#374149]">
      <div className="w-full h-[45vh]  bg-[url('/AboutBackdrop.png')] [background-size:1008px_756px] bg-top bg-no-repeat md:bg-cover md:bg-center flex bg-fixed items-end">
        <div className="xl:container xl:mx-auto ml-2">
          <div className="flex drop-shadow-xl font-extrabold text-left font-aldrich text-5xl lg:text-7xl text-nord-dark-foot">
            SPOKANITE
          </div>
        </div>
      </div>

      <div className="w-full h-auto bg-[url('/AboutHead.png')] bg-cover bg-center">
        <div className=" xl:container xl:mx-auto mx-3 mt-2 drop-shadow-xl font-normal text-left font-aldrich text-base md:text-xl text-nord-secondary">
          Spo · kan · nite | A person who is a native or resident of Spokane,
          Washington
        </div>

        <div className="mx-auto pt-16 pb-28 font-aldrich font-semibold text-5xl lg:text-6xl text-center text-nord-orange">
          ABOUT US
        </div>
        <div className="flex md:mx-auto">
          <div className="flex-grow h-[2px] bg-nord-secondary w-full"></div>
        </div>
      </div>

      <div className="mt-8 mb-8">
        <div className="text-center font-aldrich text-4xl w-auto text-nord-orange ">
          OUR STORY
        </div>
        <div className="flex mx-4 md:mx-auto xl:container my-5 md:my-10">
          <div className="flex-grow h-[3px] bg-nord-orange w-full"></div>
        </div>
        <div className="flex justify-center items-center sm:mx-auto md:px-4 container xl:max-w-6xl">
          <div className="font-inter text-lg font-semibold text-nord-secondary max-w-[75%] md:max-w-[50%] text-center md:pr-4">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div className="hidden md:block md:pl-4">
            <Image
              src="/Team.png"
              alt="Picture of Spokanite Logo"
              className="[border-radius:5px_5px_5px_5px]"
              width={1000}
              height={891}
              priority
            />
          </div>
        </div>
        <div className="flex md:mx-auto my-5 md:my-10">
          <div className="flex-grow h-[2px] bg-nord-secondary w-full"></div>
        </div>
      </div>
      <Header2 />
      <div className="text-center font-aldrich text-4xl text-nord-orange ">
        MEET THE TEAM
      </div>
      <div className="flex mx-4 md:mx-auto xl:container my-5 md:my-10">
        <div className="flex-grow h-[3px] bg-nord-orange w-full"></div>
      </div>

      <div className="md:flex justify-center mx-4">
        <div className="sm:flex">
          <Appear
            name="TIM KASSA"
            job="Owner/BUSINESS MASTER"
            bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            img="/tim.jpg"
          />
          <Appear
            name="KEVIN KUTTNER"
            job="Owner/Brewing Wizard"
            bio="amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            img="/Kev.jpg"
          />
        </div>
        <div className="sm:flex">
          <Appear
            name="SCOTTIE SCHLOSSER"
            job="Owner/Brewing Wizard"
            bio="Lorem ipsum dolor sit amet, consectetur aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            img="/Scott.jpg"
          />
          <Appear
            name="JARROD JUDD"
            job="Brewer/Jack of All Trasdes"
            bio="Lorem ipsum dolor sit amet, consectetur incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            img="/judd.jpg"
          />
        </div>
      </div>
      <div className="w-full h-[50vh] bg-[url('/Awards.png')] bg-cover bg-center font-medium text-lg">
        <div className="font-aldrich text-center text-5xl text-nord-orange drop-shadow-lg">
          AWARDS
        </div>
        <div className="sm:flex justify-center items-center h-[calc(50vh-96px)] table-cell align-middle w-[100vw]">
          <div className=" text-center">
            <div className=""> AWARD1 </div>
            <div className=""> AWARD2 </div>
          </div>
          <div className="text-center">
            <div className=""> AWARD3 </div>
            <div className=""> AWARD4 </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
