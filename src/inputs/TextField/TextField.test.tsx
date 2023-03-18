import * as React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import { TextField } from "./TextField";

test("onChange handler should be called when typing onto it", () => {
  const handleChange = jest.fn();
  const event = { target: { value: "sometext" } };

  const { getByRole } = render(
    <TextField focused onChange={handleChange}>
      Some Label
    </TextField>
  );

  const textfieldElement = getByRole("textbox");

  fireEvent.change(textfieldElement, event);

  expect(handleChange).toBeCalled();
});

test("onChange handler should not be called when TextField is disabled", () => {
  const handleChange = jest.fn();
  const event = { target: { value: "sometext" } };

  const { getByRole } = render(
    <TextField disabled onChange={handleChange}>
      Some Label
    </TextField>
  );

  const textfieldElement = getByRole("textbox");

  fireEvent.change(textfieldElement, event);

  expect(handleChange).not.toBeCalled();
});

test("should have specific (depends on how you name it) className active when TextField is focused", () => {
  const { getByRole } = render(<TextField>Some Label</TextField>);

  const textfieldElement = getByRole("textbox");

  act(() => {
    textfieldElement.focus();
    expect(textfieldElement).toHaveFocus();
  });
});
