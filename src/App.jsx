import Nav from "./Components/General/Nav"
import "primeicons/primeicons.css"
import Spotlight from "./Components/ui/Spotlight.tsx"
import Sections from "./Components/Sections/Sections.jsx"

export default function App() {
  return (
    <div className="App text-black dark:text-white">
      <Nav />
      <div className="absolute z-0 h-screen w-full overflow-hidden">
        <Spotlight className="left-[600px] top-10" fill="purple" />
        <Spotlight className="left-10 top-10" fill="purple" />
      </div>
      <Sections/>
    </div>
  )
}
