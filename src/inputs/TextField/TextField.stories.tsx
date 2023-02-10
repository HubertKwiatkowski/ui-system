// TextField.stories.tsx
import { Meta, Story } from "@storybook/preact";
import { h } from "preact";
import { TextField } from "./TextField";

export default {
  component: TextField,
  argTypes: {},
} as Meta;

export const MultiTextField: Story = (args) => (
  <TextField {...args} onChange={() => {}}>

  </TextField>
);

MultiTextField.args = {
  disabled: false
}