// Button.stories.tsx
import { Meta, Story } from "@storybook/preact";
import { Button } from "./Button";
import { Plus, Spinner } from "../../icons";
import * as React from "react";

export default {
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
    type: {
      options: ["button", "submit"],
      control: { type: "select" },
    },
    icon: {
      options: ["none", "plus", "spinner"],
      mapping: {
        none: <></>,
        plus: <Plus />,
        spinner: <Spinner />,
      },
      control: { type: "select" },
    },
  },
} as Meta;

export const MultiButton: Story = (args) => (
  <Button icon={<></>} {...args}>
    Click me!
  </Button>
);

MultiButton.args = {
  variant: "primary",
  type: "button",
  disabled: false,
  isLoading: false,
  icon: "none",
};
