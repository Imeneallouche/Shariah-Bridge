import React from "react";

import Menu from "../components/menu";
import Prompt from "../components/prompt";

export default function ReverseTransaction() {
  return (
    <div className={`bg-white-bluish w-full flex `}>
      <Menu />
      <div className={`grow flex flex-col justify-start`}>
        <div className="w-full h-24 px-8 flex justify-between items-center">
          <h1 className="text-gray-800 font-semibold text-xl">
            Reverse Transactions
          </h1>
          <div></div>
          <div className="flex gap-4 justify-center items-center hover:cursor-pointer">
            <img
              className="w-16 h-16 border border-black rounded-full"
              src={require("../assets/bank.png")}
              alt=""
            />
            <p className="text-black">ABC Bank</p>
          </div>
        </div>
        <div className="h-full w-full flex flex-col p-5">
          <div className="flex-1 flex justify-center items-center">
            <img
              className="w-96"
              src={require("../assets/chatbot.png")}
              alt=""
            />
          </div>
          <Prompt />
        </div>
      </div>
    </div>
  );
}
