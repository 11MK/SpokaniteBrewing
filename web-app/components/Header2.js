import Image from "next/image";
import Insta from "../public/instagram-svgrepo-com.svg";
import MobileMenu from "./MobileMenu";
import Faceboob from "../public/facebook-svgrepo-com.svg";
import { motion, useCycle } from "framer-motion";
import React, { useState, useEffect } from "react";
import { header, headerVisible, headerHidden } from "./header.module.css";
import MenuToggle from "./MenuToggle";
import { useRouter } from "next/router";

function Header2() {
  const router = useRouter()
  const [showHeader, setShowHeader] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const dropdown = {
    open: {
      height: "100%",
      transition: {
        type: "spring",
        duration: 0.35,
        stiffness: 40,
        restDelta: 10,
      },
    },
    closed: {
      height: "0px",
      transition: {
        delay: 0,
        type: "tween",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const handleScroll = () => {
    setScrollPos(document.body.getBoundingClientRect().top);
    setShowHeader(document.body.getBoundingClientRect().top > scrollPos);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  


  return (
    <div
      className={`${header} && ${
        showHeader ? headerVisible : headerHidden
      } z-[100] shadow-lg`}
    >
      <div className="2xl:container flex flex-wrap justify-between items-center mx-auto">
        <div className="flex items-center order-1 w-auto md:ml-6 md:order-first">
          <button onClick={() => router.push("/about2")}>
            <Image
              src="/SpokaniteLogo3.png"
              alt="Picture of Spokanite Logo"
              width={105}
              height={69}
              priority
            />
        </button>
        </div>
        <div className="block lg:hidden">
          <div as="div" className="relative inline-block text-center">
            <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
              <motion.div
                className=" fixed top-0 w-full bg-nord-dark-grey mt-20 md:hidden"
                variants={dropdown}
              >
                <MobileMenu />
              </motion.div>
              <MenuToggle toggle={() => toggleOpen()} />
            </motion.nav>
          </div>
        </div>
        <div
          className="hidden justify-center items-center md:flex md:order-1 flex-1"
          id="mobile-menu"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:font-normal font-aldrich justify-center items-center">
            <button onClick={() => router.push("/about2")}>
              <a className="home-link ">ABOUT US</a>
            </button>
            <button onClick={() => router.push("/brews")}>
              <a className="home-link">BREWS</a>
            </button>
            <button onClick={() => router.push("/faqs")}>
              <a className="home-link">FAQs</a>
            </button>
            <button onClick={() => router.push("/shop")}>
              <a className="home-link">SHOP</a>
            </button>
            <button onClick={() => router.push("/contact")}>
              <a className="home-link">CONTACT</a>
            </button>
          </ul>
        </div>
        <div className="flex justify-center order-last pr-2 lg:pl-8">
          <a
            href="https://www.instagram.com/SpokaniteBrewing"
            className="flex items-center"
          >
            <Insta
              width={30}
              height={30}
              className="fill-nord-white hover:fill-nord-orange transition duration-200 ease-in-out"
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100068149253590"
            className="flex items-center m-2"
          >
            <Faceboob
              width={30}
              height={30}
              className="fill-nord-white hover:fill-nord-orange transition duration-200 ease-in-out"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header2;
