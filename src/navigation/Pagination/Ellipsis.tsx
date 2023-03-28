import * as React from "react";
import { PropsWithChildren } from "react";

import * as styles from "./Ellipsis.module.css";

interface EllipsisProps {
  onClick(): void;
  pageNumbers: number;
  currentPage: number;
  setCurrentPage(): number;
}

export const Ellipsis = ({ ...props }: PropsWithChildren<EllipsisProps>) => {
  return (
    <div>
      {props.pageNumbers.map((pageNumber, index) => {
        return (
          <button
            className={styles.btn}
            key={index}
            onClick={() => {
              return props.setCurrentPage(pageNumber);
            }}
            disabled={pageNumber === props.currentPage}
          >
            {pageNumber}
          </button>
        );
      })}
    </div>
  );
};
