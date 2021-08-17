import React from 'react';

function Pageview({ children, ...rest }) {
  return (
    <div className="container">
      <div className="row">
        <div className="offset-md-4 col-md-4">
          <div {...rest}>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Pageview;
