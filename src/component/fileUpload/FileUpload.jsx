import React, { useRef } from "react";
import { LuUploadCloud } from "react-icons/lu";

const FileUpload = ({ onFileChange, title }) => {
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    onFileChange(selectedFile);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <input
        ref={fileInputRef}
        id="fileInput"
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileUpload}
        style={{ display: "none" }}
      />
      <button
        className="bg-primary text-white px-6 py-3 rounded-full flex items-center space-x-2"
        onClick={handleButtonClick}
      >
        <LuUploadCloud size={25} />
        <span className="text-xl">{title}</span>
      </button>
    </div>
  );
};

export default FileUpload;
