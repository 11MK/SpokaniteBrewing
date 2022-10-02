import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Insta from "../public/instagram-svgrepo-com.svg";
import Faceboob from "../public/facebook-svgrepo-com.svg";
import Image from "next/image";

const Carousel = () => {
  return (
    <div className="flex-col pb-16">
      <div className="text-center justify-center font-aldrich text-2xl pt-10 font-semibold text-nord-secondary lg:text-3xl lg:pt-14">
        FOLLOW US ON SOCIAL MEDIA
      </div>
      <div className="flex underline justify-center pb-8 lg:pb-12 pt-3">
        <a href="https://www.instagram.com/spokanitebrewing/" className="mr-2 rounded-lg shadow-md py-[3px] px-[3px] bg-gradient-to-r from-[#8531ed] via-[#f70277] to-[#ff7505]">
          <button className="bg-nord-secondary text-nord-dark-grey font-bold rounded-md hover:bg-gradient-to-r from-[#8531ed] via-[#f70277] to-[#ff7505] hover:text-white hover:fill-nord-white py-2 px-6 inline-flex items-center">
            <span className="mr-2 text-lg font-inter">Instagram</span>
            <Insta width={20} height={20}/>
          </button>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100068149253590" className="ml-2 rounded-lg shadow-md py-[3px] px-[3px] bg-gradient-to-r from-[#00ccff] to-[#353ca7]">
          <button className="bg-nord-secondary text-nord-dark-grey font-bold hover:bg-gradient-to-r rounded-md from-[#00ccff] to-[#353ca7] hover:text-white hover:fill-nord-white py-2 px-6 inline-flex items-center">
            <span className="mr-2 text-lg font-inter">Facebook</span>
            <Faceboob width={20} height={20}/>
          </button>
        </a>
      </div>
      <div className="flex justify-center px-4">
        <a
          href="https://www.instagram.com/p/CgzsHW7vsdd/"
          className="px-4 max-w-sm aspect-square hover:scale-110 transition duration-200 ease-in-out"
        >
          <Image
            src={`/Insta1.png`}
            alt="Instagram Picture"
            className="rounded-md shadow-lg"
            width={650}
            height={812}
          />
        </a>
        <a
          href="https://www.instagram.com/p/CgIx8JDLmCz/"
          className="px-4 max-w-sm aspect-square hover:scale-110 transition duration-200 ease-in-out"
        >
          <Image
            src={`/Insta2.png`}
            alt="Instagram Picture"
            className="rounded-md shadow-lg"
            width={650}
            height={812}
          />
        </a>
        <a
          href="https://www.instagram.com/p/Cfp4drnrfDV/"
          className="px-4 max-w-sm aspect-square hover:scale-110 transition duration-200 ease-in-out"
        >
          <Image
            src={`/Insta3.png`}
            alt="Instagram Picture"
            className="rounded-md shadow-lg"
            width={650}
            height={812}
          />
        </a>
        <a
          href="https://www.instagram.com/p/Cf24MoKOy-8/"
          className="px-4 max-w-sm aspect-square hover:scale-110 transition duration-200 ease-in-out"
        >
          <Image
            src={`/Insta4.png`}
            alt="Instagram Picture"
            className="rounded-md shadow-lg"
            width={650}
            height={812}
          />
        </a>

        <a
          href="https://www.instagram.com/p/CgCzye4vZzN/"
          className="px-4 max-w-sm aspect-square hover:scale-110 transition duration-200 ease-in-out"
        >
          <Image
            src={`/Insta5.png`}
            alt="Instagram Picture"
            className="rounded-md shadow-lg"
            width={650}
            height={812}
          />
        </a>
      </div>
    </div>
  );
};

export default Carousel;
