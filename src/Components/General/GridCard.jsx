import React from "react";

export default function GridCard({ image, title, description, link }) {
  // Assuming `image` is the filename of the image in the `public/images` folder
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative z-10 block w-full h-full transform overflow-hidden rounded-3xl bg-cardBackground shadow-lg dark:bg-cardBackgroundDark"
    >
      <img
        src={`${process.env.PUBLIC_URL}${image}`}
        alt={title}
        className="h-40 w-full object-cover"
      />
      <div className="pt-2 p-4">
        <h3 className="sm:text-xl font-semibold overflow-hidden text-ellipsis whitespace-nowrap">{title}</h3>
        <p className="text-left text-sm sm:text-lg text-gray-400 overflow-hidden text-ellipsis">
          {description}
        </p>
      </div>
    </a>
  );
}
