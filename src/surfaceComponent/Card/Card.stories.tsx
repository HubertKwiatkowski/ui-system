import { Meta, Story } from "@storybook/react";
import { Card, CardImage, CardContent } from "./Card";
import * as React from "react";
import { Button } from "../../inputs";
import imageUrl from "../../static/images/card/card.png";

export default {
  component: Card,
  argTypes: {},
} as Meta;

export const MultiCard: Story = (args) => (
  <Card fullWidth={true} {...args}>
    <CardImage url={imageUrl} />
    <CardContent>
      <Button variant={"primary"}>Click me</Button>
      <Button variant={"primary"}>Click me</Button>
      <Button variant={"secondary"}>Click me</Button>
      <Button variant={"primary"}>Click me</Button>
    </CardContent>
  </Card>
);

MultiCard.args = {
  fullWidth: false,
};
