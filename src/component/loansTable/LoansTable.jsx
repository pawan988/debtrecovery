import React, { useState } from "react";
import "./LoansTable.css";
import AllCases from "./AllCases";
import TodayFollowUps from "./TodaysFollowUps";
import Drawer from "../drawer/Drawer";
const LoansTable = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}></Drawer>
      <TodayFollowUps setIsOpen={setIsOpen} isOpen={isOpen} />
      <div className="border border-gray-300"></div>
      <AllCases />
    </div>
  );
};

export default LoansTable;
