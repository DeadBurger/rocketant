import { render, screen } from "@testing-library/react";

import { App } from "../components/App/App";
import { Task } from "../models/Task";

test("renders learn react link", () => {
  const tasks: Task[] = [];
  render(<App tasks={tasks} />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
