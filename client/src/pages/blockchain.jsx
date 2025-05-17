import React, { useEffect, useState } from "react";

import Menu from "../components/menu";
import { motion } from "framer-motion";
import first from "../assets/Blockchain/first.png";
import second from "../assets/Blockchain/second.png";
import third from "../assets/Blockchain/third.png";
import fourth from "../assets/Blockchain/fourth.png";
import BlockchainFilters from "../components/BlockchainFilters";

const steps = [
  {
    id: 1,
    title: "Your Bank",
    description:
      "Design the product’s mechanics (Murabaha, Ijarah, etc.), perform internal Shariah compliance and risk assessments, and prepare draft contracts.",
    delay: 3,
    pos: 1,
    img: first,
  },
  {
    id: 2,
    title: "Internal Sharia'ah Board",
    description:
      "Submit your complete product dossier to the National Shariah Board to obtain a formal Shariah compliance certificate.",
    delay: 6,
    pos: 0,
    img: second,
  },
  {
    id: 3,
    title: "National Sharia'ah Board",
    description:
      "Present the certified dossier and supporting documents to the Central Bank for official approval to launch the product.",
    delay: 9,
    pos: 1,
    img: third,
  },
  {
    id: 4,
    title: "Central Bank",
    description:
      "Train staff, integrate the product into your IT systems, and launch targeted marketing to onboard clients.",
    delay: 12,
    pos: 0,
    img: fourth,
  },
];

function Blockchain() {
  const [visibleStep, setVisibleStep] = useState(0);

  useEffect(() => {
    steps.forEach((step, index) => {
      setTimeout(() => {
        setVisibleStep(index + 1);
      }, step.delay * 1000);
    });
  }, []);
  return (
    <div className={`bg-white-bluish w-full flex`}>
      <Menu />
      <div className={`grow flex flex-col justify-start`}>
        <BlockchainFilters />
        <div className="relative flex flex-row flex-1 justify-evenly items-center mt-16">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex flex-col w-[20%] ${
                step.pos === 1 ? "place-self-start" : "place-self-end"
              }`}
            >
              <motion.div
                initial={{ opacity: 0.3 }}
                animate={{ opacity: visibleStep >= index + 1 ? 1 : 0.3 }}
                transition={{ duration: 1 }}
                className={`flex ${
                  step.pos === 1 ? "flex-col" : "flex-col-reverse"
                } items-center gap-4`}
              >
                <img src={step.img} alt={step.title} className="w-64 mb-2" />
                <div className="flex flex-col h-full text-center">
                  <h3 className="text-md font-semibold">{step.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {step.description}
                  </p>
                </div>
                <motion.div
                  className={`w-6 h-6 rounded-full border-4 ${
                    visibleStep >= index + 1
                      ? "border-mygreen bg-mygreen"
                      : "border-gray-400 bg-white"
                  }`}
                  initial={{ scale: 0.5 }}
                  animate={{ scale: visibleStep >= index + 1 ? 1 : 0.5 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </div>
          ))}

          {/* Timeline */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-evenly items-center w-full transform -translate-y-1/2">
            {steps.map((step, index) => (
              <div key={step.id} className="relative flex items-center w-[20%]">
                {/* Connecting Dots */}
                {index > 0 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: visibleStep >= index + 1 ? "100%" : "0%",
                    }}
                    transition={{ duration: 1 }}
                    className="absolute h-[4px] top-1/2 left-[-50%] w-full transform -translate-y-1/2 flex justify-between items-center"
                  >
                    {Array.from({ length: 10 }).map((_, dotIndex) => (
                      <div
                        key={dotIndex}
                        className={`w-2 h-2 rounded-full ${
                          visibleStep >= index + 1
                            ? "bg-mygreen bg-opacity-30 shadow-[2px] shadow-blur-[1px]"
                            : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blockchain;
