import React, { useState } from "react";
import { defaultLocale } from "yup";
import Header from "../../../component/header/Header";
import Drawer from "../../../component/drawer/Drawer";

const LitigationDashBorad = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };
  return (
    <div className="p-4 rounded-lg dark:border-gray-700 w-full">
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}></Drawer>
      <Header
        handleSearch={handleSearch}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
      <div class="grid grid-cols-4 gap-x-16 gap-y-8 py-12">
        <div className="rounded-lg bg-gray-200 flex justify-center flex-col items-center h-20 py-16">
          <div>
            <p>TOTAL LOANS</p>
          </div>
          <div>
            <p className="text-lg font-medium">42</p>
          </div>
        </div>
        <div className="rounded-lg bg-gray-200 flex flex-col justify-center items-center h-20 py-16">
          <div>
            <p>TOTAL CASES</p>
          </div>
          <div>
            <p className="text-lg font-medium">32</p>
          </div>
        </div>
        <div className="rounded-lg bg-gray-200 flex justify-center flex-col items-center h-20 py-16">
          <div>
            <p>TOTAL LOANS ON HOLD</p>
          </div>
          <div>
            <p className="text-lg font-medium">11</p>
          </div>
        </div>
        <div className="rounded-lg bg-gray-200 flex justify-center items-center flex-col h-20 py-16">
          <div>
            <p>TOTAL CASES ON HOLD</p>
          </div>
          <div className="flex">
            <p className="text-lg font-medium">42</p>
          </div>
        </div>
        <div className="rounded-lg bg-gray-200 flex justify-center items-center flex-col h-20 py-16">
          <div>
            <p>TOTAL LOANS CLOSED</p>
          </div>
          <div>
            <p className="text-lg font-medium">0</p>
          </div>
        </div>
        <div className="rounded-lg bg-gray-200 flex justify-center items-center flex-col h-20 py-16">
          <div>
            <p>TOTAL CASES CLOSED</p>
          </div>
          <div>
            <p className="text-lg font-medium">0</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-2xl font-semibold">Process Steps</p>
      </div>
      <div className="flex justify-between mt-12 px-12">
        <div className="w-[25%]">
          <div className="flex justify-center">
            <p className="text-2xl font-semibold">100 - Cheque Banking</p>
          </div>
          <div className="flex justify-between mt-8">
            <p className="text-2xl">Completen In</p>
            <div>
              <p className="text-xl">15 cases</p>
              <p className="text-xl">0 cases</p>
            </div>
          </div>
        </div>
        <div className="w-[25%]">
          <div className="flex justify-center">
            <p className="text-2xl font-semibold">100 - Cheque Banking</p>
          </div>
          <div className="flex justify-between mt-8">
            <p className="text-2xl">Completen In</p>
            <div>
              <p className="text-xl">15 cases</p>
              <p className="text-xl">0 cases</p>
            </div>
          </div>
        </div>
        <div className="w-[25%]">
          <div className="flex justify-center">
            <p className="text-2xl font-semibold">100 - Cheque Banking</p>
          </div>
          <div className="flex justify-between mt-8">
            <p className="text-2xl">Completen In</p>
            <div>
              <p className="text-xl">15 cases</p>
              <p className="text-xl">0 cases</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LitigationDashBorad;
