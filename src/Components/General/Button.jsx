import React from "react";
import "primeicons/primeicons.css";

export default function Button({ text, onClick, icon, iconBeforeText }) {
  return (
    <button
      className="flex max-h-[8vh] w-fit max-w-[80vw] justify-center items-center  rounded-xl bg-button-gradient px-4 py-2 font-bold shadow-md button-hover dark:button-hover-dark focus:outline-none dark:bg-button-gradient-dark sm:min-h-12 sm:min-w-48 sm:text-xl"
      onClick={onClick}
    >
      {icon && iconBeforeText && <i className={`pi pi-${icon} mr-2`}></i>}
      {<div className="overflow-hidden text-ellipsis">{text}</div>}
      {icon && !iconBeforeText && <i className={`pi pi-${icon} ml-2`}></i>}
    </button>
  );
}
