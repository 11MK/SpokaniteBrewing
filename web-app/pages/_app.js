import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { motion, useAnimation } from "framer-motion";
import Verify from "../components/Verify";
import Vertest from "../components/VerTest";

function MyApp({ Component, pageProps, router }) {
   return (
    <div>
      {/* <Verify/>       */}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
