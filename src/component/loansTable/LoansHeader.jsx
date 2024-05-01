import React from "react";
import { FiDownload } from "react-icons/fi";
import { PiSortDescending } from "react-icons/pi";
import { FiFilter } from "react-icons/fi";

const LoansHeader = () => {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center px-0 md:px-4">
      <div className="">
        <h6 className="font-normal text-2xl text-gray-600">Loans (45)</h6>
      </div>
      <div className="flex gap-2 md:gap-12">
        <div className="flex items-center gap-2 cursor-pointer">
          <FiDownload className="text-gray-500" size={25} />
          <p className="text-xl font-normal text-gray-600">Download</p>
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

export default LoansHeader;
