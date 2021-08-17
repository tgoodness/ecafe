import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

export const GlobalContext = React.createContext();
const PrivateRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();
  //const isLoggedIn = localStorage.getItem('auth');
  const isLoggedIn = 'user';

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
};
export default PrivateRoute;
