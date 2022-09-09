import Link from 'next/link';
import Image from 'next/Image';
import React, { useState } from 'react';
import { Menu } from '@headlessui/react';
import Insta from '../public/instagram-svgrepo-com.svg';
import MobileMenu from './MobileMenu';
import MenuToggle from './MenuToggle';
import Faceboob from '../public/facebook-svgrepo-com.svg';
import { motion, useCycle } from 'framer-motion';

const Header = () => {    
  const [isOpen, toggleOpen] = useCycle(false, true);
   
  return (
    <motion.nav className='bg-gradient-to-r from-nord-dark-grey via via-nord-black to-nord-dark-grey px-2 sm:px-4 py-2.5'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.4 }}
    >
      <div className=' xl:container flex flex-wrap justify-between items-center mx-auto'>
        <div className='flex items-center order-1 m-10 w-auto md:order-first'>
          <a href='/' className=''>
            <Image
              src='/SpokaniteLogo3.png'
              alt='Picture of Spokanite Logo'
              width={105}
              height={69}
              priority
            /> 
          </a>
        </div>
        <div className='block lg:hidden'>
          <Menu as='div' className='relative inline-block text-center'>
            <motion.nav
              initial={false}
              animate={isOpen ? "open" : "closed"}
            > 
              <MenuToggle isOpen={isOpen} toggle={() => toggleOpen()}/>
            </motion.nav>
            {isOpen && ( <MobileMenu />)}
          </Menu>
        </div>
        <div className="hidden justify-center items-center md:flex md:order-1 flex-1" id="mobile-menu">
          <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-normal font-splinesans justify-center items-center'>
            <Link href='/about'>
              <a className="home-link">ABOUT US</a>
            </Link> 
            <Link href='/brews'>
              <a className='home-link'>BREWS</a>
            </Link> 
            <Link href='/faqs'>
              <a className='home-link'>FAQs</a>
            </Link> 
            <Link href='/shop'>
              <a className='home-link'>SHOP</a>
            </Link> 
            <Link href='/contact'>
              <a className='home-link'>CONTACT</a>
            </Link> 
          </ul>
        </div> 
        <div className='flex justify-center order-last'>
          <a href="https://www.instagram.com/SpokaniteBrewing" className='flex items-center m-1'>
            <Insta width={24} height={24} className="fill-nord-white hover:fill-nord-orange transition duration-200 ease-in-out"/>
          </a> 
          <a href="https://www.facebook.com/profile.php?id=10006814925359" className='flex items-center m-1'>
            <Faceboob width={24} height={24} className="hover:fill-nord-orange transition duration-200 ease-in-out"/>   
          </a>           
        </div>
      </div>
    </motion.nav>
  );
};

export default Header