import data from "../data.json";
import HoverGrid from "../General/HoverGrid";
import Carousel from "../General/Carousel";

export default function Projects() {
  const { projects } = data;
  return (
    <div>
      <Carousel items={projects} />
    </div>
  );
}
