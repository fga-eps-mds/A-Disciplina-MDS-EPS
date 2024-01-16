import { useState } from "react";
import ReactPaginate from "react-paginate";

import "./style.css";

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (selectedPage: { selected: number }) => void;
  style?: any;
}

export function Pagination({
  pageCount,
  currentPage,
  onPageChange,
  style,
}: PaginationProps) {
  const [, setCurrentPage] = useState(0);

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
    onPageChange(selectedPage);
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", ...(style || {}) }}>
      <ReactPaginate
        previousLabel="Anterior"
        nextLabel="Próximo"
        pageCount={pageCount}
        onPageChange={handlePageChange}
        forcePage={currentPage}
        containerClassName="pagination"
        previousLinkClassName="pagination__link"
        nextLinkClassName="pagination__link"
        disabledClassName="pagination__link--disabled"
        activeClassName="active"
      />
    </div>
  );
}

export default Pagination;
