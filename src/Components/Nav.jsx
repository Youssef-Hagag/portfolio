import React from "react"
import { useState, useEffect } from "react"

const Nav = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    section.scrollIntoView({ behavior: "smooth" })
  }

  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setNavVisible(false);
      } else {
        // Scrolling up
        setNavVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`${navVisible ? 'opacity-100' : 'opacity-0'} transition duration-500 hover:opacity-100 z-[100] fixed left-0 right-0 top-0 mx-auto flex h-[70px] w-[300px] text-xs sm:w-[500px] sm:text-base justify-around rounded-full border-b border-gray-900 bg-button-gradient p-4 px-4 py-2 text-white shadow-md`}>
      <button className="hover:opacity-50 focus:outline-none" onClick={() => scrollToSection("Intro")}>
        Intro
      </button>
      <button className="hover:opacity-50 focus:outline-none" onClick={() => scrollToSection("Projects")}>
        Projects
      </button>
      <button className="hover:opacity-50 focus:outline-none" onClick={() => scrollToSection("Certificates")}>
        Certificates
      </button>
      <button className="hover:opacity-50 focus:outline-none" onClick={() => scrollToSection("Skills")}>
        Skills
      </button>
      <button className="hover:opacity-50 focus:outline-none" onClick={() => scrollToSection("Contact Me")}>
        Contact Me
      </button>
    </nav>
  )
}

export default Nav
