import { Meta, Story } from "@storybook/preact";
import { h } from "preact";
import { Checkbox } from "./Checkbox";
import * as React from "preact/compat";

export default {
  component: Checkbox,
  argTypes: {

  }
} as Meta;

export const CheckboxField: Story = (args) => (
  <Checkbox {...args} onClick={() => {}}>
    Checkbox label
  </Checkbox>
);

CheckboxField.args = {
  disabled: false,
}