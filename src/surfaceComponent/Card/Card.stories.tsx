import { Meta, Story } from "@storybook/react";
import { Card } from "./Card";
import * as React from "react";
import { Button } from "../../inputs";

export default {
  component: Card,
  argTypes: {},
} as Meta;

export const MultiCard: Story = (args) => (
  <Card
    fullWidth={true}
    {...args}
  >
    {/* <CardImage url={imageUrl}> */}
    {/* <CardContent> */}
      <Button variant={"primary"}></Button>
    {/* </CardContent> */}
  </Card>);

MultiCard.args = {
  fullWidth: false,
};
