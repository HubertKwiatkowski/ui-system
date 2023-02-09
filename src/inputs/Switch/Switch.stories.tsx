import { Meta, Story } from "@storybook/preact";
import { h } from "preact";
import { Switch } from "./Switch";

export default {
  component: Switch,
  argTypes: {}
} as Meta;

export const SwitchField: Story = (args) => (
  <Switch {...args} onChange={() => {}}></Switch>
);

SwitchField.args = {
  checked: false,
  disabled: false,
  id: "switch-00"
}