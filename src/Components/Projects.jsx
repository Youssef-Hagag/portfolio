import React from "react"
import ProjectCard from "./ProjectCard"

export default function Projects() {
  return (
    <div>
      <h2 className="mb-4 text-3xl font-bold">Projects</h2>
      <p className="text-2xl">
        I have selected a few of the projects that I'm most proud of here, to see more check out my{" "}
        <a href="https://github.com/Youssef-Hagag?tab=repositories" className="text-blue-400">
          GitHub Repositories.
        </a>
      </p>
      <div className="py-10 flex flex-wrap justify-center gap-4">
        <ProjectCard image="/images/font_classifier.jpeg" title="Arabic Font Classifier" description="A Neural Networks course project where we implement a machine learning model to determine the font of an Arabic paragraph from an image." githubLink="https://github.com/Youssef-Hagag/Arabic-Font-Classifier" />
        <ProjectCard image="/images/font_classifier.jpeg" title="Arabic Font Classifier" description="A Neural Networks course project where we implement a machine learning model to determine the font of an Arabic paragraph from an image." githubLink="https://github.com/Youssef-Hagag/Arabic-Font-Classifier" />
        <ProjectCard image="/images/font_classifier.jpeg" title="Arabic Font Classifier" description="A Neural Networks course project where we implement a machine learning model to determine the font of an Arabic paragraph from an image." githubLink="https://github.com/Youssef-Hagag/Arabic-Font-Classifier" />
        <ProjectCard image="/images/font_classifier.jpeg" title="Arabic Font Classifier" description="A Neural Networks course project where we implement a machine learning model to determine the font of an Arabic paragraph from an image." githubLink="https://github.com/Youssef-Hagag/Arabic-Font-Classifier" />
        <ProjectCard image="/images/font_classifier.jpeg" title="Arabic Font Classifier" description="A Neural Networks course project where we implement a machine learning model to determine the font of an Arabic paragraph from an image." githubLink="https://github.com/Youssef-Hagag/Arabic-Font-Classifier" />
        <ProjectCard image="/images/font_classifier.jpeg" title="Arabic Font Classifier" description="A Neural Networks course project where we implement a machine learning model to determine the font of an Arabic paragraph from an image." githubLink="https://github.com/Youssef-Hagag/Arabic-Font-Classifier" />
        <ProjectCard image="/images/font_classifier.jpeg" title="Arabic Font Classifier" description="A Neural Networks course project where we implement a machine learning model to determine the font of an Arabic paragraph from an image." githubLink="https://github.com/Youssef-Hagag/Arabic-Font-Classifier" />
      </div>
    </div>
  )
}
