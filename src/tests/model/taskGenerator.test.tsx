import { taskGenerator } from "../../models/taskGenerator";

describe("taskGenerator model", () => {
  const state = { numberOfTasks: 10, generationStarted: false };
  test("should change number of tasks", () => {
    var result = taskGenerator.reducers.changeNumberOfTasks(state, 5);
    expect(result.numberOfTasks).toBe(5);
  });

  test("should start generation", () => {
    var result = taskGenerator.reducers.generationStarted(state);
    expect(result.generationStarted).toBe(true);
  });
});
