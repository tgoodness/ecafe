import React from 'react';
import { Switch } from 'antd';
import { Link } from 'react-router-dom';

import Pageview from '../../lib/layout/Pageview';
import Avater from '../../lib/assets/avater.png';
import '../../lib/style/sub-admin.scss';

function User() {
  return (
    <Pageview title="Sub Admin" className="sub-admin">
      <div className="row">
        <div className="offset-md-2 col-md-8">
          <div className="user-bio-wrapper">
            <img src={Avater} alt="User Avater" width={100} />
            <h5>Tobiloba Akinyemi</h5>
            <h6>tobiloba.akinyemi@botmecash.com</h6>

            <div className="switch-wrapper">
              <h6>
                <Switch defaultChecked />
                <span>Enabled</span>
              </h6>

              <h6>
                <Switch defaultChecked />
                <span>Frozen</span>
              </h6>
            </div>
            <Link to={`/sub-admin/activity/${'848'}`}>
              <span className="transaction-link">Activies</span>
            </Link>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="info-wrapper">
                <h5 className="title">Profile Information</h5>

                <div className="data">
                  <h6>Username</h6>
                  <h5>goodness</h5>
                </div>

                <div className="data">
                  <h6>Phone Number</h6>
                  <h5>08068694950</h5>
                </div>

                <div className="data">
                  <h6>Account Status</h6>
                  <h5>Active</h5>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="info-wrapper">
                <h5 className="title">Login Details</h5>

                <div className="data">
                  <h6>Browser</h6>
                  <h5>Chrome</h5>
                </div>

                <div className="double-data">
                  <div>
                    <h6>Device</h6>
                    <h5>Infinix 507</h5>
                  </div>

                  <div>
                    <h6>Ip Address</h6>
                    <h5>192.02.134</h5>
                  </div>
                </div>

                <div className="data">
                  <h6>Time & Date</h6>
                  <h5>8th April, 2021 - 10:00am</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Pageview>
  );
}

export default User;
