import React from "react";
import { Container, Button, Form, Row } from "react-bootstrap";
import { RootState } from "../store";
import { connect } from "react-redux";
import { RematchDispatch } from "@rematch/core";
import { RootModel } from "../models/RootModel";
import { Redirect } from "react-router-dom";

export class GenerateTasks extends React.PureComponent<Props> {
  render() {
    const {
      numberOfTasks,
      generationStarted,
      onChangeNumberOfTasks,
      startCreator,
    } = this.props;

    const changeNumberOfTasks = (event: any) =>
      onChangeNumberOfTasks(event.target.value);

    if (generationStarted) return <Redirect to="/" />;

    return (
      <Container className="p-3">
        <Row>
          <Form>
            <Form.Group controlId="formSeconds">
              <Form.Label>Number of tasks to create</Form.Label>
              <Form.Control
                type="number"
                value={numberOfTasks}
                onChange={changeNumberOfTasks}
              />
            </Form.Group>
            <Button variant="primary" onClick={startCreator}>
              Generate
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}

const mapState = (state: RootState) => ({
  numberOfTasks: state.taskGenerator.numberOfTasks,
  generationStarted: state.taskGenerator.generationStarted,
});

const mapDispatch = (dispatch: RematchDispatch<RootModel>) => ({
  onChangeNumberOfTasks: dispatch.taskGenerator.changeNumberOfTasks,
  startCreator: dispatch.taskGenerator.startCreator,
});

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = ReturnType<typeof mapDispatch>;
type Props = StateProps & DispatchProps;

export default connect(mapState, mapDispatch)(GenerateTasks);
