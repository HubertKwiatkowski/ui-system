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
      <h3>Card Name</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
        architecto, autem distinctio dolorem, dolores, esse facere incidunt odio
        officia quasi similique sunt totam unde ut veritatis. A, amet aperiam
        architecto assumenda aut autem commodi consequatur deleniti dolorem enim
        esse excepturi harum illum iure labore minus, modi molestiae natus
        nesciunt non recusandae rem saepe sapiente sint temporibus ut vero
        voluptate. Consequuntur ducimus eius et praesentium recusandae. Dolore
        eaque eius eum excepturi expedita in ipsum laborum maiores
        necessitatibus perspiciatis? Autem beatae, culpa delectus dignissimos,
        dolorem doloremque eaque hic nemo nobis omnis possimus quae sint, sit
        vel veniam! Dignissimos doloribus laudantium provident veritatis.
      </p>
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
