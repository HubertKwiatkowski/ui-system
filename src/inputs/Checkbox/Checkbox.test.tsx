import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

test("onChange handler should be called when clicked on it", () => {
  const handleChange = jest.fn();

  const { getByRole } = render(
    <Checkbox onChange={handleChange}>Checkbox Label</Checkbox>
  );

  const checkboxElement = getByRole("checkbox");

  fireEvent.click(checkboxElement);

  expect(handleChange).toBeCalled();
});

test("onChange handler should not be called when Checkbox is disabled", () => {
  const handleChange = jest.fn();

  const { getByRole } = render(
    <Checkbox disabled onChange={handleChange}>
      Checkbox Label
    </Checkbox>
  );
  const checkboxElement = getByRole("checkbox");

  fireEvent.click(checkboxElement);

  expect(handleChange).not.toBeCalled();
});

test("should be in checked state, after clicking on it, and should be unchecked after clicking again", () => {
  const handleChange = jest.fn();

  const { getByRole } = render(
    <Checkbox onChange={handleChange} checked={false}>
      Checkbox Label
    </Checkbox>
  );
  const checkboxElement = getByRole("checkbox");

  fireEvent.click(checkboxElement);
  expect(checkboxElement).toBeChecked();

  fireEvent.click(checkboxElement);
  expect(checkboxElement).not.toBeChecked();
  // expect(checkboxElement.checked).toEqual(false)
});
