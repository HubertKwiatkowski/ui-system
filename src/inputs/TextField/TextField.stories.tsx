// TextField.stories.tsx
import { Meta, Story } from "@storybook/preact";
import { h } from "preact";
import { TextField } from "./TextField";
import * as React from "preact/compat";


export default {
  component: TextField,
  argTypes: {
    type: {
      options: ["text", "password"],
      control: { type: "select" },
    },
  },
} as Meta;

export const MultiTextField: Story = (args) => (
  <TextField {...args} onChange={() => {}}>
    
  </TextField>
);

MultiTextField.args = {
  id: "id",
  name: "name",
  type: "text",
  label: "Input Label",
  placeholder: "Placeholder",
  value: "",
  hint: "",
  error: "",
  withIcon: false,
  disabled: false,
}