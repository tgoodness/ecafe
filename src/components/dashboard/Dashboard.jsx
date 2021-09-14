/* eslint-disable no-unused-vars */
import React from 'react';
import { useQuery } from 'react-query';
import {
  FilterListOutlined,
  CheckOutlined,
  ListAltOutlined,
  AccountCircleOutlined,
  CloseOutlined,
} from '@material-ui/icons';
import { RightOutlined } from '@ant-design/icons';
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Pageview from '../../lib/layout/Pageview';
import InputImage from '../../lib/control/InputImage';

// logo
import BitcoinLogo from '../../lib/assets/currency/btc.png';
import DollarLogo from '../../lib/assets/currency/dollar.png';

import Bitcoin from '../../lib/assets/dashboard/bitcoin.png';
import Profit from '../../lib/assets/dashboard/profit.png';
import Users from '../../lib/assets/dashboard/users.png';
import { ErrorPage } from '../../lib/control/error-page/FallBack';
import { analytics } from '../../lib/http/admin';
import '../../lib/style/dashboard.scss';

function Dashboard() {
  const { status, error, data } = useQuery('analytics', analytics);

  if (status !== 'success') {
    return <ErrorPage status={status} error={error} title="Dashboard" />;
  }

  const btc = data.data.data.btc;
  const payload = data.data.data;

  return (
    <Pageview title="Dashboard" className="dashboard">
      <div className="row">
        <div className="offset-md-2 col-md-8">
          {/* <div className="filter-icon">
            <IconButton>
              <FilterListOutlined />
            </IconButton>
          </div> */}

          <div className="row section-one">
            <div className="col-md-6 mb-3">
              <div className="card-wrapper">
                <div className="title">
                  <h5>Bitcoin Details</h5>
                  <img src={Bitcoin} alt="Bitcoin Icon" width="50" />
                </div>

                <div className="first-row">
                  <h5>
                    <span>${btc.platformBalance.balanceInDollar}</span>{' '}
                    <span>
                      {'>'}
                      {btc.platformBalance.balanceInBTC}
                    </span>
                  </h5>
                  <h6 className="label">Botmecash</h6>
                </div>

                <div className="second-row">
                  <h5>
                    ${btc.customerBalance.totalBalanceInDollar}{' '}
                    <span>
                      {'>'} {btc.customerBalance.totalBalance}
                    </span>
                  </h5>
                  <h6 className="label">Customer</h6>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <div className="card-wrapper">
                <div className="title">
                  <h5>Profits</h5>
                  <img src={Profit} alt="Profit Icon" width="50" />
                </div>

                <div className="first-row">
                  <h5>
                    ${btc.totalSellingProfitInDollar}{' '}
                    <span>
                      {'>'}
                      {btc.totalSellingProfitInCoin}
                    </span>
                  </h5>
                  <h6>Trade Crypto</h6>
                </div>

                <div className="second-row">
                  <h5>
                    ${btc.totalP2PProfitInDollar}{' '}
                    <span>
                      {'>'}
                      {btc.totalP2PProfitInCoin}
                    </span>
                  </h5>
                  <h6>P2P</h6>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <Link to="/users">
                <div className="card-wrapper">
                  <div className="title">
                    <h5>Users</h5>
                    <img src={Users} alt="Users Icon" width="50" />
                  </div>

                  <div className="first-row">
                    <h5>{payload.totalUser}</h5>
                    <h6 className="label">Active</h6>
                  </div>

                  <div className="second-row">
                    <h5>{payload.totalUserDisabled}</h5>
                    <h6 className="label">Disabled</h6>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-6 mb-3 transaction-section">
              <div className="card-wrapper">
                <div className="title">
                  <h5>Pending</h5>
                  <ListAltOutlined className="pending" />
                </div>
                <Link to="/trade-crypto">
                  <div className="first-row">
                    <div>
                      <h5>{btc.totalPendingBTCSold}</h5>
                      <h6 className="label">Sell Crypto</h6>
                    </div>
                    <RightOutlined />
                  </div>
                </Link>
                <Link to="/transfer">
                  <div className="second-row">
                    <div>
                      <h5>{payload.totalPendingTransfer}</h5>
                      <h6 className="label">Transfer</h6>
                    </div>
                    <RightOutlined />
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-md-6 transaction-section mb-3">
              <div className="card-wrapper">
                <div className="title">
                  <h5>Completed</h5>
                  <CheckOutlined className="completed" />
                </div>
                <Link to="/trade-crypto">
                  <div className="first-row">
                    <div>
                      <h5>{btc.totalBTCSoldCompleted}</h5>
                      <h6 className="label">Sell Crypto</h6>
                    </div>
                    <RightOutlined />
                  </div>
                </Link>
                <Link to="/transfer">
                  <div className="second-row">
                    <div>
                      <h5>{payload.totalCompletedTransfer}</h5>
                      <h6 className="label">Transfer</h6>
                    </div>
                    <RightOutlined />
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-md-6 transaction-section">
              <div className="card-wrapper">
                <div className="title">
                  <h5>Cancelled</h5>
                  <CloseOutlined className="cancelled" />
                </div>
                <Link to="/trade-crypto">
                  <div className="first-row">
                    <div>
                      <h5>{btc.totalBTCSoldCancelled}</h5>
                      <h6 className="label">Sell Crypto</h6>
                    </div>
                    <RightOutlined />
                  </div>
                </Link>
                <Link to="/transfer">
                  <div className="second-row">
                    <div>
                      <h5>{payload.totalCancelledTransfer}</h5>
                      <h6 className="label">Transfer</h6>
                    </div>
                    <RightOutlined />
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-md-6  bitcoin-section mb-4">
              <div className="card-wrapper">
                <div className="title">
                  <h5>Sub Admins</h5>
                  <AccountCircleOutlined />
                </div>
                <Link to="/trade-crypto">
                  <div className="first-row">
                    <div>
                      <h5>{payload.totalEnabledAdmin}</h5>
                      <h6 className="label">Active</h6>
                    </div>
                    <RightOutlined />
                  </div>
                </Link>
                <Link to="/transfer">
                  <div className="second-row">
                    <div>
                      <h5>{payload.totalDisabledAdmin}</h5>
                      <h6 className="label">Disabled</h6>
                    </div>
                    <RightOutlined />
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-md-6 bitcoin-section">
              <div className="converter">
                <h5>Bitcoin Converter</h5>
                <InputImage label="BTC" img={BitcoinLogo} />
                <InputImage label="USD" img={DollarLogo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Pageview>
  );
}

export default Dashboard;
