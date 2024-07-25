import data from "../data.json";
import "primeicons/primeicons.css";
import HoverGrid from "../General/HoverGrid";

export default function Certificates() {
  const { certificates } = data;

  return (
    <div>
      <HoverGrid items={certificates} />
    </div>
  );
}
