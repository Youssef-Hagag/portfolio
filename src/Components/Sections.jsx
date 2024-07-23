import Intro from "./Intro"
import Projects from "./Projects"
import Certificates from "./Certificates"
import Footer from "./Footer"
import Skills from "./Skills"

export default function Sections() {
  return (
    <div>
        <div id="Intro" className="section min-h-screen transition-all duration-300 bg-section1 dark:bg-section1Dark">
        <Intro />
      </div>
      <div id="Projects" className="section min-h-screen transition-all duration-300 bg-section2 dark:bg-section2Dark">
        <Projects />
      </div>
      <div id="Certificates" className="section min-h-screen transition-all duration-300 bg-section3 dark:bg-section3Dark">
        <h2 className="mb-4 text-3xl font-bold">Certificates</h2>
        <Certificates/>
      </div>
      <div id="Skills" className="section min-h-screen transition-all duration-300 bg-section4 dark:bg-section4Dark">
        <h2 className="mb-4 text-3xl font-bold">Skills</h2>
        <Skills/>
      </div>
      <Footer />
    </div>
  )
}
