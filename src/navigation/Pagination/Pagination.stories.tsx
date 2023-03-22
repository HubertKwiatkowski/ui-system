import { Meta, Story } from "@storybook/react";
import { Pagination } from "./Pagination";
import * as React from "react";

export default {
  component: Pagination,
  argTypes: {},
} as Meta;

export const BasePagination: Story = (args) => <Pagination />;

BasePagination.args = {};