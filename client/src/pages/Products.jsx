import React from "react";
import Menu from "../components/menu";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const leadsData = [
  {
    name: "House Reconstruction Service",
    id: "202500001",
    description: "islamify house painting and house reconstruction",
    status: "Rejected",
    date: "12 Jan 2023",
  },
  {
    name: "Omra Service",
    id: "202500002",
    description: "islamify Omra Service for one or a group of people in family",
    status: "Pending_Validation",
    date: "4 Feb 2023",
  },
  {
    name: "Hadj Service",
    id: "202500003",
    description: "islamify Hadj Service for one or a group of people in family",
    status: "Pending_Validation",
    date: "18 Mar 2023",
  },
  {
    name: "Automibile Product",
    id: "202500004",
    description: "Islamify buying an autombile as a product",
    status: "Validated",
    date: "27 Apr 2023",
  },
  {
    name: "House Product",
    id: "202500005",
    description: "Islamify buying an a house as a product",
    status: "Validated",
    date: "18 May 2023",
  },
  {
    name: "House Reconstruction Service",
    id: "202500006",
    description: "islamify house painting and house reconstruction",
    status: "Rejected",
    date: "12 Jan 2023",
  },
  {
    name: "Omra Service",
    id: "202500007",
    description: "islamify Omra Service for one or a group of people in family",
    status: "Pending_Validation",
    date: "4 Feb 2023",
  },
  {
    name: "Hadj Service",
    id: "202500008",
    description: "islamify Hadj Service for one or a group of people in family",
    status: "Pending_Validation",
    date: "18 Mar 2023",
  },
  {
    name: "Automibile Product",
    id: "202500009",
    description: "Islamify buying an autombile as a product",
    status: "Validated",
    date: "27 Apr 2023",
  },
  {
    name: "House Product",
    id: "202500010",
    description: "Islamify buying an a house as a product",
    status: "Validated",
    date: "18 May 2023",
  },
];

const statusStyles = {
  Validated: "bg-green-100 text-green-800",
  Pending_Validation: "bg-yellow-100 text-yellow-800",
  Rejected: "bg-blue-100 text-blue-800",
};

export default function Products() {
  const navigate = useNavigate();

  function handleStatusCheck() {
    navigate("/Blockchain");
  }
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Menu />
      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6">
          Financial Products
        </h1>
        <div className="flex items-center justify-between mb-4 mt-16">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Type to Search"
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <svg
                className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M5 11a6 6 0 1112 0 6 6 0 01-12 0z"
                />
              </svg>
            </div>
            <button className="bg-black text-white px-4 py-2 rounded-lg">
              Filter
            </button>
          </div>
          <Link to="/Products/New">
            <button className="bg-black text-white px-4 py-2 rounded-lg">
              + New Product
            </button>
          </Link>
        </div>

        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Product ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Product Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Validation Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Release Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {leadsData.map((lead, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-gray-50 hover:cursor-pointer"
                  onClick={handleStatusCheck}
                >
                  <td className="px-6 py-4 text-gray-700 cursor-pointer">
                    {lead.id}
                  </td>
                  <td className="px-6 py-4 text-gray-700">{lead.name}</td>
                  <td className="px-6 py-4 text-gray-700">
                    {lead.description}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 inline-flex text-xs font-semibold rounded-full ${
                        statusStyles[lead.status]
                      }`}
                    >
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{lead.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
