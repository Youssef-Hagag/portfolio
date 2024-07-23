import React from "react"
import ProjectCard from "./ProjectCard"
import data from "./data.json"

export default function Projects() {
  const { projects } = data

  return (
    <div>
      <h2 className="mb-4 text-3xl font-bold">Projects</h2>
      <p className="text-2xl">
        I have selected a few of the projects that I'm most proud of here, to see more check out my{" "}
        <a href="https://github.com/Youssef-Hagag?tab=repositories" className="text-blue-700">
          GitHub Repositories.
        </a>
      </p>
      <div className="flex flex-wrap justify-center gap-4 py-10">
        {projects.map((project, index) => {
          return (
            <div key={index}>
              <ProjectCard {...project} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
