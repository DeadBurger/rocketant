import { render, screen } from "@testing-library/react";
import { TaskList } from "../components/TaskList/TaskList";
import { Task } from "../models/Task";

test("renders tasks link", () => {
  const tasks: Task[] = [
    new Task("id", "desc", "323", 1, 3, false),
    new Task("id", "desc", "323", 1, 3, false),
  ];

  const getTasksPromise = () => {
    return new Promise<void>((resolve, reject) => {
      resolve();
    });
  };

  const { getByRole } = render(
    <TaskList tasks={tasks} getTasks={getTasksPromise} />
  );

  const taskTable = getByRole("table");
  expect(taskTable).toBeInTheDocument();
  expect(taskTable.children.length).toBe(2);
});
