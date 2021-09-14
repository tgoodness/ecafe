import React from 'react';
import { Avatar, Switch } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import Pageview from '../../lib/layout/Pageview';
import { ErrorPage } from '../../lib/control/error-page/FallBack';
import { user } from '../../lib/http/users';

import ManageDisable from './Manage';
import ManageFreeze from './Freeze';
import disableModalHandler from './core/DisableModalHandler';
import freezeModalHandler from './core/FreezeModalHandler';
import util from '../../lib/service/util';
import misc from '../../lib/service/misc';
import '../../lib/style/user.scss';

function User() {
  const { registrationId } = useParams();
  const { status, error, data } = useQuery(['user', registrationId], () => user(registrationId));
  const [disableStatus, visibleD, showModalD, handleCancelD] = disableModalHandler();
  const [freeStatus, visibleF, showModalF, handleCancelF] = freezeModalHandler();

  if (status !== 'success') {
    return <ErrorPage status={status} error={error} data={data} title="User" />;
  }

  const profile = data.data.data.user;
  let loginActivities = data.data.data.user.loginActivities;
  let loginActivity = '';
  if (loginActivities.length > 0) {
    const lastIndex = data.data.data.user.loginActivities.length - 1;
    loginActivity = data.data.data.user.loginActivities[lastIndex];
  }

  let wallet = '';
  if (profile.walletExist) {
    wallet = data.data.data.wallet;
  }
  const analytics = data.data.data.analytics;

  return (
    <Pageview title="User" className="user">
      <div className="row">
        <div className="offset-md-2 col-md-8">
          <div className="user-bio-wrapper">
            <Avatar src={misc.userImage(profile.profileImage)} alt="User Avater" size={100} />

            <h5>
              {profile.verifyStatus === 'VERIFIED'
                ? `${profile.firstName} ${profile.lastName}`
                : '--- ---'}
            </h5>
            <h6>{profile.email}</h6>

            <div className="switch-wrapper">
              <h6>
                <Switch
                  checked={profile.isLocked ? true : false}
                  onClick={() => {
                    showModalD(profile.isLocked);
                  }}
                />
                <span>Disable</span>
              </h6>

              <h6>
                <Switch
                  checked={profile.frozen ? true : false}
                  onClick={() => {
                    showModalF(profile.frozen);
                  }}
                />
                <span>Frozen</span>
              </h6>
            </div>
            <Link to={`/user/transactions/${profile.registrationId}`}>
              <span className="transaction-link">Activities</span>
            </Link>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="info-wrapper">
                <h5 className="title">Profile Information</h5>

                <div className="data">
                  <h6>Username</h6>
                  <h5>{profile.username}</h5>
                </div>

                <div className="data">
                  <h6>Phone Number</h6>
                  <h5>{profile.phoneNumber === null ? '---' : profile.phoneNumber}</h5>
                </div>

                <div className="data">
                  <h6>Account Status</h6>
                  <h5> {profile.verifyStatus === 'VERIFIED' ? 'Verified' : 'Unverified'}</h5>
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

            {profile.walletExist && (
              <div className="col-md-6">
                <div className="info-wrapper">
                  <h5 className="title">Bitcoin Details</h5>

                  <div className="data">
                    <h6>Balance</h6>
                    <h5>{wallet.balanceInDollar}</h5>
                  </div>

                  <div className="data">
                    <h6>Balance (BTC)</h6>
                    <h5>{wallet.balance}</h5>
                  </div>

                  <div className="data">
                    <h6>Wallet Address</h6>
                    <h5>{wallet.walletAddress === null ? '---' : wallet.walletAddress}</h5>
                  </div>
                </div>
              </div>
            )}
            <div className="col-md-6">
              <div className="info-wrapper">
                <h5 className="title">Transactions</h5>

                <div className="data">
                  <h6>Buy</h6>
                  <h5>
                    $
                    {analytics.totalBoughtInDollar === null ? '0.0' : analytics.totalBoughtInDollar}
                  </h5>
                </div>

                <div className="data">
                  <h6>Sell</h6>
                  <h5>
                    ${analytics.totalSoldInDollar === null ? '0.0' : analytics.totalSoldInDollar}
                  </h5>
                </div>

                <div className="data">
                  <h6>Transfer</h6>
                  <h5>
                    $
                    {analytics.totalTransferInDollar === null
                      ? '0.0'
                      : analytics.totalTransferInDollar}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ManageDisable
        action={disableStatus}
        registrationId={registrationId}
        visible={visibleD}
        handleCancel={handleCancelD}
      />
      <ManageFreeze
        action={freeStatus}
        registrationId={registrationId}
        visible={visibleF}
        handleCancel={handleCancelF}
      />
    </Pageview>
  );
}

export default User;
