// import * as React from "react";
import { useMemo } from "react";

export const DOTS = "...";

const range = (start, end) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = ({ currentPage, maxPages }) => {
  const paginationRange = useMemo(() => {
    const siblingCount = 1;
    const totalPageNumber = siblingCount + 5;

    if (totalPageNumber >= maxPages) {
      return range(1, maxPages);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, maxPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < maxPages - 2;

    const firstPageIndex = 1;
    const lastPageIndex = maxPages;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, lastPageIndex];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);

      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(maxPages - rightItemCount + 1, maxPages);

      return [firstPageIndex, DOTS, ...rightRange];
    }
  }, [currentPage, maxPages]);

  return paginationRange;
};
