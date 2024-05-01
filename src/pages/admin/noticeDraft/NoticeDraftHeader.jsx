import React, { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { LuUploadCloud } from "react-icons/lu";
import DownloadExcel from "../../../component/downloadExcel/DownloadExcel";
import FileUpload from "../../../component/fileUpload/FileUpload";
const NoticeDraftHeader = () => {
  const [file, setFile] = useState(null);
  const handleFileUpload = (selectedFile) => {
    setFile(selectedFile);
  };
  return (
    <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center px-0 md:px-4">
      <div className="">
        <h2 className="font-medium text-3xl text-black-500">Notice Drafts</h2>
      </div>
      <div className="flex flex-col gap-2 md:gap-12 md:flex md:flex-row">
        <button className="bg-[#401f78] text-white px-6 py-3 rounded-full flex items-center space-x-2">
          <DownloadExcel data={[{ name: "" }]} title="Download Sample Excel" />
        </button>
        <button className="bg-primary text-white px-6 py-3 rounded-full flex items-center space-x-2">
          {/* <LuUploadCloud size={25} />
          <span className="text-xl">Add Notice Type</span> */}
          <FileUpload onFileChange={handleFileUpload} title="Add Notice Type" />
        </button>
        <button className="bg-primary text-white px-6 py-3 rounded-full flex items-center space-x-2">
          {/* <LuUploadCloud size={25} />
          <span className="text-xl">Upload Drafts</span> */}
          <FileUpload onFileChange={handleFileUpload} title="Upload Drafts" />
        </button>
      </div>
    </div>
  );
};

export default NoticeDraftHeader;
