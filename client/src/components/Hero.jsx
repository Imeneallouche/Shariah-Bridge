import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="h-screen w-screen bg-white flex flex-col">
      {/* Navbar */}
      <header className="flex items-center justify-between py-6 px-8">
        <div className="text-2xl font-bold text-gray-900">ShariahBridge</div>
        <nav className="space-x-8 font-medium text-gray-600">
          <a href="#" className="hover:text-gray-900">
            Home
          </a>
          <a href="#" className="hover:text-gray-900">
            About Us
          </a>
          <a href="#" className="hover:text-gray-900">
            Services
          </a>
          <a href="#" className="hover:text-gray-900">
            Contact
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <Link to="/Assistant" className="text-blue-500 hover:underline">
            Login
          </Link>
          <Link
            to="/Assistant"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Become a member <span className="ml-2">→</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-1 items-center justify-between px-16">
        {/* Left Text Content */}
        <div className="flex-1">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Sharia Bridge
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Shariah Bridge is an AI-and-blockchain-powered platform designed to
            streamline and accelerate the validation of Islamic finance products
            under AAOIFI standards.
            <br />
            What once took months of paperwork and layered approvals now
            completes in minutes, without sacrificing rigor or transparency.{" "}
          </p>
          <div className="mt-8 flex space-x-4">
            <button className="bg-blue-500 text-white px-16 py-3 rounded-lg hover:bg-blue-600 transition">
              Sign Up{" "}
            </button>
            <button className="border border-blue-500 text-blue-500 px-12 py-3 rounded-lg hover:bg-blue-50 transition">
              Sign In{" "}
            </button>
          </div>
        </div>

        {/* Right Image Content */}
        <div className="relative flex-1 flex justify-center items-center">
          {/* Background circle */}
          {/* Phone image */}
          <img
            src={require("../assets/hero.png")}
            alt="App screenshot"
            className="w-[600px]"
          />
        </div>
      </main>
    </div>
  );
};

export default Hero;
