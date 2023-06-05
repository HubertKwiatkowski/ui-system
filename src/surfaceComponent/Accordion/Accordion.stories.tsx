import * as React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Accordion } from "./Accordion";

export default {
  component: Accordion,
} as Meta;

export const Default: StoryFn = () => {
  return (
    <Accordion header={"Accordion 1"} defaultOpen={false}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Accordion>
  );
};

Default.args = {
  defaultOpen: false,
};
