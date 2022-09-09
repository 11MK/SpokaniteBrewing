import { useState } from "react";
import axios from "axios";

export default () => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);

  const subscribe = async () => {
    setState("LOADING");
    setErrorMessage(null);
    try {
      const response = await axios.post("/api/newsletter", { email });
      setState("SUCCESS");
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState("ERROR");
    }
  };

  return (
    <div className="flex flex-col items-center w-full py-8 border-nord-secondary border-solid border my-8">
      <h2 className="text-3xl font-bold text-center font-aldrich">
        SUBSCRIBE TO OUR NEWSLETTER 
      </h2>
      <p className="mt-2 w-4/5 text-center leading-relaxed font-inter font-medium">
        Get the latest in brewery news, beer releases, and events!
      </p>
      <div className="flex w-5/6 sm:w-2/3 justify-center mt-5 flex-col md:flex-row max-w-lg">
        <input
          className="appearance-none shadow-lg font-inter mb-[2px] lg:mb-0 w-full md:mr-2 border border-nord-dark-slate rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-gray-600 bg-nord-white transition ease-in-out duration-200"
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className={`bg-transparent hover:bg-nord-dark-foot text-nord-dark-foot font-semibold hover:text-white py-2 px-4 font-aldrich border border-nord-dark-foot bg-nord-white rounded shadow transition ease-in-out duration-200 `}
          type="button"
          disabled={state === "LOADING"}
          onClick={subscribe}
        >
          Subscribe
        </button>
      </div>
      {state === "ERROR" && (
        <p className="w-1/2 mt-2 text-red-600">{errorMessage}</p>
      )}
      {state === "SUCCESS" && (
        <p className="w-1/2 mt-2 text-green-600">Success!</p>
      )}
    </div>
  );
};