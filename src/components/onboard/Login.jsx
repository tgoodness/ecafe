import React from "react";
import { Page } from "./Page";
import Input from "../controls/Input";
import FormControl from "../controls/FormControl";
import Alert from "../controls/Alert-Black";
import { Button } from "../controls/Button";
import Card from "@material-ui/core/Card";

//custom hook

import loginHandler from "../core/login/handler";
import useLogin from "../core/login/login";

export const Login = () => {
  const [
    email,
    handleEmailChange,
    password,
    showPassword,
    mouseDown,
    handlePasword,
  ] = loginHandler();

  const [state, handleSubmit, handleClose] = useLogin(
    email.value,
    password.value
  );

  return (
    <Page>
      <Card className="form-wrapper mt-5">
        <form onSubmit={handleSubmit}>
          <h5 className="h5 text-center">Admin Login</h5>
          <h6 className="h6 mb-5  text-center">
            Use your email and password to login.
          </h6>
          <Input
            label="Email"
            name="email"
            value={email.value}
            type="email"
            onChange={handleEmailChange}
            error={email.error}
            helperText={email.helperText}
          />
          <FormControl
            label="Password"
            type={password.showPassword}
            value={password.password}
            onChange={handlePasword("password")}
            error={password.error}
            helperText={password.helperText}
            onClick={showPassword}
            onMouseDown={mouseDown}
          />
          <br /> <br />
          <div className="text-center">
            <Button label="Login" loading={state.loading} />
            <Alert
              open={state.open}
              msg={state.message}
              onClose={handleClose}
            />
          </div>
        </form>
      </Card>
    </Page>
  );
};
