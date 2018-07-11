import React from "react";
import { render } from "react-dom";
import "sanitize.css";

import App from "./containers/App";
import Routes from "./routes";
import registerServiceWorker from "./registerServiceWorker";

const Root = () => (
  <App>
    <Routes />
  </App>
);

render(<Root />, document.getElementById("root"));

registerServiceWorker();
