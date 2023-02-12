import { h } from "preact";
import { render, fireEvent } from "@testing-library/preact";
import "@testing-library/jest-dom/extend-expect";
import { Checkbox } from "./Checkbox";

test("onChange handler should be called when clicked on it", () => {
  const handleChange = jest.fn();

  const { getByRole } = render(
    <Checkbox onChange={handleChange}>Some Label</Checkbox>
  );
  const checkboxElement = getByRole("checkbox");

  fireEvent.change(checkboxElement);

  expect(handleChange).toBeCalled();
});

test("oonChange handler should not be called when Checkbox is disabled", () => {
  const handleChange = jest.fn();

  const { getByRole } = render(
    <Checkbox disabled onChange={handleChange}>
      Some Label
    </Checkbox>
  );
  const checkboxElement = getByRole("checkbox");

  fireEvent.click(checkboxElement);

  expect(handleChange).not.toBeCalled();
});

test("should be in checked state, after clicking on it, and should be unchecked after clicking again", () => {
  const handleChange = jest.fn();

  const { getByRole } = render(
    <Checkbox onChange={handleChange}>Some Label</Checkbox>
  );
  const checkboxElement = getByRole("checkbox");

  fireEvent.click(checkboxElement);
  expect(checkboxElement.checked).toEqual(true);

  fireEvent.click(checkboxElement);
  expect(checkboxElement.checked).toEqual(false);
});
