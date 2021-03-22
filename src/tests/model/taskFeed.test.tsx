import { Task } from "../../models/Task";
import { taskFeed } from "../../models/taskFeed";

describe("taskFeed model", () => {
  let state: any = {
    tasks: [
      new Task("idfield", "desc", "31", 1, 2, false),
      new Task("idfield2", "desc2", "32", 1, 2, true),
    ],
  };

  test("should add task", () => {
    let task: Task = new Task("idfield3", "desc", "31", 1, 2, false);
    var result = taskFeed.reducers.addTask(state, task);
    expect(result.tasks.length).toBe(3);
    expect(result.tasks.find((o) => o.id == "idfield3")).toBe(task);
  });

  test("should update task", () => {
    let task: Task = new Task("idfield", "desc2", "32", 1, 2, false);
    var result = taskFeed.reducers.updateTask(state, task);
    expect(result.tasks.length).toBe(2);
    expect(result.tasks.find((o) => o.id == "idfield")).toBe(task);
  });

  test("should update tasks", () => {
    var result = taskFeed.reducers.updateTasks(state, []);
    expect(result.tasks.length).toBe(0);
    var result = taskFeed.reducers.updateTasks({ tasks: [] }, state.tasks);
    expect(result.tasks.length).toBe(2);
  });
});
