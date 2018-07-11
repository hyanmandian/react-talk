import React, { Fragment } from "react";

import Header from "./Header";
import { Main } from "./styles";

export default function App({ children }) {
  return (
    <Fragment>
      <Header />
      <Main>{children}</Main>
    </Fragment>
  );
}
