import React from "react";
import { Container, Table, Button, ProgressBar } from "react-bootstrap";
import { RootState } from "../../store";
import { connect } from "react-redux";
import { RematchDispatch } from "@rematch/core";
import { RootModel } from "../../models/RootModel";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./TaskList.css";

export class TaskList extends React.PureComponent<Props> {
  render() {
    const { tasks, getTasks } = this.props;
    return (
      <Container className="p-3">
        <Table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Progress</th>
            </tr>
          </thead>
          <TransitionGroup component="tbody">
            {tasks.map((task) => {
              return (
                <CSSTransition key={task.id} timeout={500} classNames="item">
                  <tr>
                    <td>{task.description}</td>
                    <td>
                      <ProgressBar
                        animated
                        now={(task.currentStep / task.numOfSteps) * 100}
                        label={`${Math.round(
                          (task.currentStep / task.numOfSteps) * 100
                        )} %`}
                      />
                    </td>
                  </tr>
                </CSSTransition>
              );
            })}
          </TransitionGroup>
        </Table>
        <Button onClick={getTasks} variant="primary">
          Refresh
        </Button>
      </Container>
    );
  }

  componentDidMount() {
    this.props.getTasks();
  }
}

const mapState = (state: RootState) => ({
  tasks: state.taskFeed.tasks,
});

const mapDispatch = (dispatch: RematchDispatch<RootModel>) => ({
  getTasks: () => dispatch.taskFeed.getTasksAsync(),
});

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = ReturnType<typeof mapDispatch>;
type Props = StateProps & DispatchProps;

export default connect(mapState, mapDispatch)(TaskList);
