import { h } from "preact";
import { render, fireEvent, getByLabelText, getByRole } from "@testing-library/preact";
import "@testing-library/jest-dom/extend-expect";
import { TextField } from "./TextField";


test("onChange handler should be called when typing onto it", () => {
  const handleChange = jest.fn();

  const { getByRole } = render(
    <TextField 
      focused
      onChange={handleChange}
    >
      Some Label
    </TextField>);

  const textfieldElement = getByRole("textbox");

  fireEvent.change(textfieldElement);

  expect(handleChange).toBeCalled();
});


test("onChange handler should not be called when TextField is disabled", () => {
  const handleChange = jest.fn();

  const { getByRole } = render(
    <TextField 
      disabled 
      onChange={handleChange}
    >
      Some Label
    </TextField>);

  const textfieldElement = getByRole("textbox");

  fireEvent.change(textfieldElement);

  expect(handleChange).not.toBeCalled();
});


// test("should have specific (depends on how you name it) className active when TextField is focused", () => {
//   const handleChange = jest.fn();

//   const { getByRole } = render(
//     <TextField 
//       focused 
//       onChange={handleChange}
//     >
//       Some Label
//     </TextField>);

//   const textfieldElement = getByRole("textbox");

//   input.closest

//   fireEvent.change(textfieldElement);

//   expect(handleChange).not.toBeCalled();
// });