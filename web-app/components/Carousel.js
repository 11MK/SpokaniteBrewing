import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import LeftChev from "../public/chevron-left.svg";
import RightChev from "../public/chevron-right.svg";
import Image from "next/Image";
import Insta from "../public/instagram-svgrepo-com.svg";
import Faceboob from "../public/facebook-svgrepo-com.svg";

const Carousel = () => {
  let [ref, { width }] = useMeasure();
  let [count, setCount] = useState(5002);
  let previous = usePrevious(count);
  let direction = count > previous ? 1 : -1;

  return (
    <div>
      <div className="text-center justify-center font-aldrich text-2xl pt-8 font-semibold text-nord-secondary lg:text-3xl lg:pt-12">
        FOLLOW US ON SOCIAL MEDIA
      </div>
      <div className="flex underline justify-center pb-4 lg:pb-8 pt-3">
        <a href="https://www.instagram.com/spokanitebrewing/" className="mr-2 rounded-lg shadow-md py-[3px] px-[3px] bg-gradient-to-r from-[#8531ed] via-[#f70277] to-[#ff7505]">
          <button className="bg-nord-secondary text-nord-dark-grey font-bold rounded-md hover:bg-gradient-to-r from-[#8531ed] via-[#f70277] to-[#ff7505] hover:text-white hover:fill-nord-white py-2 px-6 inline-flex items-center">
            <span className="mr-2 text-sm">Instagram</span>
            <Insta width={20} height={20}/>
          </button>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100068149253590" className="ml-2 rounded-lg shadow-md py-[3px] px-[3px] bg-gradient-to-r from-[#00ccff] to-[#353ca7] ">
          <button className="bg-nord-secondary text-nord-dark-grey font-bold hover:bg-gradient-to-r rounded-md from-[#00ccff] to-[#353ca7] hover:text-white hover:fill-nord-white py-2 px-6 inline-flex items-center">
            <span className="mr-2 text-sm">Facebook</span>
            <Faceboob width={20} height={20}/>
          </button>
        </a>
      </div>

      <div className="px-6 flex w-full items-center">
        <div className="flex justify-between">
          <button onClick={() => setCount(count - 1)}>
            <LeftChev
              width={30}
              height={30}
              className="bg-gray-500 rounded-md transition duration-200 ease-in-out hover:bg-nord-orange"
            />
          </button>
        </div>
        <div
          ref={ref}
          className="relative flex h-auto w-full items-center justify-center overflow-hidden"
        >
          <AnimatePresence custom={{ direction, width }}>
            <motion.div
              key={count}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "just", duration: '.6' }}
              custom={{ direction, width }}
              className={`absolute flex h-auto w-auto items-center justify-center text-xl font-bold text-white`}
            >
              <div className="mx-4 mt-4 max-w-lg">
                <Image
                  src={`${colors[Math.abs(count) % 5]}`}
                  alt="Instagram Picture"
                  width={650}
                  height={812}
                  priority
                />
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="invisible">
            <Image
              src={`${colors[Math.abs(count) % 5]}`}
              alt="Instagram Picture"
              width={650}
              height={812}
              priority
            />
          </div>
        </div>
        <div className="flex justify-between">
          <button onClick={() => setCount(count + 1)}>
            <RightChev
              width={30}
              height={30}
              className="bg-gray-500 rounded-md transition duration-200 ease-in-out"
            />
          </button>
        </div>
      </div> 
      <ol className="list-none text-center pb-8 z-10 ">
        <li className="inline-block">
          <label
            onClick={() => setCount(5000)}
            className={`${
              position[Math.abs(count) % 5] == 1
                ? "bg-[#e69875] transition ease-in-out duration-200"
                : "bg-cover"
            } cursor-pointer block w-3 h-3 [margin:0px_5px_0px] [border-radius:50%] bg-transparent [border:2px_solid_#6b7280]`}
          ></label>
        </li>
        <li className="inline-block">
          <label
            onClick={() => setCount(5001)}
            className={`${
              position[Math.abs(count) % 5] == 2
                ? "bg-[#e69875] transition ease-in-out duration-200]"
                : "bg-cover"
            } cursor-pointer block w-3 h-3 [margin:0px_5px_0px] [border-radius:50%] bg-transparent [border:2px_solid_#6b7280]`}
          ></label>
        </li>
        <li className="inline-block">
          <label
            onClick={() => setCount(5002)}
            className={`${
              position[Math.abs(count) % 5] == 3
                ? "bg-[#e69875] transition ease-in-out duration-200]"
                : "bg-cover"
            } cursor-pointer block w-3 h-3 [margin:0px_5px_0px] [border-radius:50%] bg-transparent [border:2px_solid_#6b7280]`}
          ></label>
        </li>
        <li className="inline-block">
          <label
            onClick={() => setCount(5003)}
            className={`${
              position[Math.abs(count) % 5] == 4
                ? "bg-[#e69875] transition ease-in-out duration-200]"
                : "bg-cover"
            } cursor-pointer block w-3 h-3 [margin:0px_5px_0px] [border-radius:50%] bg-transparent [border:2px_solid_#6b7280]`}
          ></label>
        </li>
        <li className="inline-block">
          <label
            onClick={() => setCount(5004)}
            className={`${
              position[Math.abs(count) % 5] == 5
                ? "bg-[#e69875] transition ease-in-out duration-200]"
                : "bg-cover"
            } cursor-pointer block w-3 h-3 [margin:0px_5px_0px] [border-radius:50%] bg-transparent [border:2px_solid_#6b7280]`}
          ></label>
        </li>
      </ol>
    </div>
  );
};

let colors = [
  "/Insta1.png",
  "/Insta2.png",
  "/Insta3.png",
  "/Insta4.png",
  "/Insta5.png",
];
let position = [1, 2, 3, 4, 5];
let variants = {
  enter: ({ direction, width }) => ({
    x: direction * width,
  }),
  center: { x: 0 },
  exit: ({ direction, width }) => ({
    x: direction * -width,
  }),
};

function usePrevious(state) {
  let [tuple, setTuple] = useState([state, null]);
  if (tuple[1] !== state) {
    setTuple([tuple[1], state]);
  }
  return tuple[0];
}

export default Carousel;
