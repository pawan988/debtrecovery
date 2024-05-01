import React, { useState, useRef } from "react";
import { useQuery } from "react-query";
import LoaderComponent from "../../../component/Loader/Loader";
import Header from "../../../component/header/Header";
import DataUploadHeader from "./DataUploadHeader";
import DownloadExcel from "../../../component/downloadExcel/DownloadExcel";
import FileUpload from "../../../component/fileUpload/FileUpload";
import Drawer from "../../../component/drawer/Drawer";

import Pagination from "../../../component/loansTable/Pagination";
import axios from "axios";
const DataUpload = () => {
  const fileInputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [isOpen, setIsOpen] = useState(false);
  const [queryData, setQueryData] = useState([]);
  const [loanData, setLoanData] = useState([
    {
      id: 1,
      loans_detail: "Loan 1",
      payment_detail: "$1000",
      case_details: "Case A",
      field_agent_pincode_mapping: "12345",
    },
    {
      id: 2,
      loans_detail: "Loan 2",
      payment_detail: "$1500",
      case_details: "Case B",
      field_agent_pincode_mapping: "23456",
    },
    {
      id: 3,
      loans_detail: "Loan 3",
      payment_detail: "$800",
      case_details: "Case C",
      field_agent_pincode_mapping: "34567",
    },
    {
      id: 4,
      loans_detail: "Loan 4",
      payment_detail: "$2000",
      case_details: "Case D",
      field_agent_pincode_mapping: "45678",
    },
    {
      id: 5,
      loans_detail: "Loan 5",
      payment_detail: "$1200",
      case_details: "Case E",
      field_agent_pincode_mapping: "56789",
    },
    {
      id: 1,
      loans_detail: "Loan 6",
      payment_detail: "$900",
      case_details: "Case F",
      field_agent_pincode_mapping: "67890",
    },
    {
      id: 2,
      loans_detail: "Loan 7",
      payment_detail: "$1800",
      case_details: "Case G",
      field_agent_pincode_mapping: "78901",
    },
    {
      id: 3,
      loans_detail: "Loan 8",
      payment_detail: "$1100",
      case_details: "Case H",
      field_agent_pincode_mapping: "89012",
    },
    {
      id: 4,
      loans_detail: "Loan 9",
      payment_detail: "$2500",
      case_details: "Case I",
      field_agent_pincode_mapping: "90123",
    },
    {
      id: 5,
      loans_detail: "Loan 10",
      payment_detail: "$1400",
      case_details: "Case J",
      field_agent_pincode_mapping: "01234",
    },
  ]);

  const { isLoading, data, isError, queryError, isFetching } = useQuery(
    "super-heroes",
    () => {
      return axios.get("https://dummyjson.com/users");
    },
    {
      cacheTime: 5000,
    }
  );
  console.log("data ===>>>", data?.data?.users);
  console.log("isFetching ===>>>", isFetching);
  if (isLoading) {
    return <LoaderComponent />;
  }
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filteredData = loanData.filter((item) => {
      return (
        item.loans_detail.toLowerCase().includes(value.toLowerCase()) ||
        item.payment_detail.toLowerCase().includes(value.toLowerCase()) ||
        item.case_details.toLowerCase().includes(value.toLowerCase()) ||
        item.field_agent_pincode_mapping
          .toLowerCase()
          .includes(value.toLowerCase())
      );
    });
    setLoanData(filteredData);
  };
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setCurrentPage(1);
  };
  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const currentItems = loanData.slice(indexOfFirstItem, indexOfLastItem);

  const handleFileUpload = (selectedFile) => {
    setFile(selectedFile);
  };

  return (
    <div className="p-4 rounded-lg dark:border-gray-700 w-full">
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}></Drawer>
      <Header
        handleSearch={handleSearch}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
      <div className="mt-5 md:mt-12">
        <DataUploadHeader />
      </div>

      <div className="mt-16 relative overflow-x-auto sm:rounded-lg">
        <table className="w-full text-left rtl:text-right border-collapse">
          <thead className="text-xl text-gray-700  border-b-2">
            <tr>
              <th scope="col" className="px-6 py-3 border-b">
                <div className="flex items-center justify-center font-medium">
                  Loan Details
                </div>
              </th>
              <th scope="col" className="px-6 py-3 border-b">
                <div className="flex items-center justify-center font-medium">
                  Payment Details
                </div>
              </th>
              <th scope="col" className="px-6 py-3 border-b">
                <div className="flex items-center justify-center font-medium">
                  Case Details
                </div>
              </th>
              <th scope="col" className="px-6 py-3 border-b">
                <div className="flex items-center justify-center font-medium">
                  Field Agent Pincode Mapping
                </div>
              </th>
              <th scope="col" className="px-6 py-3 border-b">
                <div className="flex items-center justify-center font-medium">
                  Document Upload
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems?.map((items, index) => {
              return (
                <tr
                  key={index}
                  className={`border-b hover:bg-gray-200 dark:hover:bg-gray-600 `}
                >
                  <td className="px-6 py-4 text-lg content-center">
                    <div className="flex justify-center">
                      <p className="text-lg font-sm">{items?.loans_detail}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-lg content-center">
                    <div className="flex justify-center">
                      <p className="text-lg font-sm">{items?.payment_detail}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-lg content-center">
                    <div className="flex justify-center">
                      <p className="text-lg font-sm">{items?.case_details}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-lg content-center">
                    <div className="flex justify-center">
                      <p className="text-lg font-sm">
                        {items?.field_agent_pincode_mapping}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-lg content-center">
                    <div className="flex justify-center">
                      <p className="text-lg font-sm">
                        {items?.field_agent_pincode_mapping}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 relative">
                    <p></p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex flex-row justify-end mt-2 py-5 pr-4 gap-8">
          <DownloadExcel data={currentItems} title="Download Excel" />
          <FileUpload onFileChange={handleFileUpload} title="Upload Excel" />
        </div>
        <div className="flex flex-row justify-end mt-2 py-5 pr-4 gap-8">
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            indexOfLastItem={indexOfLastItem}
            loanData={loanData}
            prevPage={prevPage}
            nextPage={nextPage}
            rowsPerPage={rowsPerPage}
            handleRowsPerPageChange={handleRowsPerPageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default DataUpload;
