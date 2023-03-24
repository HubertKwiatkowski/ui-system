import { PropsWithChildren } from "react";
import * as React from "react";
import { ArrowLeft, ArrowRight } from "../../icons";
import { usePagination, DOTS } from "./UsePagination";
import classnames from "classnames";

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

  if (
    currentPage <= 0 ||
    currentPage > maxPages ||
    paginationRange.length < 2
  ) {
    return null;
  }

  const paginationRangeLength = paginationRange.length;

  const lastPage = paginationRange[paginationRangeLength - 1];

  const leftIsDisabled = currentPage === 1 ? styles.disabled : "";
  const rightIsDisabled = currentPage === lastPage ? styles.disabled : "";

  const arrowLeft = [styles.baseIcon, styles.leftIcon, leftIsDisabled].join(
    " "
  );
  const arrowRight = [styles.baseIcon, styles.rightIcon, rightIsDisabled].join(
    " "
  );

  const paginationItemNumber = [styles.paginationItem].join(" ");

  const paginationItemDots = [styles.paginationItem, styles.dots].join(" ");

  const onNext = () => {
    props.onChange(currentPage + 1);
    console.log(currentPage);
  };

  const onPrevious = () => {
    props.onChange(currentPage - 1);
    console.log(currentPage);
  };

  return (
    <ul className={styles.mainWrapper}>
      <li>
        <div
          className={classnames(arrowLeft, { disabled: currentPage === 1 })}
          onClick={onPrevious}
        >
          {<ArrowLeft />}
        </div>
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li key={pageNumber} className={paginationItemDots}>&#8230;</li>;
        }
        return (
          <li
            key={pageNumber}
            className={classnames(paginationItemNumber, {
              selected: pageNumber === currentPage,
            })}
            onClick={() => props.onChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li>
        <div
          className={classnames(arrowRight, {
            disabled: currentPage === lastPage,
          })}
          onClick={onNext}
        >
          <ArrowRight />
        </div>
      </li>
    </ul>
  );
};
