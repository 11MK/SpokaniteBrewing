import * as React from "react";
import { motion } from "framer-motion";
import Link from 'next/link';

const variants = {
    open: {
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
};
  
const items = ["About Us", "Brews", "Shop", "Contact", "FAQ's", " ", " "] 
const MenuItem = ({ i }) => ( 
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.90 }}
      className="py-4"
    >
        <Link href="#">
            <a className="mx-auto text-3xl  text-nord-white font-splinesans">{items[i]}</a>    
        </Link>
     </motion.li>
);

export default MenuItem