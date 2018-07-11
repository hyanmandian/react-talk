import React from "react";

import { RouterAnchor, Anchor } from "./styles";

const isInternal = url => /^\/(?!\/)/.test(url);

export default function Link({ to, children, ...props }) {
  return isInternal(to) ? (
    <RouterAnchor to={to} {...props}>
      {children}
    </RouterAnchor>
  ) : (
    <Anchor href={to} {...props}>
      {children}
    </Anchor>
  );
}
