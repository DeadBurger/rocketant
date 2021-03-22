import { createModel } from "@rematch/core";
import axios from "axios";
import { API_BASE_URL } from "../constants";
import { RootModel } from "./RootModel";
import { Task } from "./Task";

type TaskFeedState = {
  tasks: Task[];
};

export const taskFeed = createModel<RootModel>()({
  state: { tasks: [] } as TaskFeedState,
  reducers: {
    addTask(state: TaskFeedState, task: Task) {
      const newState = { ...state, tasks: [...state.tasks, task] };
      return newState;
    },
    updateTask(state: TaskFeedState, task: Task) {
      if (task.isCompleted) {
        return { ...state, tasks: state.tasks.filter((o) => o.id !== task.id) };
      }

      var tasks = state.tasks.map((o) => {
        if (o.id === task.id) return task;
        return o;
      });

      return { ...state, tasks };
    },
    updateTasks(state: TaskFeedState, tasks: Task[]) {
      return { ...state, tasks: tasks };
    },
  },

  effects: (dispatch) => ({
    async getTasksAsync(): Promise<void> {
      const result = await axios.get(`${API_BASE_URL}/api/tasks/latest`);
      const data = result.data as Array<Task>;
      const uncompletedTasks = data.filter((o: Task) => !o.isCompleted);
      dispatch.taskFeed.updateTasks(uncompletedTasks);
    },
  }),
});
