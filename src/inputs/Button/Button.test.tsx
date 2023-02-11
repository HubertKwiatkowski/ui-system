import { h } from "preact";
import { render, fireEvent, getByTitle } from "@testing-library/preact";
import "@testing-library/jest-dom/extend-expect";
import { Button } from "./Button";

test("should render Button component properly", () => {
  const { getByText } = render(<Button onClick={() => {}}>Click me</Button>);
  const buttonElement = getByText("Click me");
  expect(buttonElement).toBeInTheDocument();
});


test("should be called when clicking on it, when button is not disabled", () => {
  const handleClick = jest.fn();

  const { getByText } = render(<Button onClick={handleClick}>Click me</Button>);
  const buttonElement = getByText("Click me");

  fireEvent.click(buttonElement);

  expect(handleClick).toBeCalled();
});


test("should not be called when Button is disabled", () => {
  const handleClick = jest.fn();

  const { getByText } = render(<Button disabled onClick={handleClick}>Click me</Button>);
  const buttonElement = getByText("Click me");

  fireEvent.click(buttonElement);

  expect(handleClick).not.toBeCalled();
});


// test("should have SVG spinner visible when Button is in loading state", () => {
//   const { getByText } = render(<Button isLoading>Click me</Button>);
//   const spinner = getByText("spinner");
//   expect(spinner).toBeInTheDocument();
// });


test("should not be called when Button is in loading state", () => {
  const handleClick = jest.fn();

  const { getByText } = render(<Button isLoading onClick={handleClick}>Click me</Button>);
  const buttonElement = getByText("Click me");

  fireEvent.click(buttonElement);

  expect(handleClick).not.toBeCalled();
});