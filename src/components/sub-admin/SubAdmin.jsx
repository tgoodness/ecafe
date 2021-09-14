import React from 'react';
import { Avatar, Switch } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import Pageview from '../../lib/layout/Pageview';
import { ErrorPage } from '../../lib/control/error-page/FallBack';
import ManageDisable from './Manage';
import disableModalHandler from './core/DisableModalHandler';

import { admin } from '../../lib/http/admin';
import misc from '../../lib/service/misc';
import util from '../../lib/service/util';
import '../../lib/style/sub-admin.scss';

function Admin() {
  const { registrationId } = useParams();
  const { status, error, data } = useQuery(['admin', registrationId], () => admin(registrationId));
  const [disableStatus, visibleD, showModalD, handleCancelD] = disableModalHandler();

  if (status !== 'success') {
    return <ErrorPage status={status} error={error} data={data} title="Admin" />;
  }

  const profile = data.data.data.admin;
  let loginActivities = data.data.data.admin.loginActivities;
  let loginActivity = '';
  if (loginActivities.length > 0) {
    const lastIndex = data.data.data.admin.loginActivities.length - 1;
    loginActivity = data.data.data.admin.loginActivities[lastIndex];
  }

  return (
    <Pageview title="Admin" className="sub-admin">
      <div className="row">
        <div className="offset-md-2 col-md-8">
          <div className="user-bio-wrapper">
            <Avatar src={misc.adminImage(profile.image)} alt="User Avater" size={100} />
            {profile.firstName !== null && <h5>{`${profile.firstName} ${profile.lastName}`}</h5>}
            <h6>{profile.email}</h6>

            <div className="switch-wrapper">
              <h6>
                <Switch
                  checked={profile.isLocked ? true : false}
                  onClick={() => {
                    showModalD(profile.isLocked);
                  }}
                />
                <span>Disabled</span>
              </h6>
            </div>
            <Link to={`/sub-admin/activity/${registrationId}`}>
              <span className="transaction-link">Activies</span>
            </Link>
          </div>

          <div className="row">
            <div className={`${loginActivities.length > 0 ? 'col-md-6' : 'offset-3 col-md-6'}`}>
              <div className="info-wrapper">
                <h5 className="title">Profile Information</h5>

                <div className="data">
                  <h6>Phone Number</h6>
                  <h5>{profile.phoneNumber}</h5>
                </div>
                <div className="data">
                  <h6>Role</h6>
                  <h5>{profile.role}</h5>
                </div>

                <div className="data">
                  <h6>Account Status</h6>
                  <h5>{profile.isLocked ? 'Disable' : 'Enable'}</h5>
                </div>
              </div>
            </div>

            {loginActivities.length > 0 && (
              <div className="col-md-6">
                <div className="info-wrapper">
                  <h5 className="title">Login Details</h5>

                  <div className="data">
                    <h6>Browser</h6>
                    <h5>{loginActivity.deviceName}</h5>
                  </div>

                  <div className="double-data">
                    <div>
                      <h6>Device</h6>
                      <h5>{loginActivity.deviceModel}</h5>
                    </div>

                    <div>
                      <h6>Ip Address</h6>
                      <h5>{loginActivity.ip}</h5>
                    </div>
                  </div>

                  <div className="data">
                    <h6>Time & Date</h6>
                    <h5>
                      {util.dateFormat(loginActivity.dateAndTime)} -
                      {util.timeFormat(loginActivity.dateAndTime)}
                    </h5>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <ManageDisable
        action={disableStatus}
        registrationId={registrationId}
        visible={visibleD}
        handleCancel={handleCancelD}
      />
    </Pageview>
  );
}

export default Admin;
