import React, { useState } from "react";
import Menu from "../components/menu";
import NewProductInformation from "../components/NewProductInformation";
import { Link } from "react-router-dom";

const tiers = [
  { id: 1, label: "Step 1: Internal Shariah Board" },
  { id: 2, label: "Step 2: National Shariah Board" },
  { id: 3, label: "Step 3: Central Bank" },
];

const plans = [
  {
    title: "Internal Shariah Board Documents",
    popular: false,
    contracts: [
      "Product Concept & Structure",
      "Standard Contracts",
      "Operational Flow",
    ],
  },
  {
    title: "National Shariah Board Documents",
    popular: false,
    price: "$6000",
    contracts: [
      "ISB Approval Certificate",
      "Accounting Treatement",
      "Product Descriptive Sheet",
    ],
  },
  {
    title: "Central Bank Documents",
    popular: false,
    price: "",
    contracts: ["Regulatory Compliance Review"],
  },
];

export default function NewProduct() {
  const [selectedTier, setSelectedTier] = useState(6000);

  return (
    <div className="flex h-screen">
      {/* Navbar */}
      <Menu />

      {/* Header */}
      <div className="flex-1">
        <NewProductInformation />

        {/* Pricing Slider */}
        <div className="flex justify-center items-center space-x-8 mb-12 mt-16">
          {tiers.map((tier) => (
            <div key={tier.id} className="flex flex-col items-center">
              <div
                className={`w-3 h-3 rounded-full cursor-pointer transition-colors 
                ${selectedTier === tier.id ? "bg-indigo-600" : "bg-gray-300"}`}
                onClick={() => setSelectedTier(tier.id)}
              />
              <span
                className={`mt-2 text-sm cursor-pointer ${
                  selectedTier === tier.id ? "text-indigo-600" : "text-gray-500"
                }`}
              >
                {tier.label}
              </span>
            </div>
          ))}
        </div>

        {/* Plans */}
        <div className="px-8 grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">
                  {plan.title}
                </h2>
                {plan.popular && (
                  <span className="px-2 py-1 text-xs font-medium text-indigo-600 bg-indigo-100 rounded-full">
                    Popular
                  </span>
                )}
              </div>

              {/* Features */}
              <div className="mt-6 flex-1">
                <ul className="space-y-4 text-gray-500 text-sm">
                  {plan.contracts.map((contract, idx) => (
                    <li key={idx} className="flex flex-col">
                      <span>{contract}</span>
                      <div className="mb-16">
                        <label
                          htmlFor="multiple_files"
                          className="block text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Upload multiple files
                        </label>
                        <input
                          id="multiple_files"
                          type="file"
                          multiple
                          className="w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-500 focus:outline-none dark:text-gray-400 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400"
                        />
                      </div>{" "}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        {/* Action Button */}
        <div className="flex items-center justify-center">
          <Link
            to="/Products"
            className="text-center mt-6 w-96 py-3 bg-indigo-100 text-indigo-600 font-medium rounded-lg hover:text-indigo-700 hover:bg-indigo-200"
          >
            Submit
          </Link>
        </div>
      </div>
    </div>
  );
}
