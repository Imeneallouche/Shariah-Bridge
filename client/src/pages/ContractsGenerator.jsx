// ChatInterface.jsx
import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/menu";
import {
  ArrowLeftIcon,
  PaperClipIcon,
  ArrowRightIcon,
} from "@heroicons/react/outline";

const ContractsGenerator = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Menu />

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col bg-white">
        {/* Header */}
        <header className="flex items-center p-6 border-b justify-between space-x-4">
          <Link to="/Assistant">
            <ArrowLeftIcon className="h-6 w-6 text-gray-600 hover:text-gray-800" />
          </Link>
          <div className="bg-sky-100 rounded-full p-1 flex space-x-1"></div>
          <div></div>
        </header>

        {/* Content */}
        <section className="flex-1 flex flex-col items-center justify-center px-8">
          <h1 className="text-5xl font-extrabold text-gray-900 text-center">
            Generate Contracts for{" "}
            <span className="font-normal">your products ! </span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 text-center">
            Whether it is an existing or a brand new product <br /> drop it and
            we can help you out !
          </p>
        </section>

        {/* Input Bar */}
        <footer className="p-6 border-t">
          <div className="flex items-center bg-[#F2F2F2] rounded-full px-4 py-2">
            <button>
              <PaperClipIcon className="h-8 w-8 text-gray-500" />
            </button>
            <input
              type="text"
              placeholder="Please let us know how we can help!"
              className="flex-1 bg-transparent px-4 py-2 h-24 focus:outline-none placeholder-gray-500 text-gray-900"
            />
            <button className="ml-2 bg-[#C4C4C4] rounded-full p-2 hover:bg-gray-300 transition">
              <ArrowRightIcon className="h-8 w-8 text-white" />
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default ContractsGenerator;
