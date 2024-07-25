import data from "../data.json";
import HoverGrid from "../General/HoverGrid";
import Carousel from "../General/Carousel";

export default function Projects() {
  const { projects } = data;
  return (
    <div>
      <p className="sm:text-2xl">
        I have selected a few of the projects that I'm most proud of here, to
        see more check out my{" "}
        <a
          href="https://github.com/Youssef-Hagag?tab=repositories"
          className="relative inline-block text-blue-700 transition-all duration-300 ease-in-out hover:text-blue-500"
        >
          GitHub Repositories.
        </a>
      </p>

      <Carousel items={projects} />
    </div>
  );
}
