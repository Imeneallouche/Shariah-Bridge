import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function NewProductInformation() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className=" flex md:flex-row  items-center justify-between p-8 rounded-xl">
      {/* Search Bar */}
      <h1 className="text-3xl font-semibold text-gray-900">New Product </h1>
      <div className="flex space-x-4">
        <div className="flex items-center bg-[#E5E5E5] px-4 py-3 rounded-lg space-x-4">
          <input
            type="text"
            placeholder="Product Name"
            className="bg-transparent outline-none px-3 text-gray-700 w-48"
          />
        </div>
        <div className="flex items-center bg-[#E5E5E5] px-4 py-3 rounded-lg space-x-4">
          <input
            type="text"
            placeholder="Product Description"
            className="bg-transparent outline-none px-3 text-gray-700 w-80"
          />
        </div>
      </div>
      {/* Filter Buttons */}
      <div className="hidden md:flex md:flex-wrap md:gap-4">
        <Dropdown
          label="Projected Standard"
          isOpen={openDropdown === "ong"}
          onToggle={() => toggleDropdown("ong")}
          options={["Mudaraba", "Musharaka", "Salem"]}
        />
      </div>
    </div>
  );
}

function Dropdown({ label, isOpen, onToggle, options }) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-2 bg-[#E5E5E5] px-4 py-3 rounded-lg text-gray-700 text-sm shadow-sm hover:bg-gray-200"
      >
        {label} <ChevronDown className="w-4 h-4" />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-40 z-10 border border-gray-200">
          {options.map((option, index) => (
            <p
              key={index}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
