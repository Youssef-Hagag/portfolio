import React from "react"
import "primeicons/primeicons.css"

export default function Button({ text, onClick, icon, iconBeforeText }) {
  return (
    <button className="bg-button-gradient button-hover min-h-12 min-w-48 rounded-xl px-4 py-2 text-xl font-bold shadow-md focus:outline-none" onClick={onClick}>
      {icon && iconBeforeText && <i className={`pi pi-${icon} mr-2`}></i>}
      {text}
      {icon && !iconBeforeText && <i className={`pi pi-${icon} ml-2`}></i>}
    </button>
  )
}
