import styled from "styled-components";

import LinkComponent from "../../../components/Link";

export const Wrapper = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px 0;
  background: #000;
`;

export const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
`;

Menu.Item = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const Link = styled(LinkComponent)`
  color: #fff;
  padding: 10px;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.5);
    color: #000;
  }

  &[aria-current] {
    background: #fff;
    color: #000;
  }
`;
