import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../components/menu";
import {
  ChevronDownIcon,
  ViewGridIcon,
  ViewListIcon,
  DotsVerticalIcon,
} from "@heroicons/react/outline";

const notebooks = [
  {
    id: 1,
    icon: "🧬",
    title: "Improving Musharaka Standard...",
    date: "26 avr. 2025",
    sources: 1,
    bg: "#fff",
  },
  {
    id: 2,
    icon: "📒",
    title: "Accounting for ABC Bank Contract",
    date: "16 mai 2025",
    sources: 0,
    bg: "#fff",
  },
  {
    id: 3,
    icon: "📊",
    title: "Reversing the Transaction N°24",
    date: "19 janv. 2025",
    sources: 1,
    bg: "#fff",
  },
  {
    id: 4,
    icon: "🧩",
    title: "Painting Service Standard Projection",
    date: "6 avr. 2025",
    sources: 4,
    bg: "#fff",
  },
  {
    id: 5,
    icon: "💻",
    title: "Accounting for ABC Bank Contract",
    date: "11 déc. 2024",
    sources: 1,
    bg: "#fff",
  },
  {
    id: 6,
    icon: "📊",
    title: "Improving Musharaka Standard...",
    date: "23 nov. 2024",
    sources: 11,
    bg: "#fff",
  },
  {
    id: 7,
    icon: "💻",
    title: "Painting Service Standard Projection",
    date: "9 janv. 2025",
    sources: 7,
    bg: "#fff",
  },
  {
    id: 8,
    icon: "🎲",
    title: "Reversing the Transaction N°24",
    date: "19 janv. 2025",
    sources: 2,
    bg: "#fff",
  },
  {
    id: 9,
    icon: "💾",
    title: "Accounting for ABC Bank Contract",
    date: "7 déc. 2024",
    sources: 1,
    bg: "#fff",
  },
  {
    id: 10,
    icon: "💡",
    title: "Improving Musharaka Standard...",
    date: "5 déc. 2024",
    sources: 7,
    bg: "#fff",
  },
];

const Assistant = () => {
  const [view, setView] = useState("grid");
  const [sort, setSort] = useState("Les plus récents");

  return (
    <div className={`bg-gray-200 w-full flex `}>
      <Menu />
      <div className="grow text-white p-8">
        {/* Title & Actions */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-semibold text-gray-900">
            ChatBot Assistant
          </h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setView("grid")}
                className={`${
                  view === "grid" ? "bg-[#2E2F33]" : ""
                } p-2 rounded`}
              >
                <ViewGridIcon className="h-6 w-6" />
              </button>
              <button
                onClick={() => setView("list")}
                className={`${
                  view === "list" ? "bg-[#2E2F33]" : ""
                } p-2 rounded`}
              >
                <ViewListIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="relative">
              <button className="flex items-center space-x-1 px-3 py-2 bg-[#2E2F33] rounded-full">
                <span>{sort}</span>
                <ChevronDownIcon className="h-5 w-5" />
              </button>
              {/* Dropdown would go here */}
            </div>
          </div>
        </div>

        {/* Notebook Grid/List */}
        <div
          className={`${
            view === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              : ""
          } mt-16 `}
        >
          {" "}
          {notebooks.map((nb) => (
            <Link to="/Assistant/Chat">
              <div
                key={nb.id}
                className="relative rounded-lg p-4 h-48 hover:cursor-pointer hover:bg-gray-300 bg-white "
              >
                <div className="absolute top-4 right-4">
                  <DotsVerticalIcon className="h-5 w-5 text-gray-400 hover:text-white" />
                </div>
                <div className="text-4xl mb-4">{nb.icon}</div>
                <h2 className="text-lg font-medium leading-snug text-gray-900">
                  {nb.title}
                </h2>
                <p className="mt-2 text-sm text-gray-900">
                  {nb.date} · {nb.sources} source{nb.sources !== 1 ? "s" : ""}
                </p>
              </div>
            </Link>
          ))}
          <Link to="/Assistant/Chat">
            <div className="relative rounded-lg p-4 h-48 bg-white flex justify-center items-center hover:bg-gray-300 hover:cursor-pointer">
              <h2 className="text-lg font-medium leading-snug text-gray-900 ">
                {" "}
                + Create
              </h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Assistant;
