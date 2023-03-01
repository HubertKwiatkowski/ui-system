// TextField.stories.tsx
import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { TextField } from "./TextField";

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
  <TextField {...args}></TextField>
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
};
