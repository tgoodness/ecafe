/* eslint-disable no-unused-vars */
import React from 'react';
import Pageview from '../../layout/Pageview';
import Skeleton from '../../skeleton/Dashboard';
import util from '../../service/util';
import logo from '../../assets/logo.png';
import './style.scss';
import { Empty } from 'antd';

export const FallBack = () => {
  return (
    <div className="fallback">
      <img src={logo} alt="App Icon" width="70" />
    </div>
  );
};

export const ErrorPage = ({ status, error, title }) => {
  console.log(error);
  if (status === 'loading') {
    return (
      <Pageview title={title}>
        <Skeleton />
      </Pageview>
    );
  }

  if (util.error404(error)) {
    return (
      <Pageview title={title}>
        <div className="error-wrapper">
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </div>
      </Pageview>
    );
  }

  if (util.error500(error)) {
    return (
      <Pageview title={title}>
        <div className="error-wrapper">
          <h5>Something went wrong</h5>
          <h6>Please again later</h6>
        </div>
      </Pageview>
    );
  }

  if (util.networkError(error)) {
    return (
      <Pageview title={title}>
        <div className="error-wrapper">
          <h5>Connect to the internet</h5>
          <h6>You’re offline. Check your connection</h6>
          <button className="btn-warning btn btn-retry" onClick={window.location.reload()}>
            RETRY
          </button>
        </div>
      </Pageview>
    );
  }

  return (
    <Pageview title={title}>
      <div className="error-wrapper">
        <h5>Something went wrong</h5>
        <h6>{error.message}</h6>
      </div>
    </Pageview>
  );
};
