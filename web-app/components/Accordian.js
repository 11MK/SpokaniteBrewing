import React, { useState } from "react";
import AccordionUI from "./AccordianUI";

const Accordion = () => {
  const [Index, setIndex] = useState(false);

  const data = [
    {
      id: 1,
      question: "What is Next.Js ?",
      answer: "The React Framework for Production",
    },
    {
      id: 2,
      question: "What is Tailwindcss ?",
      answer:
        "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
    },
    {
      id: 3,
      question: "Example question #1",
      answer:
        "LOREM IPSUM LOREM IPSUM IT GET SKDFO TEST WORDS ANSWER TO QUESTION",
    },
  ];

  return (
    <div className=" flex justify-center w-full items-center bg-nord-secondary">
      <div className="items-center container lg:px-36 px-4 flex-col h-auto w-full">
        <div className="w-full h-[2px] mx-auto bg-gray-400"></div>
        {data.map((data) => {
          return (
            <>
              <AccordionUI
                title={data.question}
                Id={data.id}
                data={data.answer}
                Index={Index}
                setIndex={setIndex}
              ></AccordionUI>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default Accordion;
