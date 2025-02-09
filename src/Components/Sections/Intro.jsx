import React from "react";
import Button from "../General/Button.jsx";
import { Highlight } from "../ui/Highlight.tsx";

export default function Intro() {
  return (
    <div className="relative z-10">
      <h2 className="mb-4 mt-20 rounded-full font-bold sm:mt-28 sm:text-3xl">
        <Highlight className="p-4"> Hi, I'm Youssef Mohamed Hagag</Highlight>{" "}
      </h2>
      <p className="mt-12 md:pr-[40px] text-left sm:text-2xl">
        I'm a 4th-year Computer Engineering student at Faculty of Engineering,
        Cairo University.
      </p>
      <p className="mt-8 md:pr-[40px] text-left sm:text-2xl">
        I have a keen interest in software development. My current goal is to
        improve my skills and knowledge to create impactful applications and
        contribute to the world of programming.
      </p>

      <h2 className="mb-4 mt-10 font-bold sm:text-3xl">Checkout my work</h2>
      <div className="max-md:gap-10 flex flex-wrap justify-center gap-20 p-5">
        <a href="https://drive.google.com/uc?export=download&id=1H1YRFKRateyieXGcnWHC1lRgVvQ7BfsL">
          <Button text="Download CV" icon="download"></Button>
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/youssef-hagag-58574a30a/"
        >
          <Button text="LinkedIn" icon="arrow-up-right"></Button>
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Youssef-Hagag"
        >
          <Button text="GitHub" icon="arrow-up-right"></Button>
        </a>
      </div>

      <h2 className="mb-4 mt-10 font-bold sm:text-3xl">Or contact me at</h2>
      <div className="max-md:gap-10 flex flex-wrap justify-center gap-20 p-5">
        <a href="mailto:yousef.m.haggag@gmail.com">
          <Button
            text="yousef.m.haggag@gmail.com"
            icon="envelope"
            iconBeforeText={true}
          ></Button>
        </a>

        <a href="tel:201065832245">
          <Button
            text="+201065832245"
            icon="phone"
            iconBeforeText={true}
          ></Button>
        </a>
      </div>
    </div>
  );
}
