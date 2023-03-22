import { PropsWithChildren } from "react";
import * as React from "react";
import { ArrowLeft, ArrowRight } from "../../icons";
import { usePagination, DOTS } from "./UsePagination";

import * as styles from "./Pagination.module.css";

interface PaginationProps {
  maxPages: number;
  currentPage: number;
  onChange(value: number): void;
}

export const Pagination = ({
  maxPages = 10,
  currentPage = 1,
  ...props
}: PropsWithChildren<PaginationProps>) => {
  const paginationRange = usePagination({
    currentPage,
    maxPages,
  });

  const arrowLeft = "";
  const arrowRight = "";

  const onNext = () => {
    props.onChange(currentPage + 1);
  };

  const onPrevious = () => {
    props.onChange(currentPage - 1);
  };

  return (
    <ul>
      <li>
        {/*  left arrow */}
        <div className={arrowLeft} onClick={onPrevious}>
          <ArrowLeft />
        </div>
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li key={pageNumber}>&#8230;</li>;
        }

        return (
          <li key={pageNumber} onClick={() => props.onChange(pageNumber)}>
            {pageNumber}
          </li>
        );
      })}
      <li>
        {/* right arrow */}
        <div className={arrowRight} onClick={onNext}>
          <ArrowRight />
        </div>
      </li>
    </ul>
  );
};
