import React, { lazy, Suspense } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { Login } from "../onboard/Login";
import { PageNotFound } from "../view/Errors";
import Fallback from "../view/FallBack";

const Dashboard = lazy(() => import('../view/Dashboard'));
const Registration = lazy(() => import('../view/Registration'));
const Refund = lazy(() => import('../view/Refund'));
const Schools = lazy(() => import('../view/SchoolList'));
const Payments = lazy(() => import('../view/PaymentList'));
const Security = lazy(() => import('../view/Security'));

export default function Main() {
  return (
    <Suspense fallback={<Fallback />}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <PrivateRoute path="/dashboard" exact component={Dashboard} />
          <PrivateRoute path="/registration" exact component={Registration} />
          <PrivateRoute path="/refund" exact component={Refund} />
          <PrivateRoute path="/schools" exact component={Schools} />
          <PrivateRoute path="/payments/:schoolId/:schoolName" exact component={Payments} />
          <PrivateRoute path="/security" exact component={Security} />
          <Route exact path="/*">
            <PageNotFound />
          </Route>
        </Switch>

      </BrowserRouter>
    </Suspense>
  );
}
