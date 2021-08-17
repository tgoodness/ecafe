import React from 'react';
import { FilterListOutlined } from '@material-ui/icons';
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

import '../../lib/style/dashboard.scss';

function Dashboard() {
  return (
    <Pageview title="Dashboard" className="dashboard">
      <div className="row">
        <div className="offset-md-2 col-md-8">
          <div className="filter-icon">
            <IconButton>
              <FilterListOutlined />
            </IconButton>
          </div>

          <div className="row section-one">
            <div className="col-md-6 mb-3">
              <div className="card-wrapper">
                <div className="title">
                  <h5>Bitcoin Details</h5>
                  <img src={Bitcoin} alt="Bitcoin Icon" width="50" />
                </div>

                <div className="first-row">
                  <h5>
                    <span>$60,000.00</span> <span>{'>'}0.073732</span>
                  </h5>
                  <h6 className="label">Botmecash</h6>
                </div>

                <div className="second-row">
                  <h5>
                    $60,000.00 <span>{'>'} 0.073732</span>
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
                    $10,000.00 <span>{'>'}0.043732</span>
                  </h5>
                  <h6>Trade Crypto</h6>
                </div>

                <div className="second-row">
                  <h5>
                    $62,100.00 <span>{'>'}0.013732</span>
                  </h5>
                  <h6>P2P</h6>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="card-wrapper">
                <div className="title">
                  <h5>Users</h5>
                  <img src={Users} alt="Users Icon" width="50" />
                </div>

                <div className="first-row">
                  <h5>50000</h5>
                  <h6 className="label">Active</h6>
                </div>

                <div className="second-row">
                  <h5>90000</h5>
                  <h6 className="label">All</h6>
                </div>
              </div>
            </div>
          </div>

          <h5 className="transaction-heading">Transactions</h5>

          <div className="row section-two">
            <div className="col-md-6 mb-3">
              <div className="card-wrapper">
                <div className="title">
                  <h5>Pending</h5>
                  <span className="pending"></span>
                </div>
                <Link to="/trade-crypto">
                  <div className="first-row">
                    <div>
                      <h5>20</h5>
                      <h6 className="label">Trade Crypto</h6>
                    </div>
                    <RightOutlined />
                  </div>
                </Link>
                <Link to="/transfer">
                  <div className="second-row">
                    <div>
                      <h5>50</h5>
                      <h6 className="label">Transfer</h6>
                    </div>
                    <RightOutlined />
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <div className="card-wrapper">
                <div className="title">
                  <h5>Completed</h5>
                  <span className="completed"></span>
                </div>
                <Link to="/trade-crypto">
                  <div className="first-row">
                    <div>
                      <h5>20</h5>
                      <h6 className="label">Trade Crypto</h6>
                    </div>
                    <RightOutlined />
                  </div>
                </Link>
                <Link to="/transfer">
                  <div className="second-row">
                    <div>
                      <h5>50</h5>
                      <h6 className="label">Transfer</h6>
                    </div>
                    <RightOutlined />
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-md-12">
              <div className="card-wrapper">
                <div className="title">
                  <h5>Cancelled</h5>
                  <span className="cancelled"></span>
                </div>
                <Link to="/trade-crypto">
                  <div className="first-row">
                    <div>
                      <h5>20</h5>
                      <h6 className="label">Trade Crypto</h6>
                    </div>
                    <RightOutlined />
                  </div>
                </Link>
                <Link to="/transfer">
                  <div className="second-row">
                    <div>
                      <h5>50</h5>
                      <h6 className="label">Transfer</h6>
                    </div>
                    <RightOutlined />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="row section-three">
            <div className="col-md-6 mb-4">
              <div className="card-wrapper">
                <div className="title">
                  <h5>Sub Admins</h5>
                  <span></span>
                </div>
                <Link to="/trade-crypto">
                  <div className="first-row">
                    <div>
                      <h5>20</h5>
                      <h6 className="label">Active</h6>
                    </div>
                    <RightOutlined />
                  </div>
                </Link>
                <Link to="/transfer">
                  <div className="second-row">
                    <div>
                      <h5>50</h5>
                      <h6 className="label">Disabled</h6>
                    </div>
                    <RightOutlined />
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-md-6">
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
