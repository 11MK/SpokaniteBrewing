// import React from "react";
import Header2 from "./Header2";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const Vertest = () => {
  const [clicked, setClicked] = useState(false)
  const [clear, setCleared] = useState(false)
  const hoverEffects = { textShadow: "0px 0px 4px white", scale: 1.1 };
  const topVariant = {
    y: "100vh",
    ease: [0.75, 0.9, 1.2, 0.9],
    transition: {
      type: "spring",
      duration: 3.5,
    },
  };
  const botVariant = {
    y: "50vh",
    ease: [0.75, 0.9, 1.2, 0.9],
    transition: {
      type: "spring",
      duration: 3.5,
    },
  };

  return (
    <div className={` flex-col ${clear ? "hidden" : ""}`}>
      <motion.div
        className={`bg-nord-dark-grey h-1/2 flex w-full z-[101] fixed mt-0`}
        initial={{ y: 0 }}
        animate={clicked ? topVariant : null}
      >
        <div className="flex-col mt-auto w-full">
          <div className="bg-white h-[3px] sm:h-[5px] md:h-[7px] lg:h-[9px] xl:h-[11px] "></div>
        </div>
        <div className="flex container justify-center mx-auto h-full">
          <div className="flex-col mt-auto w-full">
            <div className="bg-white h-[3px] sm:h-[5px] md:h-[7px] lg:h-[9px] xl:h-[11px]"></div>
          </div>
          <div className=" w-full bg-[url('/AuthBackdrop.png')] [background-size:100%] bg-[center_bottom] bg-no-repeat mt-[10vh] min-w-[200px] sm:min-w-[300px] md:min-w-[400px] lg:min-w-[500px] xl:min-w-[600px]"></div>
          {/* min-w-[200px] sm:min-w-[300px] md:min-w-[400px] lg:min-w-[500px] xl:min-w-[600px] */}
          <div className="flex-col mt-auto w-full">
            <div className="bg-white h-[3px] sm:h-[5px] md:h-[7px] lg:h-[9px] xl:h-[11px] w-full"></div>
          </div>
        </div>
        <div className="flex-col mt-auto w-full">
          <div className="bg-white h-[3px] sm:h-[5px] md:h-[7px] lg:h-[9px] xl:h-[11px] "></div>
        </div>
      </motion.div>
      <motion.div
        className="bg-nord-orange w-full h-1/2 z-[101] fixed bottom-0"
        initial={{ y: 0 }}
        animate={clicked ? botVariant : null}
      >
        <div className="font-aldrich text-center text-2xl md:text3xl lg:text-4xl xl:text5xl text-nord-dark-foot font-bold drop-shadow-md pt-10 px-3">
          {/* Are you 21 years or older? */}
          ARE YOU 21 YEARS OR OLDER?
        </div>
        <div className="sm:flex justify-center items-start h-[calc(50vh-96px)] align-middle w-full text-center pt-6 sm:pt-16 px-2">
          <motion.button
            onClick={setClicked}
            whileHover={hoverEffects}
            whileTap={{ scale: 0.6, opacity: 0 }}
            className="px-14 py-2 mb-3 sm:mb-0 mx-2 sm:mx-4 lg:mx-6 text-4xl md:text5xl lg:text-6xl xl:text7xl border-4 border-white text-white bg-transparent font-extrabold font-aldrich leading-tight uppercase rounded-full focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-auto"
          >
            YES
          </motion.button>
          <Link href={"https://giphy.com/gifs/emote-catjam-jpbnoe3UIa8TU8LM13"}>
            <motion.button
              whileHover={hoverEffects}
              whileTap={{ scale: 0.6, opacity: 0 }}
              className="px-16 py-2 mx-2 sm:mx-4 lg:mx-6 text-4xl md:text5xl lg:text-6xl xl:text7xl border-4 border-white text-white bg-transparent font-extrabold font-aldrich leading-tight uppercase rounded-full focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-auto"
            >
              NO
            </motion.button>
          </Link>
        </div>
      </motion.div>
      {/* <div className="bg-nord-secondary w-1/2"></div> */}
    </div>
  );
};

export default Vertest;
