import React, { useState } from "react";
import LoaderComponent from "../../../component/Loader/Loader";
import Header from "../../../component/header/Header";

import Pagination from "../../../component/loansTable/Pagination";
// import ErrorBoundry from "../../../component/ErrorBoundary/ErrorBoundary";
import NoticeDraftHeader from "./NoticeDraftHeader";
import { FiDownload, FiMessageSquare } from "react-icons/fi";
import { IoEyeSharp } from "react-icons/io5";
import Drawer from "../../../component/drawer/Drawer";
import Modal from "../../../component/popup/Popup";
const NoticeDraft = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [popupIndex, setPopupIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const [loanData, setLoanData] = useState([
    {
      id: 1,
      draft_name: "lefjnhi09iienhp39u`9`eojo9fwnfnw",
      notice_type: "EFHEOFUIIHP",
      upload_date: "12-02-2011",
      author: "credheeoreo@gmailc.com",
    },
    {
      id: 2,
      draft_name: "lefjnhi09iienhp39u`9`eojo9fwnfnw",
      notice_type: "EFHEOFUIIHP",
      upload_date: "12-02-2011",
      author: "credheeoreo@gmailc.com",
    },
    {
      id: 3,
      draft_name: "lefjnhi09iienhp39u`9`eojo9fwnfnw",
      notice_type: "EFHEOFUIIHP",
      upload_date: "12-02-2011",
      author: "credheeoreo@gmailc.com",
    },
    {
      id: 4,
      draft_name: "lefjnhi09iienhp39u`9`eojo9fwnfnw",
      notice_type: "EFHEOFUIIHP",
      upload_date: "12-02-2011",
      author: "credheeoreo@gmailc.com",
    },
    {
      id: 5,
      draft_name: "lefjnhi09iienhp39u`9`eojo9fwnfnw",
      notice_type: "EFHEOFUIIHP",
      upload_date: "12-02-2011",
      author: "credheeoreo@gmailc.com",
    },
    {
      id: 6,
      draft_name: "lefjnhi09iienhp39u`9`eojo9fwnfnw",
      notice_type: "EFHEOFUIIHP",
      upload_date: "12-02-2011",
      author: "credheeoreo@gmailc.com",
    },
    {
      id: 7,
      draft_name: "lefjnhi09iienhp39u`9`eojo9fwnfnw",
      notice_type: "EFHEOFUIIHP",
      upload_date: "12-02-2011",
      author: "credheeoreo@gmailc.com",
    },
    {
      id: 8,
      draft_name: "lefjnhi09iienhp39u`9`eojo9fwnfnw",
      notice_type: "EFHEOFUIIHP",
      upload_date: "12-02-2011",
      author: "credheeoreo@gmailc.com",
    },
    {
      id: 9,
      draft_name: "lefjnhi09iienhp39u`9`eojo9fwnfnw",
      notice_type: "EFHEOFUIIHP",
      upload_date: "12-02-2011",
      author: "credheeoreo@gmailc.com",
    },
    {
      id: 10,
      draft_name: "lefjnhi09iienhp39u`9`eojo9fwnfnw",
      notice_type: "EFHEOFUIIHP",
      upload_date: "12-02-2011",
      author: "credheeoreo@gmailc.com",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [showModal, setShowModal] = useState(false);
  console.log("[showModal ===>>>", showModal);
  const [selectedRowData, setSelectedRowData] = useState(null);

  if (loading) {
    return <LoaderComponent />;
  }
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filteredData = loanData.filter((item) => {
      return (
        item.draft_name.toLowerCase().includes(value.toLowerCase()) ||
        item.upload_date.toLowerCase().includes(value.toLowerCase()) ||
        item.notice_type.toLowerCase().includes(value.toLowerCase()) ||
        item.author.toLowerCase().includes(value.toLowerCase())
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

  const handleRowClick = (rowData) => {
    setSelectedRowData(rowData);
    setShowModal(true);
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
        <NoticeDraftHeader />
      </div>

      <div className="mt-16 relative overflow-x-auto sm:rounded-lg">
        <table className="w-full text-left rtl:text-right border-collapse">
          <thead className="text-xl text-gray-700  border-b-2">
            <tr>
              <th scope="col" className="px-6 py-3 border-b">
                <div className="flex items-center justify-center font-medium">
                  #
                </div>
              </th>
              <th scope="col" className="px-6 py-3 border-b">
                <div className="flex items-center justify-center font-medium">
                  Draft Name
                </div>
              </th>
              <th scope="col" className="px-6 py-3 border-b">
                <div className="flex items-center justify-center font-medium">
                  Notice Type
                </div>
              </th>
              <th scope="col" className="px-6 py-3 border-b">
                <div className="flex items-center justify-center font-medium">
                  Upload Date
                </div>
              </th>
              <th scope="col" className="px-6 py-3 border-b">
                <div className="flex items-center justify-center font-medium">
                  Author
                </div>
              </th>
              <th scope="col" className="px-6 py-3 border-b">
                <div className="flex items-center justify-center font-medium">
                  Actions
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems?.map((items, index) => {
              return (
                <tr
                  key={index}
                  onClick={() => handleRowClick(items)}
                  className={`border-b hover:bg-gray-200 dark:hover:bg-gray-600 `}
                >
                  <td className="px-6 py-4 text-lg content-center">
                    <div className="flex justify-center">
                      <p className="text-lg font-sm">{items?.id}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-lg content-center">
                    <div className="flex justify-center">
                      <p className="text-lg font-sm">{items?.draft_name}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-lg content-center">
                    <div className="flex justify-center">
                      <p className="text-lg font-sm">{items?.notice_type}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-lg content-center">
                    <div className="flex justify-center">
                      <p className="text-lg font-sm">{items?.upload_date}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-lg content-center">
                    <div className="flex justify-center">
                      <p className="text-lg font-sm">{items?.author}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-lg content-center">
                    <div className="flex gap-4 justify-center">
                      <div className="cursor-pointer rounded-full w-12 h-12 flex justify-center items-center bg-[#401f78]">
                        <FiDownload className="text-white" size={25} />
                      </div>
                      <div className="cursor-pointer rounded-full w-12 h-12 flex justify-center items-center bg-[#401f78]">
                        <IoEyeSharp size={25} className="text-white" />
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
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
        {showModal && (
          <Modal setShowModal={setShowModal} rowData={selectedRowData} />
        )}
      </div>
    </div>
  );
};

export default NoticeDraft;
