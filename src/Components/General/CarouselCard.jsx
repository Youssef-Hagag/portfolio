import React from "react";

export default function CarouselCard({ image, title, description, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full w-full md:w-full transform overflow-hidden rounded-3xl bg-cardBackground shadow-lg transition duration-300 hover:scale-105 dark:bg-cardBackgroundDark lg:text-xs"
    >
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover transition duration-300 group-hover:opacity-90"
      />
      <div className="p-4">
        <h3 className="mb-2 sm:text-xl font-semibold">{title}</h3>
        <p className="text-left sm:text-xl text-gray-400 max-sm:text-sm">
          {description}
        </p>
      </div>
    </a>
  );
}
