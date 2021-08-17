import React from 'react';
import Menu from './Menu';

function Pageview({ title, children, ...rest }) {
  return (
    <div {...rest}>
      <Menu title={title}>{children}</Menu>
    </div>
  );
}

export default Pageview;
