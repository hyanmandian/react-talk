import React, { Component } from "react";

import Photo from "./Photo";

import Container from "../../components/Container";
import Button from "../../components/Button";

export default class List extends Component {
  /* Start */
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: false
    };

    console.log("constructor");
  }

  /*
    Update state after render;
    Doesn't have access to the component instance;
    Rare use cases;
  */
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps: ", props, state);

    return null;
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");

    return true;
  }

  fetchItems = async () => {
    this.setState({
      loading: true
    });

    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();

    this.setState({
      data: data.slice(0, 10),
      loading: false
    });
  };

  renderItems() {
    return this.state.data.map(item => <Photo key={item.id} {...item} />);
  }

  render() {
    console.log("render");

    const { loading } = this.state;

    return (
      <Container>
        <strong>List {loading ? "- Loading" : ""}</strong>{" "}
        <Button onClick={this.fetchItems}>Re-fetch</Button>
        {this.renderItems()}
      </Container>
    );
  }

  /*
    Get some information from last output committed to the DOM;
    Returned value will be passed as parameter to componentDidUpdate();
  */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate: ", prevProps, prevState);

    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");

    this.fetchItems();
  }

  componentDidUpdate(prevProps) {
    console.log("componentDidUpdate: ", prevProps);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
}
