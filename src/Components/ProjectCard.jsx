import React from "react"

export default function ProjectCard({ image, title, description, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="group block h-[400px] w-[300px] transform overflow-hidden rounded-lg bg-cardBackground dark:bg-cardBackgroundDark shadow-lg transition duration-300 hover:scale-105">
      <img src={image} alt={title} className="h-48 w-full object-cover transition duration-300 group-hover:opacity-90" />
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="text-left text-gray-400 text-xl max-sm:text-xs">{description}</p>
      </div>
    </a>
  )
}
