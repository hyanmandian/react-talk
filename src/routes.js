import React from "react";
import { Router } from "@reach/router";

import Home from "./containers/Home";
import List from "./containers/List";
import Form from "./containers/Form";

export default function Routes() {
  return (
    <Router>
      <Home path="/" />
      <List path="/list" />
      <Form path="/form" />
    </Router>
  );
}
