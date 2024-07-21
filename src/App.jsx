import Nav from "./Components/Nav";
import Intro from "./Components/Intro";
import Projects from "./Components/Projects";
import Certificates from "./Components/Certificates";
import 'primeicons/primeicons.css';

export default function App() {
  return (
    <div className="App text-white">
      <Nav />
      <div id="Intro" className="section min-h-screen pt-[10vh] bg-[#10153e]">
        <Intro/>
      </div>
      <div id="Projects" className="section min-h-screen pt-[10vh] bg-[#0d1134]">
        <Projects/>
      </div>
      <div id="Certificates" className="section min-h-screen pt-[10vh] bg-[#080b23]">
        <h2 className="text-3xl font-bold mb-4">Certificates</h2>
        <Certificates />
      </div>
      <div id="Skills" className="section min-h-screen pt-[10vh] bg-[#06091e]">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <p>This is the content of section 2.</p>
      </div>
      <div id="Contact Me" className="section min-h-screen pt-[10vh] bg-[#040715]">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p>This is the content of section 3.</p>
      </div>
    </div>
  );
}
