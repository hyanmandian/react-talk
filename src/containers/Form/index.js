import React, { Component } from "react";

import Container from "../../components/Container";
import Button from "../../components/Button";

export default class Form extends Component {
  state = {
    subject: "",
    message: ""
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState(() => ({
      [name]: value.toUpperCase()
    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    alert(`Uhull: ${JSON.stringify(this.state, null, 2)}`);
  };

  handleClear = () => {
    this.setState(() => ({
      subject: "",
      message: ""
    }));
  };

  render() {
    return (
      <Container>
        <strong>Form</strong>
        <br />
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Subject</label>
            <br />
            <input
              name="subject"
              value={this.state.subject}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div>
            <label>Message</label>
            <br />
            <textarea name="message" onChange={this.handleChange} />
          </div>
          <Button type="submit" kind="primary">
            Send
          </Button>
          <Button onClick={this.handleClear} kind="secondary">
            Clear
          </Button>
        </form>

        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </Container>
    );
  }
}
