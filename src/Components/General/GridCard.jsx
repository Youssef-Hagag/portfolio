import React from "react";

export default function GridCard({ image, title, description, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative z-10 block w-full h-full transform overflow-hidden rounded-3xl bg-cardBackground shadow-lg dark:bg-cardBackgroundDark"
    >
      <img src={image} alt={title} className="h-36 w-full object-cover" />
      <div className="p-4">
        <h3 className="mb-2 sm:text-xl font-semibold overflow-hidden text-ellipsis whitespace-nowrap">{title}</h3>
        <p className="text-left sm:text-xl text-gray-400 overflow-hidden text-ellipsis">
          {description}
        </p>
      </div>
    </a>
  );
}
