import { Step, Stepper } from "./Stepper";
import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";

export default {
  component: Stepper,
} as Meta;

export const Default: StoryFn = () => {
  const active = 1;

  const steps = [
    { label: "Done step in the process" },
    { label: "Active step in the process" },
    { label: "Next step in the process" },
  ];

  return (
    <Stepper activeStep={active}>
      {steps.map((step, index) => (
        <Step
          key={index}
          completed={active > index}
          label={step.label}
          index={index}
        ></Step>
      ))}
    </Stepper>
  );
};
