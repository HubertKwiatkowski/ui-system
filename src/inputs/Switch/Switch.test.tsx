import { h } from "preact";
import { render, fireEvent } from "@testing-library/preact";
import "@testing-library/jest-dom/extend-expect";
import { Switch } from "./Switch";


test("onChange handler should be called when clicking on it, when one is not disabled. Expected isChecked should be true. After clicking on it again, expected isChecked value should be false", () => {
  const handleChange = jest.fn();

  const { getByRole } = render(<Switch onChange={handleChange}></Switch>);
  const switchElement = getByRole("checkbox");
  
  fireEvent.click(switchElement);
  expect(switchElement.checked).toEqual(true)
  
  fireEvent.click(switchElement);
  expect(switchElement.checked).toEqual(false)
  
  fireEvent.click(switchElement)

  // cant figure out why the one below does not work - it worked for the Checkox element, but here it does not...
  expect(handleChange).toBeCalled();
});


test("nChange handler should not be called when Switch is disabled", () => {
  const handleChange = jest.fn();

  const { getByRole } = render(<Switch disabled onChange={handleChange}></Switch>);
  const switchElement = getByRole("checkbox");

  fireEvent.click(switchElement);

  expect(handleChange).not.toBeCalled();
});
