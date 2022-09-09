import React from "react";
import Header2 from "../components/Header2";
import Accordian from "../components/Accordian";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Newsletter from "../components/newsletter";
import Socials from "../components/Socials";

export default function Home() {
  return (
    <div className="flex-col bg-nord-dark-foot">
      <Header2 />
      <div className="w-full h-[45vh]  bg-[url('/Taps.jpg')] [background-size:1008px_756px] bg-top bg-no-repeat md:bg-cover md:bg-center flex bg-fixed items-end"></div>
      <p className="mb-28">Hello</p>
      <p className="my-28">Hello</p>
      <p className="my-28">Hello</p>
      <p className="my-28">Hello</p>
      <p className="my-28">Hello</p>
      <p className="my-28">Hello</p>
      <p className="my-28">Hello</p>
      <p className="my-28">Hello</p>
      <p className="my-28">Hello</p>
      <p className="my-28">Hello</p>
      <p className="my-28">Hello</p>
      <p className="my-28">Hello</p>
      <p className="mt-28 flex-grow h-[2px] bg-nord-secondary w-full"></p>
      <div className="hidden sm:block">
        <div className="w-full h-auto bg-[url('/InstaBackdrop.png')] bg-cover bg-center flex justify-center items-center font-medium text-lg border-nord-dark-foot">
          <Socials />
        </div>
      </div>
      <div className="block sm:hidden">
        <div className="w-full h-auto bg-[url('/InstaBackdrop.png')] bg-cover bg-center flex justify-center items-center font-medium text-lg  border-b-4 border-t-4 border-nord-dark-foot">
          <Carousel />
        </div>
      </div>
      <div className="w-full h-auto bg-[url('/BackDrop.png')] bg-cover bg-center flex justify-center items-center font-medium text-lg  border-b-4 border-t-4 border-nord-dark-foot">
        <Newsletter />
      </div>
      <div className="w-full h-[50vh] bg-[url('/Map.png')] bg-cover bg-center flex justify-center items-center "></div>
      <Footer />
    </div>
  );
}
