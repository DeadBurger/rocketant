import * as signalR from "@microsoft/signalr";
import { init, RematchDispatch, RematchRootState } from "@rematch/core";
import { models, RootModel } from "./models/RootModel";
import { signalMiddleware, withCallbacks } from "redux-signalr";
import { Task } from "./models/Task";

const callbacks = withCallbacks()
  .add("taskCreated", (task: Task) => (dispatch: Dispatcher) => {
    console.log("taskCreated message received", task);
    dispatch({ type: "taskFeed/addTask", payload: task });
  })
  .add("taskUpdated", (task: Task) => (dispatch: Dispatcher) => {
    console.log("taskUpdated message received", task);
    dispatch({ type: "taskFeed/updateTask", payload: task });
  });
export function createStore(connection: signalR.HubConnection) {
  const signal = signalMiddleware({
    callbacks,
    connection,
  });

  return init({
    models,
    redux: {
      middlewares: [signal],
    },
  });
}

export type Dispatcher = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
