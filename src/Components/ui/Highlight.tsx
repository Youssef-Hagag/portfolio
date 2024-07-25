import { cn } from "../../lib/utils.ts";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const controls = useAnimation();
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current; // Store ref.current in a variable

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({
              backgroundSize: "100% 100%",
              transition: {
                duration: 1,
                ease: "linear",
                delay: 0.5,
              },
            });
          } else {
            controls.set({
              backgroundSize: "0% 100%",
            });
          }
        });
      },
      {
        threshold: 0.1, // Adjust this value as needed
      }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [controls]);

  return (
    <motion.span
      ref={ref}
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={controls}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `p-3 rounded-full relative inline-block bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500`,
        className,
      )}
    >
      {children}
    </motion.span>
  );
};
