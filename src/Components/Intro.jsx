import React from "react"
import Button from "./Button"

export default function Intro() {
  return (
    <div>
      <h2 className="mb-4 mt-10 text-3xl font-bold">Hi, I'm Youssef Mohamed Hagag</h2>
      <br />
      <p className="text-left text-2xl">I'm a 4th-year Computer Engineering student at Faculty of Engineering, Cairo University.</p>
      <br />
      <p className="text-left text-2xl md:pr-[30vh]">I have a keen interest in software development. My current goal is to improve my skills and knowledge to create impactful applications and contribute to the world of programming.</p>

      <div className="flex justify-center gap-10 p-5">
        <a href="https://www.linkedin.com/in/youssef-hagag-58574a30a/">
          <Button text="LinkedIn"></Button>
        </a>

        <a href="https://github.com/Youssef-Hagag">
          <Button text="GitHub"></Button>
        </a>
      </div>
    </div>
  )
}
