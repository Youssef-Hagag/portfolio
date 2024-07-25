import React, { useState } from "react";
import GridCard from "./GridCard";
import { AnimatePresence, motion } from "framer-motion";

export default function HoverGrid({ items }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="relative flex w-full flex-wrap justify-center lg:px-[10%]">
      {items.map((item, index) => (
        <div
          key={index}
          className="relative block h-[300px] w-[90%] max-w-[500px] p-2 lg:w-[45%]"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex == index && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-3xl bg-neutral-400 dark:bg-slate-600"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.3 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.3, delay: 0.3 },
                }}
              />
            )}
          </AnimatePresence>
          <GridCard {...item} />
        </div>
      ))}
    </div>
  );
}
