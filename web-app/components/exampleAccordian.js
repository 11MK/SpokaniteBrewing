import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ( ) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div>
      <AnimatePresence>
        <motion.div
          key="question"
          className="rounded-tr-md relative z-20  rounded-br-md shadow-sm px-1 py-2 bg-blue-200 cursor-pointer font-open border-l-2 border-yellow-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div className="text-gray-800 font-bold ml-1">
            Test Question?
          </motion.div>
        </motion.div>

        {isOpen && (
          <motion.div
            key="answer"
            initial={{ opacity: 1 }}
            animate={{
              animate: {x: 100},
              transition: {
                duration: 0.5,
                stiffness: 100,
              },
            }}
            exit={{ 
              animate: {x: 100},
              transition: {
                type: "spring",
                duration: 0.5,
                stiffness: 100,
              },

            }}
            className="p-2 text-lg text-gray-700 border-l border-b border-gray-300"
          >
            Answer!!!!
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Accordion;