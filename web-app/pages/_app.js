import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
   return (
    <div>
      {/* <Verify/>       */}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
