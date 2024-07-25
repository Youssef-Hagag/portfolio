import data from "../data.json";
import Carousel from "../General/Carousel";

export default function Projects() {
  const { projects } = data;
  return (
    <div>
      <Carousel items={projects} />
    </div>
  );
}
