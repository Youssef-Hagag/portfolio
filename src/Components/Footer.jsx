import React from "react"
import "primeicons/primeicons.css"

export default function Footer() {
  return (
    <footer className="flex h-14 items-center justify-around bg-section5 dark:bg-section5Dark">
      <div className="text-xl">Copyrights @ Youssef Hagag</div>
      <div className="flex gap-5">
        <a href="https://www.linkedin.com/in/youssef-hagag-58574a30a/">
          <i className="pi pi-linkedin text-2xl"></i>
        </a>
        <a href="https://github.com/Youssef-Hagag">
          <i className="pi pi-github text-2xl"></i>
        </a>
        <a href="https://www.facebook.com/yousif.mohamedhagag">
          <i className="pi pi-facebook text-2xl"></i>
        </a>
      </div>
    </footer>
  )
}
