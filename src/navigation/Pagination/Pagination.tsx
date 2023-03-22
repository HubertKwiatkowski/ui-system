import { PropsWithChildren } from "react";
import * as React from "react";
import * as styles from "./Pagination.module.css";

interface PaginationProps {
  count: number;
  page: number;
  onChange(value: number): void;
}

export const Pagination = () => {
  return <div></div>;
};
