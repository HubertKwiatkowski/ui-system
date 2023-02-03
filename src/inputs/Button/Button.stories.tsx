// Button.stories.tsx
import { Meta, Story } from "@storybook/preact";
import { h } from "preact";
import { Button } from "./Button";
import { Plus } from "../../icons/Plus";
import { Spinner } from "../../icons/Spinner";
import * as React from "preact/compat";

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
  <>
    <Button icon={<></>} {...args} onClick={() => {}}>
      Click me!
    </Button>
  </>
);

MultiButton.args = {
  variant: "primary",
  type: "button",
  disabled: false,
  isLoading: false,
  icon: "none",
};
