import React from "react";
import * as XLSX from "xlsx";
import { FiDownload } from "react-icons/fi";

const DownloadExcel = ({ data, title }) => {
  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "data.xlsx");
  };

  return (
    <div>
      <button
        className="bg-[#401f78] text-white px-6 py-3 rounded-full flex items-center space-x-2"
        onClick={handleDownload}
      >
        <FiDownload size={25} />
        <span className="text-xl">{title}</span>
      </button>
    </div>
  );
};

export default DownloadExcel;
