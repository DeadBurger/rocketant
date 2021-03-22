import { createModel } from "@rematch/core";
import axios from "axios";
import { API_BASE_URL } from "../constants";
import { RootModel } from "./RootModel";

type TaskGeneratorState = {
  numberOfTasks?: number;
  generationStarted: boolean;
};

export const taskGenerator = createModel<RootModel>()({
  state: {
    numberOfTasks: 30,
    generationStarted: false,
  } as TaskGeneratorState,
  reducers: {
    changeNumberOfTasks(state: TaskGeneratorState, value: number) {
      return { ...state, numberOfTasks: value };
    },
    generationStarted(state: TaskGeneratorState) {
      return { ...state, generationStarted: true };
    },
  },

  effects: (dispatch) => ({
    async startCreator(event, state): Promise<boolean> {
      dispatch.taskGenerator.generationStarted();
      const numberOfTasks = state.taskGenerator.numberOfTasks;
      const result = await axios.post(`${API_BASE_URL}/api/tasks/bulkcreate`, {
        numberOfTasks,
      });
      console.log(result.data);
      return true;
    },
  }),
});
