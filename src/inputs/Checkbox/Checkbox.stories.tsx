// Checkbox.stories.tsx
import { Meta, Story } from "@storybook/preact";
import * as React from "react";
import { Checkbox } from "./Checkbox";

export default {
  component: Checkbox,
  argTypes: {},
} as Meta;

export const CheckboxField: Story = (args) => (
  <Checkbox {...args}>
    Checkbox label goes here
  </Checkbox>
);

CheckboxField.args = {
  checked: false,
  disabled: false,
  id: "ID",
  name: "Name",
  value: "Value",
  label: "Checkbox label",
};
