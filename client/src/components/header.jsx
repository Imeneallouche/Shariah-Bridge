import SideBar from "../components/sidebar";
import { useNavigate } from "react-router-dom";
import React from "react";
export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="bg-white h-screen text-black flex flex-col">
      {/* Header */}
      <SideBar />
      {/* Divider under header */}
      <div className="border-t border-indigo-800" />
      {/* Main Content */}
      <div className="flex flex-1">
        {/* Left Panel */}
        <div className="w-1/2 text-xl flex flex-col justify-center items-start px-16">
          <div className="mb-8">
            <h1 className="text-6xl font-extrabold leading-tight">
              <span className="block text-indigo-500">Al Buraq</span>
            </h1>
          </div>
          <h2>Al Buraq is the next-generation AI + blockchain platform.</h2>
          <br />
          <h2>
            It intelligently maps bespoke client requests to AAOIFI standards,
            auto-generates and collaboratively validates Shariah-compliant
            contracts, and leverages consortium blockchain governance and
            explainable AI to accelerate multi-layer approvals.
          </h2>

          <div className="mt-12 flex space-x-4">
            <button
              onClick={() => navigate("/simulate")}
              className="py-4 px-16 bg-indigo-500 rounded flex items-center text-white font-semibold justify-center hover:bg-purple-500 transition"
            >
              Sign Up
            </button>

            <button
              onClick={() => navigate("/documentation")}
              className="py-4 px-16 bg-white text-indigo-600 border-2 border-indigo-600 rounded hover:border-purple-500 hover:text-purple-500 transition font-semibold"
            >
              Sing In
            </button>
          </div>
        </div>
        <div className="mb-4 flex flex-col justify-end">
          <div className="w-16 h-24 flex flex-col items-center justify-center border border-indigo-500 rounded-full">
            <svg
              className="w-6 h-6 text-indigo-500 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        {/* Right Panel */}
        <div className="w-2/5 h-5/6 flex justify-center items-center">
          <img
            src={require("../assets/cover.png")}
            alt="Designer Illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
