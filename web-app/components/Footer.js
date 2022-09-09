import Image from "next/Image";

const Footer = () => (
  <>
    <div className="bg-nord-dark-foot w-full h-full shadow-lg">
      <div className="md:flex justify-between items-center w-full mx-auto p-10 md:container">
        <a href="#" className="hidden md:block">
          <Image
            src="/SpokaniteFooterLogo.png"
            alt="Picture of Spokanite Brewing Logo"
            width={410}
            height={310}
            priority
          />
        </a>
        <div>
          <div className="text-nord-white text-center mb-5 md:text-left">
            <h3 className="text-xl font-aldrich text-nord-orange">Hours</h3>
            <p className="text-base font-inter">Friday: 2pm - 8pm</p>
            <p className="text-base font-inter">Saturday: 12pm - 8pm</p>
            <p className="text-base font-inter">Sunday: 12pm - 8pm</p>
          </div>
          <div className="text-nord-white text-center md:text-left">
            <h3 className="text-xl font-aldrich text-nord-orange">Location</h3>
            <p className="font-base font-inter">6607 N Ash Street Spokane, WA 99208</p>
            <a href="mailto: spokanitebrewing@gmail.com" className="font-base font-inter hover:text-nord-orange transition duration-200 ease-in-out">spokanitebrewing@gmail.com</a>
          </div>
        </div>
        <div className="hidden md:block">
          <Image
            src="/SpokaniteMotto.png"
            alt="Picture of Spokanite Brewing Motto"
            width={700}
            height={250}
            priority
          />
        </div>
        <a href="#" className="block md:hidden text-center">
          <Image
            src="/SpokaniteFooterLogo.png"
            alt="Picture of Spokanite Brewing Logo"
            width={410}
            height={310}
            priority
          />
        </a>
      </div>
    </div>
    
    <div className=" font-inter text-xs bg-nord-orange text-nord-white">
      <div className="flex justify-between w-full 3xl:container">
        <h4 className=" my-1 mx-auto text-xs sm:text-base">
          © Spokanite Brewing Co.
        </h4>
        <h4 className=" my-1 mx-auto text-xs sm:text-base">
          Website By Max Kuttner
        </h4>
      </div>
    </div>
  </>
);

export default Footer;
