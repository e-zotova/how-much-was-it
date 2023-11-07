import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";
import Form from "../components/Form";

const setupInput = (value) => {
  const utils = render(<Form />);
  const input = screen.queryByTestId(value);
  return {
    input,
    ...utils,
  };
};

test("It should render the header", () => {
  render(<App />);
  const linkElement = screen.getByText(/Раньше было лучше?/i);
  expect(linkElement).toBeInTheDocument();
});

test("It should put valid year in the year input", () => {
  const { input } = setupInput("year");
  fireEvent.change(input, { target: { value: "1973" } });
  fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 });
  expect(input.value).toBe("1973");
  expect(input).toBeValid();
});

test("It should put valid number in the salary input", () => {
  const { input } = setupInput("salary");
  fireEvent.change(input, { target: { value: "70000" } });
  expect(input.value).toBe("70000");
  expect(input).toBeValid();
});

test("It should put valid number in the price input", () => {
  const { input } = setupInput("price");
  fireEvent.change(input, { target: { value: "700" } });
  expect(input.value).toBe("700");
  expect(input).toBeValid();
});

test("It should not enter invalid year", () => {
  const { input } = setupInput("year");
  fireEvent.change(input, { target: { value: "20" } });
  fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 });
  expect(input).toBeInvalid();
});

test("It should not enter invalid salary", () => {
  const { input } = setupInput("salary");
  fireEvent.change(input, { target: { value: "0" } });
  fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 });
  expect(input).toBeInvalid();
});

test("It should not enter invalid price", () => {
  const { input } = setupInput("price");
  fireEvent.change(input, { target: { value: "0" } });
  fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 });
  expect(input).toBeInvalid();
});