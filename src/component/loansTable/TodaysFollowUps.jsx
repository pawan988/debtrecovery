import React, { useState } from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { MdCurrencyRupee } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import LoaderComponent from "../Loader/Loader";
import Header from "../header/Header";
import LoansHeader from "./LoansHeader";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import Pagination from "./Pagination";
import ProfileAvatar from "../../assets/profileAvatar.jpg";
import "./LoansTable.css";
const TodayFollowUps = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [popupIndex, setPopupIndex] = useState(null);

  const [loanData, setLoanData] = useState([
    {
      id: 1,
      customerDetail: "John Doe",
      contact: "john@example.com",
      totalAmount: 1000,
      amountDue: 500,
      callInfo: "3 Attempts",
      contactID: "A84JSI3904INSK",
    },
    {
      id: 2,
      customerDetail: "Jane Smith",
      contact: "jane@example.com",
      totalAmount: 1500,
      amountDue: 200,
      callInfo: "0 Attempts",
      contactID: "A84JSI3904INSK",
    },
    {
      id: 3,
      customerDetail: "Alice Johnson",
      contact: "alice@example.com",
      totalAmount: 800,
      amountDue: 0,
      callInfo: "2 Attempts",
      contactID: "A84JSI3904INSK",
    },
    {
      id: 4,
      customerDetail: "Bob Brown",
      contact: "bob@example.com",
      totalAmount: 2000,
      amountDue: 1000,
      callInfo: "2 Attempts",
      contactID: "A84JSI3904INSK",
    },
    {
      id: 5,
      customerDetail: "Eve Davis",
      contact: "eve@example.com",
      totalAmount: 3000,
      amountDue: 1500,
      callInfo: "1 Attempts",
      contactID: "A84JSI3904INSK",
    },
    {
      id: 1,
      customerDetail: "Devid",
      contact: "john@example.com",
      totalAmount: 1000,
      amountDue: 500,
      callInfo: "3 Attempts",
      contactID: "A84JSI3904INSK",
    },
    {
      id: 2,
      customerDetail: "Moen",
      contact: "jane@example.com",
      totalAmount: 1500,
      amountDue: 200,
      callInfo: "0 Attempts",
      contactID: "A84JSI3904INSK",
    },
    {
      id: 3,
      customerDetail: "Sane",
      contact: "alice@example.com",
      totalAmount: 800,
      amountDue: 0,
      callInfo: "2 Attempts",
      contactID: "A84JSI3904INSK",
    },
    {
      id: 4,
      customerDetail: "Karan",
      contact: "bob@example.com",
      totalAmount: 2000,
      amountDue: 1000,
      callInfo: "2 Attempts",
      contactID: "A84JSI3904INSK",
    },
    {
      id: 5,
      customerDetail: "Bravo",
      contact: "eve@example.com",
      totalAmount: 3000,
      amountDue: 1500,
      callInfo: "1 Attempts",
      contactID: "A84JSI3904INSK",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  if (loading) {
    return <LoaderComponent />;
  }
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filteredData = (loanData || []).filter((item) => {
      return (
        item?.customerDetail?.toLowerCase()?.includes(value?.toLowerCase()) ||
        item?.callInfo?.toLowerCase()?.includes(value?.toLowerCase()) ||
        item?.status?.toLowerCase()?.includes(value?.toLowerCase())
      );
    });
    setLoanData(filteredData);
  };

  const handleRowClick = (data) => {
    navigate(`/viewCase`, { state: { loanData: data } });
  };
  const togglePopup = (index) => {
    if (popupIndex === index) {
      setPopupIndex(null);
    } else {
      setPopupIndex(index);
    }
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
  return (
    <div className="p-4 rounded-lg dark:border-gray-700 w-full">
      <Header
        handleSearch={handleSearch}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />

      <div className="mt-5 md:mt-12">
        <LoansHeader />
      </div>
      <div className="mt-8 pl-3">
        <h2 className="font-medium text-2xl text-gray-500">
          Today's Follow Ups
        </h2>
      </div>
      <div
        className="mt-4 relative overflow-x-auto sm:rounded-lg"
        style={{ maxHeight: "400px" }}
      >
        <table className="w-full text-left rtl:text-right border-collapse">
          <thead className="text-xl text-gray-700  border-b-2">
            <tr>
              <th scope="col" className="px-6 py-3 border-b">
                <div className="flex items-center font-medium">
                  Customer Detail
                </div>
              </th>
              <th scope="col" className="px-6 py-3 border-b">
                <div className="flex items-center font-medium">Contact</div>
              </th>
              <th scope="col" className="px-6 py-3 border-b">
                <div className="flex items-center font-medium">
                  Total Amount
                </div>
              </th>
              <th scope="col" className="px-6 py-3 border-b">
                <div className="flex items-center font-medium">Amount Due</div>
              </th>
              <th scope="col" className="px-6 py-3 border-b">
                <div className="flex items-center font-medium">Call Info</div>
              </th>
              <th scope="col" className="px-6 py-3 border-b"></th>
            </tr>
          </thead>
          <tbody>
            {currentItems?.map((items, index) => {
              return (
                <tr
                  key={index}
                  className={`border-b hover:bg-gray-200 dark:hover:bg-gray-600 `}
                >
                  <td
                    scope="row"
                    className="pr-0 pl-1 py-4"
                    onClick={() => handleRowClick(items)}
                  >
                    <div className="cursor-pointer flex gap-4 items-center">
                      <div className="w-[65px] h-[65px] rounded-full overflow-hidden">
                        <img
                          src={ProfileAvatar}
                          alt="customer-img"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                          }}
                        />
                      </div>
                      <div className="flex flex-col">
                        <p className="text-lg font-medium">
                          {items?.customerDetail}
                        </p>
                        <p className="text-lg text-[#4d3596] font-medium">
                          {items?.contactID}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-lg">
                    <div className="flex gap-4">
                      <IoCallOutline
                        size={26}
                        className="text-gray-400 cursor-pointer"
                      />
                      <FiMessageSquare
                        size={26}
                        className="text-gray-400 cursor-pointer"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-lg">
                    <div className="flex items-center">
                      <MdCurrencyRupee />
                      {items?.totalAmount}
                    </div>
                  </td>
                  <td
                    className={`px-6 py-4 text-lg ${
                      items?.amountDue === 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    <div className="flex items-center">
                      <MdCurrencyRupee
                        className={`${
                          items?.amountDue === 0
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      />
                      {items?.amountDue}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-lg">
                    {items?.callInfo}
                    <div className="flex mt-2">
                      <GoDotFill size={20} className="text-green-500" />
                      <GoDotFill size={20} className="text-red-500" />
                      <GoDotFill size={20} className="text-red-500" />
                      <GoDotFill size={20} className="text-gray-500" />
                      <GoDotFill size={20} className="text-gray-500" />
                    </div>
                  </td>
                  <td className="px-6 py-4 relative">
                    <FaEllipsisVertical
                      className="text-gray-400 cursor-pointer"
                      size={22}
                      onClick={() => togglePopup(index)}
                    />
                    {popupIndex === index && (
                      <div className="absolute left-[-40px] right-2 top-16 bg-white py-2 px-4 rounded-lg border-2 font-semibold shadow-inner z-10">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2 cursor-pointer">
                            <RiDeleteBin6Line
                              size={25}
                              className="text-gray-500"
                            />
                            <p className="text-2xl font-normal text-gray-500">
                              Delete
                            </p>
                          </div>
                          <hr class="h-px my-0 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                          <div className="flex items-center gap-2 cursor-pointer">
                            <FiEdit size={25} className="text-gray-500" />
                            <p className="text-2xl font-normal text-gray-500">
                              Edit
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
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
  );
};

export default TodayFollowUps;
