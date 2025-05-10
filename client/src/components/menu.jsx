import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Dashboard", src: "user", Path: "/Dashboard" },
    {
      title: "Contracts Generation",
      src: "user",
      Path: "/Generation",
      gap: true,
    },
    { title: "Contracts Validation", src: "user", Path: "/Validation" },
    { title: "Blockchain", src: "user", Path: "/Blockchain" },
    { title: "Profile", src: "user", Path: "/Profile" },
    { title: "Log Out", src: "logout", Path: "/", gap: true },
  ];

  return (
    <div className="flex">
      <div
        className={` bg-gradient-to-b from-indigo-700 to-indigo-700 h-screen p-5  pt-8 relative duration-300 SideBar ${
          open ? "w-64" : "w-20 "
        }`}
      >
        <img
          src={require("../assets/SideBar/control.png")}
          alt="controller"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-indigo-800
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={require("../assets/SideBar/user.png")}
            alt="Logo"
            className={`cursor-pointer duration-500  ${
              open && "rotate-[360deg]"
            }`}
          />
        </div>

        <ul className="pt-10 flex flex-col justify-between">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer text-gray-300 text-sm items-center gap-x-4 hover:bg-gray-400/10
              ${Menu.gap ? "mt-10" : "mt-2"} ${
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
