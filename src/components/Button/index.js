import React from 'react';
import { oneOf, node, bool } from 'prop-types';
import cn from 'classnames';

import './index.css';

export default function Button({ children, rounded, outlined, kind, ...props }) {
  return (
    <button className={cn('Button', {
      [`-${kind}`]: kind,
      '-rounded': rounded,
      '-outlined': outlined,
    })} {...props}>
      { children }
    </button>
  );
}

Button.propTypes = {
  children: node,
  kind: oneOf(['default', 'primary', 'secondary']).isRequired,
  rounded: bool,
  outlined: bool,
};

Button.defaultProps = {
  kind: 'default',
};
