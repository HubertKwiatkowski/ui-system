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
  ...props
}: PropsWithChildren<PaginationProps>) => {
  const currentPage = props.currentPage;
  const maxPages = props.maxPages;

  const paginationRange = usePagination({
    currentPage,
    maxPages,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const paginationRangeLength = paginationRange.length;

  const lastPage = paginationRange[paginationRangeLength - 1];

  const leftIsDisabled = currentPage === 1 ? styles.disabled : "";
  const rightIsDisabled = currentPage === lastPage ? styles.disabled : "";

  const arrowLeft = [styles.baseIcon, styles.rightIcon, leftIsDisabled].join(
    " "
  );
  const arrowRight = [styles.baseIcon, styles.rightIcon, rightIsDisabled].join(
    " "
  );

  const onNext = () => {
    props.onChange(currentPage + 1);
  };

  const onPrevious = () => {
    props.onChange(currentPage - 1);
  };

  // const isActive = []

  return (
    <ul>
      <li>
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
        <div className={arrowRight} onClick={onNext}>
          <ArrowRight />
        </div>
      </li>
    </ul>
  );
};
