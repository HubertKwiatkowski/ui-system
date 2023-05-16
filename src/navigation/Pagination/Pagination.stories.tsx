// Pagination.stories.tsx
import { Meta, StoryFn } from "@storybook/react";
import { Pagination } from "./Pagination";
import * as React from "react";
import {useState} from "react";

export default {
  component: Pagination,
} as Meta;

export const Default: StoryFn = () => {
  const [currentPage, setCurrentPage] = useState(5);
  const handleChange = (page: number) => setCurrentPage(page);
  
  return (
    <Pagination
      maxPages={10}
      currentPage={currentPage}
      onChange={handleChange}
    />
  );
};