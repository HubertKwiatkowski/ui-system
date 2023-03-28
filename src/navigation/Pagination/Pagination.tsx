import { PropsWithChildren, useState } from "react";
import * as React from "react";
import { ArrowLeftButton } from "./ArrowLeftButton";
import { ArrowRightButton } from "./ArrowRightButton";
import { Ellipsis } from "./Ellipsis";

import * as styles from "./Pagination.module.css";

interface PaginationProps {
  currentPage: number;
  maxPages: number;
  onChange(value: number): void;
}

export const Pagination = ({
  ...props
}: PropsWithChildren<PaginationProps>) => {
  const maxPages = props.maxPages;
  const pageNumbers = Array.from(Array(maxPages), (_, i) => i + 1);
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(
    props.currentPage
  );

  const handlePrevClick = () => {
    if (currentPageIndex > 1) {
      setCurrentPageIndex(currentPageIndex - 1);
      props.onChange();
      console.log(currentPageIndex);
    }
  };

  const handleNextClick = () => {
    if (currentPageIndex < maxPages) {
      setCurrentPageIndex(currentPageIndex + 1);
      props.onChange();
      console.log(currentPageIndex);
    }
  };

  const handleSetPage = () => {
    props.onChange();
    console.log(currentPageIndex);
  };

  return (
    <div className={styles.mainWrapper}>
      <ArrowLeftButton
        onClick={handlePrevClick}
        disabled={currentPageIndex === 1}
      />
      <Ellipsis
        onClick={() => handleSetPage()}
        pageNumbers={pageNumbers}
        currentPage={currentPageIndex}
        setCurrentPage={setCurrentPageIndex}
      />
      <ArrowRightButton
        onClick={handleNextClick}
        disabled={currentPageIndex === maxPages}
      />
    </div>
  );
};
