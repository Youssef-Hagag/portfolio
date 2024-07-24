import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const Nav = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };

  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [collapsed, setCollapsed] = useState(false);

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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-button-gradient dark:bg-button-gradient-dark fixed left-0 right-0 z-[100] mx-auto mt-4 flex h-[70px] justify-around rounded-full border-b border-gray-900 px-4 py-2 text-xs font-bold shadow-md transition-transform duration-500 ${collapsed ? "w-[70px] translate-x-[40vw]" : "translate-x-0 sm:w-[500px]"} ${navVisible ? "translate-y-0" : "-translate-y-[150%]"} sm:text-base`}
    >
      {!collapsed && (
        <>
          <button
            className="hover:opacity-50 focus:outline-none"
            onClick={() => scrollToSection("Intro")}
          >
            Intro
          </button>
          <button
            className="hover:opacity-50 focus:outline-none"
            onClick={() => scrollToSection("Projects")}
          >
            Projects
          </button>
          <button
            className="hover:opacity-50 focus:outline-none"
            onClick={() => scrollToSection("Certificates")}
          >
            Certificates
          </button>
          <button
            className="hover:opacity-50 focus:outline-none"
            onClick={() => scrollToSection("Skills")}
          >
            Skills
          </button>
          <ThemeToggle />
        </>
      )}
      <button
        className="hover:opacity-50 focus:outline-none"
        onClick={() => setCollapsed(!collapsed)}
      >
        {!collapsed ? (
          <i className="pi pi-arrow-down-left-and-arrow-up-right-to-center text-xl"></i>
        ) : (
          <i className="pi pi-bars text-xl"></i>
        )}
      </button>
    </nav>
  );
};

export default Nav;
