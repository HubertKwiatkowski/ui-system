import React, { useState } from "react";
import classNames from "classnames/bind";
import { ArrowLeft, ArrowRight } from "../../icons";

import * as styles from "./Pagination.module.css";

const cx = classNames.bind(styles);

interface PaginationItemProps {
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const PaginationItem: React.FC<PaginationItemProps> = ({
  disabled = false,
  onClick,
  children,
}) => {
  const arrowButtonClass = cx({
    btnArrow: true,
    btnDisabled: disabled,
  });
  return (
    <button className={arrowButtonClass} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

interface PaginationProps {
  currentPage: number;
  maxPages: number;
  onChange: (value: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  maxPages,
  onChange,
}) => {
  const [curPage, setCurPage] = useState<number>(currentPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= maxPages) {
      onChange(page);
      setCurPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= maxPages; i++) {
      if (i === 1 || i === maxPages || (i >= curPage - 1 && i <= curPage + 1)) {
        pageNumbers.push(
          <div
            className={`${styles.btn} ${curPage === i && styles.active}`}
            onClick={() => handlePageChange(i)}
          >
            <p>{i}</p>
          </div>
        );
      } else if (i === curPage - 2 || i === curPage + 2) {
        pageNumbers.push(<div>...</div>);
      }
    }

    return pageNumbers;
  };

  return (
    <nav className={styles.mainWrapper}>
      <PaginationItem
        disabled={curPage === 1}
        onClick={() => {
          handlePageChange(curPage - 1);
        }}
      >
        <ArrowLeft />
      </PaginationItem>
      {renderPageNumbers()}
      <PaginationItem
        disabled={curPage === maxPages}
        onClick={() => handlePageChange(curPage + 1)}
      >
        <ArrowRight />
      </PaginationItem>
    </nav>
  );
};
