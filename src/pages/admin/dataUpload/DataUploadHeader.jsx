import React from "react";
import { PiSortDescending } from "react-icons/pi";
import { FiFilter } from "react-icons/fi";

const DataUploadHeader = () => {
  return (
    <div className="flex  flex-col gap-3 md:flex-row md:justify-between md:items-center px-0 md:px-4">
      <div className="">
        <h2 className="font-medium text-3xl text-black-500">Data Upload</h2>
      </div>
      <div className="flex gap-2 md:gap-12">
        <div className="flex items-center gap-2 cursor-pointer">
          <p className="text-xl font-normal text-primary">Api Documentation</p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <PiSortDescending className="text-gray-600" size={25} />
          <p className="text-xl font-normal text-gray-600">Sort</p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <FiFilter className="text-gray-500" size={22} />
          <p className="text-xl font-normal text-gray-600">Filter</p>
        </div>
      </div>
    </div>
  );
};

export default DataUploadHeader;
