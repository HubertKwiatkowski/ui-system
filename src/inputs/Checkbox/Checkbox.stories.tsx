// Checkbox.stories.tsx
import { Meta, Story } from "@storybook/preact";
import { h } from "preact";
import { Checkbox } from "./Checkbox";
import * as React from "preact/compat";

export default {
  component: Checkbox,
  argTypes: {},
} as Meta;

export const CheckboxField: Story = (args) => (
  <Checkbox {...args} onChange={() => {}}>
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
