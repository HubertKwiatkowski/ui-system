import { PropsWithChildren } from "react";
import * as React from "react";
import { ArrowLeft, ArrowRight } from "../../icons";
import { usePagination, DOTS } from './usePagination';


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
  // const paginationRange = usePagination({
  //   currentPage,
  //   pageSize,
  //   siblingCount = 1,
  //   count
  // });


  const arrowLeft = "";
  const arrowRight = "";

  return (
    <ul>
      <li>
        {/*  left arrow */}
        <div className={arrowLeft}><ArrowLeft /></div>
      </li>
      <li>
        {/*  numbers */}
        <div></div>
      </li>
      <li>
        {/* right arrow */}
        <div className={arrowRight}><ArrowRight /></div>
      </li>
    </ul>
  );
};
