import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Dashboard", src: "dashboard", Path: "/Dashboard" },
    {
      title: "Accounting Assistant",
      src: "accountingassistant",
      Path: "/AccountingAssistant",
    },
    {
      title: "Reverse Transaction",
      src: "reversetransaction",
      Path: "/ReverseTransaction",
    },
    {
      title: "Standard Review",
      src: "standardreview",
      Path: "/StandardReview",
    },
    {
      title: "Contracts Generator",
      src: "contractgenerator",
      Path: "/ContractsGenerator",
    },
    { title: "Contracts", src: "contracts", Path: "/Contracts" },
    { title: "Blockchain", src: "blockchain", Path: "/Blockchain" },
    { title: "Profile", src: "user", Path: "/Profile" },
    { title: "Log Out", src: "logout", Path: "/", gap: true },
  ];

  return (
    <div className="flex">
      <div
        className={`flex flex-col bg-gradient-to-b from-purple-700 to-purple-700 h-screen px-4 py-16 relative duration-300 SideBar ${
          open ? "w-80" : "w-24 "
        }`}
      >
        <img
          src={require("../assets/SideBar/control.png")}
          alt="controller"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-purple-800
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex  rounded-md cursor-pointer text-gray-300 text-sm items-center gap-x-4"
          >
            <img
              src={require("../assets/logo.png")}
              alt="Logo"
              className={`cursor-pointer duration-500  ${
                open && "rotate-[360deg]"
              }`}
            />
          </a>
        </div>

        <ul className="pt-10 flex flex-col flex-1 justify-between">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer text-gray-300 text-sm items-center gap-x-4 hover:bg-gray-400/10
              ${Menu.gap ? "mt-16" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              {Menu.title === "Aide" ? (
                <a
                  href={Menu.Path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex  rounded-md cursor-pointer text-gray-300 text-sm items-center gap-x-4"
                >
                  <img
                    src={require(`../assets/SideBar/${Menu.src}.png`)}
                    alt="icon"
                    className="w-6 h-6"
                  />
                  <span
                    className={`${
                      !open && "hidden"
                    } text-white text-base origin-left duration-200`}
                  >
                    {Menu.title}
                  </span>
                </a>
              ) : (
                <Link
                  to={Menu.Path}
                  className="w-full flex  rounded-md cursor-pointer text-gray-300 text-sm items-center gap-x-4 "
                >
                  <img
                    src={require(`../assets/SideBar/${Menu.src}.png`)}
                    alt="icon"
                    className="w-6 h-6"
                  />
                  <span
                    className={`${
                      !open && "hidden"
                    } text-white text-base origin-left duration-200`}
                  >
                    {Menu.title}
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
