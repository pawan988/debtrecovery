import React from "react";
import { LuSearch } from "react-icons/lu";

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="w-full">
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative sm:w-3/5 w-full">
          <input
            type="text"
            id="default-search"
            className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:outline-none"
            placeholder="Search"
            required
            onChange={handleSearch}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <LuSearch className="text-gray-400 mr-2" size={25} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
