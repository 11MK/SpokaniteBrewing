import React from "react";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";


function Beer(props) {
  return (
    <div className="text-center">
      <h2 className="mx-auto mt-10 font-aldrich font-light text-2xl md:text-3xl text-nord-white">
        {props.title}
      </h2>
      <div className="flex justify-center font-inter">
        <p className="text-nord-orange font-semibold">{props.style}</p>
        <div className="[border-left:2px_solid_#e4e4e4] text-nord-dark-gray h-auto mx-4 justify-center"></div>
        <p className="text-nord-orange font-semibold">{props.abv} ABV</p>
        <div className="[border-left:2px_solid_#e4e4e4] text-nord-dark-gray h-auto mx-4 justify-center"></div>
        <p className="text-nord-orange font-semibold">{props.ibu} IBU</p>
      </div>
      <p className="flex-shrink justify-center mx-auto [flex-basis:24rem] max-w-lg text-nord-white">
        {props.description}
      </p>
    </div>
  );
}

export default function Brews() {
  return (
    <div className="flex-col bg-nord-dark-foot">
      <div className="w-full h-[50vh]  bg-[url('/hops.png')] [background-size:1008px_756px] bg-top bg-no-repeat md:bg-cover md:bg-center flex bg-fixed items-end"></div>
      <h3 className="mx-auto mt-10 font-aldrich font-semibold text-4xl md:text-5xl text-center text-nord-orange">
        NOW POURING
      </h3>
      <div className="md:flex justify-center my-10">
        <div className="flex-col order-1">
          <Beer
            title="T-Rex"
            style="West Coast IPA"
            abv="6.2"
            ibu="56"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <Beer
            title="Citrus Twist"
            style="Hazy IPA"
            abv="6.2"
            ibu="56"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <Beer
            title="Soak Up The Sun"
            style="Blonde"
            abv="6.2"
            ibu="56"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <Beer
            title="One-10"
            style="Stout"
            abv="6.2"
            ibu="56"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </div>
        <div className="hidden sm:block order-2 [border-left:2px_solid_#2b3339] text-nord-dark-gray h-auto mx-8 justify-center"></div>
        <div className="flex-col order-3">
          <Beer
            title="Rookie"
            style="PNW Ale"
            abv="6.2"
            ibu="34"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <Beer
            title="S.S. Hazy"
            style="Hazy IPA"
            abv="6.2"
            ibu="34"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <Beer
            title="DIY Seltzer"
            style="Seltzer"
            abv="6.2"
            ibu="34"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <Beer
            title="Uncle Porter"
            style="Porter"
            abv="6.2"
            ibu="34"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </div>
      </div>
      <Header2 />
      <div className="">
        <br className=""></br>
      </div>
      <Footer />
    </div>
  );
}
