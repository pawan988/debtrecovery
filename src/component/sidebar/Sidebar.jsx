import { useState, useRef, useEffect } from "react";
import { MdOutlineDashboard, MdAccountCircle } from "react-icons/md";
import "../../App.css";
import {
  BsChatLeftDotsFill,
  BsCalendar2DateFill,
  BsServer,
} from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { RiDraftLine } from "react-icons/ri";
import { CiDatabase } from "react-icons/ci";
import { FiUpload } from "react-icons/fi";
import { PiShoppingBagOpenDuotone } from "react-icons/pi";
import { VscNotebook } from "react-icons/vsc";

import { MdOutlineAdminPanelSettings } from "react-icons/md";

import { IoAnalytics } from "react-icons/io5";

const menus = [
  { title: "Dashboard", src: "", icon: <MdOutlineDashboard size={35} /> },
  { title: "Inbox", src: "", icon: <BsChatLeftDotsFill size={30} /> },
  { title: "Accounts", src: "", icon: <MdAccountCircle size={30} /> },
  { title: "Schedule", src: "", icon: <BsCalendar2DateFill size={30} /> },
  {
    title: "Services",
    src: "",
    icon: <BsServer size={35} />,
    subMenus: [
      { title: "Service1", src: "", cName: "sub-nav" },
      { title: "Service2", src: "", cName: "sub-nav" },
      { title: "Service3", src: "", cName: "sub-nav" },
    ],
  },
];
const Sidebar = () => {
  const location = useLocation();
  const userName = localStorage.getItem("user_name");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isShowToolTip, setIsShowToolTip] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setOpen(!open);
  };
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const pathname = location.pathname;
    const foundIndex = menus.findIndex((menu) => menu.path === pathname);
    setSelectedItem(foundIndex !== -1 ? foundIndex : 0);
  }, [location.pathname]);

  const initiate = () => {};

  const handleSignOut = async () => {};

  const menus = [
    // { title: "Dashboard", path: "/dashboard", icon: <FiHome size={25} /> },
    { title: "Portfolio", path: "/", icon: <CiDatabase size={30} /> },
    {
      title: "Communication",
      path: "/communication",
      icon: <SiHomeassistantcommunitystore size={25} />,
    },
    {
      title: "Notice Drafts",
      path: "/notice-drafts",
      icon: <RiDraftLine size={25} />,
    },
    {
      title: "Data Upload",
      path: "/data-upload",
      icon: <FiUpload size={25} />,
    },
    {
      title: "Admin",
      path: "/admin",
      icon: <MdOutlineAdminPanelSettings size={28} />,
    },
    {
      title: "Bulk Processes",
      path: "/bulk-processes",
      icon: <PiShoppingBagOpenDuotone size={25} />,
    },
    {
      title: "Litigation Dash..",
      path: "/litigation-dashboard",
      icon: <VscNotebook size={25} />,
    },
    {
      title: "Automation Int.",
      path: "/automation-int",
      icon: <IoAnalytics size={25} />,
    },
  ];

  const handleMenuItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <>
      <div
        ref={sidebarRef}
        className="bg-primary text-gray-100 flex justify-between sm:hidden"
      >
        <a
          href="#"
          className="block p-4 text-white font-bold whitespace-nowrap truncate"
        >
          Cred Easy
        </a>

        <label
          htmlFor="menu-open"
          id="mobile-menu-button"
          className="m-2 p-2 focus:outline-none hover:text-white hover:bg-primary rounded-md"
        >
          {!open ? (
            <svg
              id="menu-open-icon"
              className="h-6 w-6 transition duration-200 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => toggleSidebar()}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              id="menu-close-icon"
              className="h-6 w-6 transition duration-200 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => toggleSidebar()}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </label>
      </div>
      <aside
        id="default-sidebar"
        class={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform duration-300 ${
          !open && "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div class="h-full  py-4 overflow-y-auto bg-primary dark:bg-primary">
          <div className="flex gap-0 mt-4 justify-center">
            <Link to="/" className="block">
              <p className="text-4xl cursor-pointer text-white">SolveEsy</p>
            </Link>
          </div>
          <div className="pr-0 pl-3">
            <ul class="space-y-2">
              {/* <li className="mt-2 text-white">
              <div className="flex gap-0 mt-8   cursor-pointer p-2">
                <p
                  className="text-xl cursor-pointer"
                  onClick={() => initiate()}
                >
                  Signin
                </p>
              </div>
            </li> */}

              {menus?.map((items, index) => {
                return (
                  <>
                    <li
                      className={`mt-12 text-white ${
                        selectedItem === index ? "text-black" : ""
                      }`}
                      key={index}
                      onClick={() => handleMenuItemClick(index)}
                    >
                      <Link to={items?.path} className="block">
                        <div
                          className={`flex gap-2 items-center cursor-pointer px-2 py-5 rounded-bl-[30px] rounded-tl-[30px] ${
                            selectedItem === index
                              ? "bg-white text-black pl-3 pt-4 pb-4"
                              : ""
                          }`}
                        >
                          {items?.icon}
                          <p className={`text-xl cursor-pointer`}>
                            {items?.title}
                          </p>
                        </div>
                      </Link>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>

        {/* <div
          className="w-full flex gap-2 absolute bottom-6 left-3  items-center cursor-pointer"
          data-tooltip-target="tooltip-default"
          onMouseEnter={() => setIsShowToolTip(true)}
          onMouseLeave={() => setIsShowToolTip(false)}
          onClick={() => handleSignOut()}
        >
          <div
            id="tooltip-default"
            role="tooltip"
            className={`absolute top-[-40px] z-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm ${
              !isShowToolTip && "opacity-0"
            } tooltip dark:bg-gray-700`}
          >
            Logout
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <FaRegUserCircle className="text-white" size={29} />
          <div className="flex justify-between w-[80%]">
            <p className="text-white text-lg font-medium">{userName}</p>
            <IoIosArrowForward
              className="text-white mt-0.5 cursor-pointer"
              size={25}
            />
          </div>
        </div> */}
      </aside>
    </>
  );
};

export default Sidebar;
