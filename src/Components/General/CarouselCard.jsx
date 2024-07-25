import React from "react";

export default function CarouselCard({ image, title, description, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full w-full md:w-full transform overflow-hidden rounded-3xl bg-cardBackground shadow-lg transition-transform duration-300 hover:scale-105 dark:bg-cardBackgroundDark lg:text-xs"
    >
      <img
        src={`${process.env.PUBLIC_URL}${image}`}
        alt={title}
        className="h-48 w-full object-cover transition duration-300 group-hover:opacity-90"
      />
      <div className="pt-2 p-4">
        <h3 className="sm:text-xl font-semibold text-black dark:text-white">{title}</h3>
        <p className="text-left text-sm sm:text-xl text-gray-400 max-sm:text-sm overflow-hidden text-ellipsis">
          {description}
        </p>
      </div>
    </a>
  );
}
