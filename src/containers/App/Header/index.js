import React from "react";

import { Wrapper, Menu, Link } from "./styles";

export default function Header() {
  return (
    <Wrapper>
      <Menu>
        <Menu.Item>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/list">List</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/form">Form</Link>
        </Menu.Item>
      </Menu>
    </Wrapper>
  );
}
