import React from 'react'
import MenuItem  from './MenuItem';
import { motion } from "framer-motion";

 const variants = {
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  },
  closed: {
    opacity: 0,
    transition: { staggerChildren: 0.1, staggerDirection: 0 }
  }
};

const itemIds = [0, 1, 2, 3, 4, 5, 6];

const MobileMenu = () => (

    <motion.ul variants={variants} className="h-full relative flex  flex-col justify-center items-center mb-40">
      {itemIds.map(i => (
        <MenuItem i={i} key={i} />
      ))}
      </motion.ul>
);

export default MobileMenu