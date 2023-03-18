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
      <Button variant={"primary"}>Click!</Button>
      <Button variant={"primary"}>Click him</Button>
      <Button variant={"secondary"}>DO NOT CLICK ME!</Button>
      <Button variant={"primary"}>
        Noooooooooooooooo! Nooooooooooooooooo!
      </Button>
    </CardContent>
  </Card>
);

MultiCard.args = {
  fullWidth: false,
};
