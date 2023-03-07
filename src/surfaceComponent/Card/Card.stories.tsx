import { Meta, Story } from "@storybook/react";
import { Card } from "./Card";
import * as React from "react";


export default {
  component: Card,
  argTypes: {},
} as Meta;

export const MultiCard: Story = (args) => <Card {...args}></Card>

MultiCard.args = {
  fullWidth: false,
}