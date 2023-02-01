// Button.stories.tsx
import { Meta, Story } from "@storybook/preact";
import { h } from "preact";
import { Button } from "./Button";
import * as React from "preact/compat";

export default {
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
  },
} as Meta;

export const MultiButton: Story = (args) => (
  <Button {...args} onClick={() => {}}>
    Click me!
  </Button>
);

MultiButton.args = {
  variant: "primary",
  disabled: false,
  isLoading: false,
  icon: false,
};
