import React from "react";
import SearchBar from "../searchBar/SearchBar";
import { IoMdNotifications } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = ({ handleSearch, setIsOpen, isOpen }) => {
  return (
    <div className="flex justify-between items-center">
      <SearchBar handleSearch={handleSearch} />
      <div className="flex gap-2">
        <div className="flex items-center justify-center">
          <div class="relative">
            <IoMdNotifications
              className="text-gray-400 cursor-pointer"
              size={30}
              onClick={() => setIsOpen(!isOpen)}
            />
            <div class="absolute top-[-10px] right-0 h-4 w-4 my-1 border-2 border-white rounded-full bg-primary z-2"></div>
          </div>
        </div>
        <div className="border border-gray-400"></div>
        <Link
          to="/signin"
          className="text-gray-600 text-lg font-medium cursor-pointer"
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Header;
