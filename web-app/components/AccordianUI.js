import React from "react";
import Up from "../public/up-icon.svg";
import { motion } from "framer-motion";

const AccordionUI = ({ title, data, Id, Index, setIndex }) => {

  const buttonStyles = `flex group cursor-pointer mx-auto h-24 justify-between items-center ${Index == Id ? 'bg-nord-orange shadow-lg' : 'bg-nord-secondary'} hover:bg-nord-orange transition duration-200 ease-in-out relative z-20`;
  const titleStyles = `font-inter ${Index == Id ? 'text-nord-dark-gray transition duration-200 ease-in-out' : 'text-nord-dark-gray transition duration-200 ease-in-out'} font-semibold pl-4 group-hover:text-white`
  const handleSetIndex = (Id) => Index !== Id && setIndex(Id);

  function behavior() {
    handleSetIndex(Id);
    if (Index === Id) {
      setIndex(9);
      Id = 10;
    }
  }

  return (
    <>
      <div
        onClick={() => behavior()}
        className={buttonStyles}
      >

        <div className="flex group cursor-pointer">
          <div className={titleStyles}>
            {title}
          </div>
        </div>
        <div className="flex items-center justify-center pr-5">
          {Index == Id ? (
            <motion.div
              animate={{ rotate: 90 }}
              transition={{ duration: 0.25 }}
            >
              <Up className="w-6 h-6 group-hover:text-white text-nord-dark-grey" />
            </motion.div>
          ) : (
            <motion.div animate={{ rotate: 0 }} transition={{ duration: 0.35 }}>
              <Up className="w-6 h-6 group-hover:text-white text-nord-dark-grey" />
            </motion.div>
          )}
        </div>
      </div>
      {Index == Id && (
        <motion.div
          className="bg-nord-secondary pl-10 -z-10 font-normal font-inter text-nord-dark-grey w-full h-auto p-4 border-l-2 border-nord-orange"
          initial={{ opacity: 1, translateY: "-75%"}}
          animate={{ opacity: 1, translateY: "0%" }}
          transition={{
            type: "just",
            duration: 0.35,
            stiffness: 100,
          }}
          exit={{ opacity: 0, translateY: "30" }}
        >
          {data}
        </motion.div> 
      )}
      <div className="w-full h-[2px] mx-auto bg-gray-400 transition ease-in-out duration-200"></div>
    </>
  );
};

export default AccordionUI;
