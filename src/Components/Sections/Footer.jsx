import React from "react"
import "primeicons/primeicons.css"

export default function Footer() {
  return (
    <footer className="flex h-14 items-center justify-around bg-section5 dark:bg-section5Dark">
      <div className="sm:text-xl">Copyrights @ Youssef Hagag</div>
      <div className="flex gap-5">
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/youssef-hagag-58574a30a/">
          <i className="pi pi-linkedin sm:text-2xl"></i>
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/Youssef-Hagag">
          <i className="pi pi-github sm:text-2xl"></i>
        </a>
        <a href="mailto:yousef.m.haggag@gmail.com">
          <i className="pi pi-envelope sm:text-2xl"></i>
        </a>
      </div>
    </footer>
  )
}
