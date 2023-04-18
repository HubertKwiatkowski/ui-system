import React from "react";
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
    <li>
      <button
        className={arrowButtonClass}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </li>
  );
};

interface PaginationButtonProps {
  active?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({
  active = false,
  onClick,
  children,
}) => {
  const paginationButtonClass = cx({
    btn: true,
    active: active,
  });
  return (
    <li>
      <button className={paginationButtonClass} onClick={onClick}>
        {children}
      </button>
    </li>
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
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= maxPages) {
      onChange(page);
    }
  };

  return (
    <nav>
      <ul className={styles.mainWrapper}>
        <PaginationItem
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <ArrowLeft />
        </PaginationItem>

        {[...Array(maxPages)].map((_, i) => (
          <PaginationButton
            key={i + 1}
            active={currentPage === i + 1}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </PaginationButton>
        ))}
        <PaginationItem
          disabled={currentPage === maxPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <ArrowRight />
        </PaginationItem>
      </ul>
    </nav>
  );
};

// import { PropsWithChildren, useState } from "react";
// import * as React from "react";
// import { ArrowLeftButton } from "./ArrowLeftButton";
// import { ArrowRightButton } from "./ArrowRightButton";
// import { Ellipsis } from "./Ellipsis";
// import classNames from "classnames/bind";
//
// import * as styles from "./Pagination.module.css";
//
// const cx = classNames.bind(styles);
//
// interface PaginationProps {
//   currentPage: number;
//   maxPages: number;
//   onChange(value: number): void;
// }
//
// export const Pagination = ({
//   ...props
// }: PropsWithChildren<PaginationProps>) => {
//   const maxPages = props.maxPages;
//   const pageNumbers = Array.from(Array(maxPages), (_, i) => i + 1);
//   const [currentPageIndex, setCurrentPageIndex] = useState<number>(
//     props.currentPage
//   );
//
//   const handlePrevClick = () => {
//     if (currentPageIndex > 1) {
//       setCurrentPageIndex(currentPageIndex - 1);
//       console.log(currentPageIndex);
//     }
//   };
//
//   const handleNextClick = () => {
//     if (currentPageIndex < maxPages) {
//       setCurrentPageIndex(currentPageIndex + 1);
//       console.log(currentPageIndex);
//     }
//   };
//
//   const arrowLeftClass = cx({
//     disabledArrow: currentPageIndex === 1,
//   });
//
//   const arrowRightClass = cx({
//     disabledArrow: currentPageIndex === maxPages,
//   });
//
//   return (
//     <div className={styles.mainWrapper}>
//       <div className={arrowLeftClass}>
//         <ArrowLeftButton
//           onClick={handlePrevClick}
//           disabled={currentPageIndex === 1}
//         />
//       </div>
//       <Ellipsis
//         onChange={() => {
//           setCurrentPageIndex(currentPageIndex);
//         }}
//         pageNumbers={pageNumbers}
//         currentPage={currentPageIndex}
//       />
//       <div className={arrowRightClass}>
//         <ArrowRightButton
//           onClick={handleNextClick}
//           disabled={currentPageIndex === maxPages}
//         />
//       </div>
//     </div>
//   );
// };
