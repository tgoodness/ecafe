import React from 'react';
import Pageview from '../../lib/layout/LoginPageview';
import Input from '../../lib/control//Input';
import FormControl from '../../lib/control/FormControl';
import Alert from '../../lib/control/Alert';
import Button from '../../lib/control//Button';

import formHandler from './core/FormHandler';
import loginRequest from './core/LoginRequst';

import '../../lib/style/login.scss';
import Logo from '../../lib/assets/logo.png';

function Login() {
  const [email, handleEmailChange, password, showPassword, mouseDown, handlePasword] =
    formHandler();

  const [state, handleSubmit, handleClose] = loginRequest(email.value, password.value);

  return (
    <Pageview className="login">
      <form onSubmit={handleSubmit}>
        <img src={Logo} alt="App Logo" />
        <h5 className="h5 text-center">Admin Login</h5>
        <h6 className="h6 mb-5  text-center">Use your email and password to login.</h6>

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
          onChange={handlePasword('password')}
          error={password.error}
          helperText={password.helperText}
          onClick={showPassword}
          onMouseDown={mouseDown}
        />

        <div className="text-center">
          <Button label="Login" className="btn btn-warning btn-block " loading={state.loading} />
          <Alert open={state.open} msg={state.message} onClose={handleClose} />
        </div>
      </form>
    </Pageview>
  );
}

export default Login;
