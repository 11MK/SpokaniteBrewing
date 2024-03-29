import * as React from "react";
import { motion } from "framer-motion";
import { Menu } from '@headlessui/react';

const Path = (props) => (
  <motion.path
    fill="transparent"
    stroke='#e5e9f0'
    strokeWidth="3"
    strokeLinecap="round"
    transition={{ duration: 0.3 }}
    {...props}
  />
);

const MenuToggle = ({ toggle }) => (
  <Menu.Button onClick={toggle} className="ml-5 mr-5 md:hidden">
    <svg width="30" height="30" viewBox="0 0 20 20" className="">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5", stroke: "#e69875" },
        }}
      />
      <Path
        d="M 2 9.5 L 10 9.5"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.0" },
          open: { d: "M 3 2.5 L 17 16.0", stroke: "#e69875" },
        }}
      />
    </svg>
  </Menu.Button>
);

export default MenuToggle