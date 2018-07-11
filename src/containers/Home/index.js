import React, { Component, Fragment } from "react";

import Container from "../../components/Container";
import Button from "../../components/Button";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      tasks: [
        { title: "State", checked: false },
        { title: "Props", checked: false },
        { title: "Component, PureComponent, Stateless", checked: false },
        { title: "Lifecycle", checked: false },
        { title: "CSS, CSS in JS", checked: false }
      ]
    };
  }

  handleCheck = i => {
    this.setState(({ tasks, ...state }) => {
      tasks[i].checked = !tasks[i].checked;

      const nextState = {
        ...state,
        tasks
      };

      return nextState;
    });
  };

  increment = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }));
  };

  decrement = () => {
    this.setState(({ counter }) => ({
      counter: counter - 1
    }));
  };

  render() {
    const { counter, tasks } = this.state;

    return (
      <Container>
        <strong>Home</strong>
        <div>
          {tasks.map((task, i) => (
            <Fragment>
              <label key={i}>
                <input
                  type="checkbox"
                  onChange={() => this.handleCheck(i)}
                  checked={task.checked}
                />{" "}
                {task.title}
              </label>
              <br />
            </Fragment>
          ))}
        </div>
        <br />
        <div>
          <Button onClick={this.decrement}>-</Button>
          {counter}
          <Button onClick={this.increment}>+</Button>
        </div>
      </Container>
    );
  }
}
