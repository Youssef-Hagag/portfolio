import Intro from "./Intro";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Footer from "./Footer";
import Skills from "./Skills";
import { Highlight } from "../ui/Highlight.tsx";

export default function Sections() {
  return (
    <div className="overflow-hidden">
      <div
        id="Intro"
        className="section min-h-screen bg-section1 transition-all duration-300 dark:bg-section1Dark"
      >
        <Intro />
      </div>
      <div
        id="Projects"
        className="section min-h-screen bg-section2 transition-all duration-300 dark:bg-section2Dark"
      >
        <h2 className="m-4 mb-8 sm:text-3xl font-bold">
          <Highlight>Projects</Highlight>
        </h2>
        <Projects />
      </div>
      <div
        id="Certificates"
        className="section min-h-screen bg-section3 transition-all duration-300 dark:bg-section3Dark"
      >
        <h2 className="m-4 mb-8 sm:text-3xl font-bold">
          <Highlight>Certificates</Highlight>
        </h2>
        <Certificates />
      </div>
      <div
        id="Skills"
        className="section min-h-screen bg-section4 transition-all duration-300 dark:bg-section4Dark"
      >
        <h2 className="m-4 mb-8 sm:text-3xl font-bold">
          <Highlight>Skills</Highlight>
        </h2>
        <Skills />
      </div>
      <Footer />
    </div>
  );
}
