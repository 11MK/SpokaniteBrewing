import "../styles/globals.css";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps, router }) {
   return (
    <div>
      {/* <Verify/>       */}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
