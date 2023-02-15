import { Meta, Story } from "@storybook/preact";
import * as React from "react";
import { Switch } from "./Switch";

export default {
  component: Switch,
  argTypes: {},
} as Meta;

export const SwitchField: Story = (args) => (
  <Switch {...args}></Switch>
);

SwitchField.args = {
  checked: false,
  disabled: false,
  id: "switch-00",
};
