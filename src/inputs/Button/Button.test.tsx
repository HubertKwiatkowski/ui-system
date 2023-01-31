import { h } from "preact";
import { render } from "@testing-library/preact";
import "@testing-library/jest-dom/extend-expect";
import { Button } from "./Button";

test("should render Button component properly", () => {
  const { getByText } = render(<Button>Click me</Button>);
  const buttonElement = getByText("Click me");
  expect(buttonElement).toBeInTheDocument();
});
