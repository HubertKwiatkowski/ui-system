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

export const Primary: Story = (args) => (
  <Button {...args} onClick={() => {}}>
    Click me!
  </Button>
);

Primary.args = {
  disabled: false,
  variant: "primary",
};
