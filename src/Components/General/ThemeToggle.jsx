import { useLayoutEffect, useState } from "react"

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true")

  useLayoutEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    if(darkMode)
      localStorage.setItem("darkMode", false)
    else 
      localStorage.setItem("darkMode", true)
    setDarkMode(!darkMode)
  }

  return (
    <button onClick={toggleDarkMode} className="my-auto">
      <i className={`pi ${darkMode ? "pi-sun" : "pi-moon"} content-baseline sm:text-2xl hover:opacity-50`}></i>
    </button>
  )
}
