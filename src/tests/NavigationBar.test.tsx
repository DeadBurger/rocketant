import { render, screen } from "@testing-library/react";
import NavigationBar from "../components/NavigationBar";

test("renders tasks link", () => {
  render(<NavigationBar />);
  const taskElement = screen.getByText(/Tasks/);
  expect(taskElement).toBeInTheDocument();
});

test("renders generate tasks link", () => {
  render(<NavigationBar />);
  const taskElement = screen.getByText(/Generate tasks/);
  expect(taskElement).toBeInTheDocument();
});
