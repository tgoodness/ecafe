import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import useProfile from './UseProfile';
export const GlobalContext = React.createContext();
const PrivateRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('auth');
  const [state] = useProfile();

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <GlobalContext.Provider value={state}>
            <Component {...props} />
          </GlobalContext.Provider>
        ) : (
          <Redirect to={{ pathname: '/', state: { from: location } }} />
        )
      }
    />
  );
};
export default PrivateRoute;
