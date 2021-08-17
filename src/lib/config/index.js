import React, { Suspense, lazy } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import FallBack from '../control/error-page/FallBack';
const Login = lazy(() => import('../../components/login/Login'));
const Dashboard = lazy(() => import('../../components/dashboard/Dashboard'));
const Users = lazy(() => import('../../components/users/Users'));
const User = lazy(() => import('../../components/user/User'));
const UserTransactions = lazy(() => import('../../components/user/transactions/Transactions'));
const TradeCrypto = lazy(() => import('../../components/trade-crypto/TradeCrypto'));
const P2P = lazy(() => import('../../components/p2p/P2P'));
const Transfer = lazy(() => import('../../components/transfer/Transfer'));
const SubAdmins = lazy(() => import('../../components/sub-admins/SubAdmins'));
const Profile = lazy(() => import('../../components/profile/Profile'));
const SendCrypto = lazy(() => import('../../components/send-crypto/SendCrypto'));
const ChangePassword = lazy(() => import('../../components/change-password/ChangePassword'));
const PageNotFound = lazy(() => import('../control/error-page/PageNotFound'));

function Index() {
  return (
    <Suspense fallback={<FallBack />}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/users" component={Users} />
          <PrivateRoute path="/user/transactions/:registrationId" component={UserTransactions} />
          <PrivateRoute path="/user/:registrationId" component={User} />
          <PrivateRoute path="/sub-admins" component={SubAdmins} />
          <PrivateRoute path="/trade-crypto" component={TradeCrypto} />
          <PrivateRoute path="/p2p" component={P2P} />
          <PrivateRoute path="/transfer" component={Transfer} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/send-crypto" component={SendCrypto} />
          <PrivateRoute path="/change-password" component={ChangePassword} />

          <PrivateRoute path="/*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default Index;
