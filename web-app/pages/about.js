import React, { useEffect } from "react";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";
import Image from "next/Image";
import { motion, useAnimation } from "framer-motion";

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

const title = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "just",
      bounce: 1,
      duration: 1,
    },
  },
  hidden: {
    x: -250,
    opacity: 0,
  },
};

const verticle = {
  visible: {
    height: "auto",
    transition: {
      type: "spring",
      duration: 1.5,
    },
  },
  hidden: {
    height: 0,
  },
};

const position = {
  visible: {
    opacity: 1,
    transition: {
      type: "just",
      duration: 1.5,
    },
  },
  hidden: {
    opacity: 0,
  },
};

function Appear(props) {
  const titleStyle = `flex justify-end pt-2 mr-4 sm:mr-0 font-aldrich text-2xl lg:text-3xl sm:ml-0 text-[#2b3339]`;
  const jobStyle = `flex justify-end pt-2 mr-4 sm:mr-4 sm:justify-center font-aldrich text-lg sm:ml-4 sm:mt-1 text-[#2b3339]`;
  const lineStyle = `hidden sm:block order-2 [border-left:2px_solid_#2b3339] text-nord-dark-gray h-auto justify-center text-center`;
  const bioStyle = `text-left font-inter text-lg sm:order-3 [flex-basis:24rem] mx-6 pb-6 sm:py-8 text-[#2b3339]`;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={container}
      viewport={{ once: true }}
    >
      <div className="sm:flex w-full sm:justify-end md:ml-10 md:justify-center">
        <motion.div variants={title} className={titleStyle}>
          {props.name}
        </motion.div>
        <motion.div variants={position} className={jobStyle}>
          {props.job}
        </motion.div>
      </div>
      <div className="sm:flex justify-center w-auto flex-shrink min-w-0 pb-32 pt-4 sm:pb-40 sm:pt-10">
        <motion.div variants={verticle} className={lineStyle}></motion.div>
        <motion.p variants={position} className={bioStyle}>
          {props.bio}
        </motion.p>
        <motion.div
          variants={position}
          className="mx-4 sm:mr-6 sm:order-1 sm:py-8 text-center"
        >
          <Image
            src={props.img}
            alt="Picture of Tim Kassa"
            width={348}
            height={512}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <div className="flex-col bg-[#374149]">
      <div className="w-full h-[55vh] bg-[url('/heroTemp.jpg')] bg-cover bg-center flex justify-center items-center"></div>
      <Header2 />
      <p className="h-1/5">.</p>
      <p className="my-28">.</p>
      <p className="my-28">.</p>
      <p className="my-28">.</p>
      <p className="my-28">.</p>
      <div className="bg-[#374149] h-auto w-full"></div>
      <div className="flex absolute z-10 mx-auto w-full">
        <div className=" h-[40px] w-[5%] right-0 bg-[#374149]"></div>
        <div className="w-0 h-0 [border-left:80px_solid_#374149] [border-bottom:40px_solid_transparent;]"></div>
        <div className=" h-[40px] w-[5%] bg-transparent"></div>
      </div>
      <div className="bg-nord-orange h-auto w-full">
        <Appear
          name="KEVIN KUTTNER"
          job="Owner/Brewing Wizard"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          img="/Kev.jpg"
          color="#eaeeea"
        />
      </div>
      <div className="flex absolute z-10 mx-auto w-full">
        <div className=" h-[40px] w-[5%] right-0 bg-nord-orange"></div>
        <div className="w-0 h-0 [border-left:80px_solid_#e69875] [border-bottom:40px_solid_transparent]"></div>
        <div className=" h-[40px] w-[5%] bg-transparent"></div>
      </div>
      <div className="bg-nord-white h-auto w-full">
        <Appear
          name="TIM KASSA"
          job="Owner/Business Master"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          img="/tim.jpg"
          color=""
        />
      </div>
      <div className="flex absolute z-10 mx-auto w-full">
        <div className=" h-[40px] w-[5%] right-0 bg-nord-white"></div>
        <div className="w-0 h-0 [border-left:80px_solid_#e5e9f0] [border-bottom:40px_solid_transparent]"></div>
        <div className=" h-[40px] w-[5%] bg-transparent"></div>
      </div>
      <div className="bg-nord-orange h-auto w-full">
        <Appear
          name="JARROD JUDD"
          job="Brewer/Jack of All Trades"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          img="/judd.jpg"
          color="#d8dee9"
        />
      </div>
      <div className="flex absolute z-10 mx-auto w-full">
        <div className=" h-[40px] w-[5%] right-0 bg-nord-orange"></div>
        <div className="w-0 h-0 [border-left:80px_solid_#e69875] [border-bottom:40px_solid_transparent]"></div>
        <div className=" h-[40px] w-[5%] bg-transparent"></div>
      </div>
      <div className="bg-nord-secondary h-auto w-full">
        <Appear
          name="SCOTTIE SCHLOSSER"
          job="Head Brewer/Good Guy"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          img="/Scott.jpg"
          color=""
        />
      </div>
      i
      <Footer />
    </div>
  );
}
