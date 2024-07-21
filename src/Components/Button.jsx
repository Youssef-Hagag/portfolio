import React from "react"
import "primeicons/primeicons.css"

export default function Button({ text, onClick }) {
  return (
    <button className="min-w-32 rounded-md bg-button-gradient button-hover px-4 py-2 text-white shadow-md focus:outline-none" onClick={onClick}>
      {text}
      <i className="pi pi-arrow-up-right ml-2 mt-1"></i>
    </button>
  )
}
