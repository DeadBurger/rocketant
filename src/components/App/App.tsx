import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "../NavigationBar";
import TaskList from "../TaskList/TaskList";
import GenerateTasks from "../GenerateTasks";

export class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Router>
          <NavigationBar />
          <Switch>
            <Route exact path="/">
              <TaskList />
            </Route>
            <Route path="/generate">
              <GenerateTasks />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
