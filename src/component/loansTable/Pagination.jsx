import React from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { GrNext } from "react-icons/gr";

const Pagination = ({
  currentPage,
  indexOfLastItem,
  loanData,
  prevPage,
  nextPage,
  handleRowsPerPageChange,
  rowsPerPage,
}) => {
  return (
    <div className="flex gap-6">
      <div className="flex gap-2">
        <p className="text-lg">Rows per page:</p>
        <select
          value={rowsPerPage}
          onChange={handleRowsPerPageChange}
          className="px-2 py-1 border border-gray-300 rounded"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>
      <div>
        <p className="text-lg">
          1-{Math.min(indexOfLastItem, loanData.length)} of {loanData.length}
        </p>
      </div>

      <div className="flex gap-8">
        <button
          className={`flex items-center p-1 bg-primary border border-blue-800 ${
            currentPage === 1
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer"
          }`}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          <MdOutlineArrowBackIosNew className="text-gray-300" />
        </button>
        <button
          className={`flex items-center bg-primary p-1 border border-blue-800 ${
            indexOfLastItem >= loanData.length
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer"
          }`}
          onClick={nextPage}
          disabled={indexOfLastItem >= loanData.length}
        >
          <GrNext className="text-gray-300" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
