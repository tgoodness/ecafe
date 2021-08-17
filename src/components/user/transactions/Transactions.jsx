import React, { useState } from 'react';
import { SearchOutlined } from '@material-ui/icons';
import { Table } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import Pageview from '../../../lib/layout/Pageview';
import searchLogic from './core/SearchLogic';
import '../../../lib/style/user-transactions.scss';
import handleTab from './core/handleTab';

function Users() {
  const [active, handleActive] = handleTab();

  const data = [
    {
      key: '01',
      reference: 'BM37392',
      amountInDollar: '578.00',
      amountInCoin: '0.07856393',
      feeInDollar: '10.00',
      type: 'SELL',
      date: '21/03/2020',
      time: '10:20AM',
    },
    {
      key: '02',
      reference: 'BM373923',
      amountInDollar: '572.00',
      amountInCoin: '0.03856393',
      feeInDollar: '102.00',
      type: 'BUY',
      date: '21/05/2020',
      time: '10:20PM',
    },
  ];

  const [searchTerm, handleSearch, inputRef, searchResults] = searchLogic(data);

  const columns = [
    {
      title: 'Reference',
      dataIndex: 'reference',
      key: 'reference',
      // eslint-disable-next-line react/display-name
      render: (text) => <span className="text-info">{text}</span>,
      sorter: (a, b) => {
        var v1 = a.reference;
        var v2 = b.reference;
        if (v1 < v2) {
          return -1;
        }
        if (v1 > v2) {
          return 1;
        }
        return 0;
      },
    },

    {
      title: 'Amount(USD)',
      dataIndex: 'amountInDollar',
      key: 'amountInDollar',
      sorter: (a, b) => {
        var v1 = a.amountInDollar;
        var v2 = b.amountInDollar;
        if (v1 < v2) {
          return -1;
        }
        if (v1 > v2) {
          return 1;
        }
        return 0;
      },
    },

    {
      title: 'Amount(BTC)',
      dataIndex: 'amountInCoin',
      key: 'amountInCoin',
      sorter: (a, b) => {
        var v1 = a.amountInCoin;
        var v2 = b.amountInCoin;
        if (v1 < v2) {
          return -1;
        }
        if (v1 > v2) {
          return 1;
        }
        return 0;
      },
    },

    {
      title: 'Fee(USD)',
      dataIndex: 'feeInDollar',
      key: 'feeInDollar',
      // eslint-disable-next-line react/display-name
      sorter: (a, b) => {
        var v1 = a.feeInDollar;
        var v2 = b.feeInDollar;
        if (v1 < v2) {
          return -1;
        }
        if (v1 > v2) {
          return 1;
        }
        return 0;
      },
    },

    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      sorter: (a, b) => {
        var v1 = a.type;
        var v2 = b.type;
        if (v1 < v2) {
          return -1;
        }
        if (v1 > v2) {
          return 1;
        }
        return 0;
      },
    },

    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      // eslint-disable-next-line react/display-name
      render: (text) => <span className="text-info">{text}</span>,
      sorter: (a, b) => {
        var v1 = a.date;
        var v2 = b.date;
        if (v1 < v2) {
          return -1;
        }
        if (v1 > v2) {
          return 1;
        }
        return 0;
      },
    },

    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
      // eslint-disable-next-line react/display-name
      render: (text) => <span className="text-info">{text}</span>,
      sorter: (a, b) => {
        var v1 = a.time;
        var v2 = b.time;
        if (v1 < v2) {
          return -1;
        }
        if (v1 > v2) {
          return 1;
        }
        return 0;
      },
    },

    {
      title: 'More',
      dataIndex: 'key',
      key: 'key',
      // eslint-disable-next-line react/display-name
      render: (registrationId) => (
        <Link to={`user/${registrationId}`}>
          <RightOutlined />
        </Link>
      ),
    },
  ];

  const src = searchTerm === '' ? data : searchResults;
  const [selectedRow, setSelectedRow] = useState();
  const handleSelectedRow = (orderId) => {
    setSelectedRow(orderId);
    // showModal();
  };
  console.log(selectedRow);

  return (
    <Pageview title="Transactions" className="user-transactions">
      <div className="row">
        <div className="offset-md-2 col-md-8">
          <div className="tab-wrapper">
            <div className={active === 'P2P' ? 'active' : ''} onClick={() => handleActive('P2P')}>
              P2P
            </div>
            <div
              className={active === 'TRADE' ? 'active' : ''}
              onClick={() => handleActive('TRADE')}
            >
              Trade
            </div>
            <div
              className={active === 'TRANSFER' ? 'active' : ''}
              onClick={() => handleActive('TRANSFER')}
            >
              Transfer
            </div>
            <div
              className={active === 'RECEIVE' ? 'active' : ''}
              onClick={() => handleActive('RECEIVE')}
            >
              Received
            </div>
          </div>
          <div className="search-wrapper" data-aos="fade-down">
            <SearchOutlined />
            <input
              type="text"
              ref={inputRef}
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search"
            />
          </div>

          <div className="table-responsive">
            <Table
              columns={columns}
              dataSource={src}
              onRow={(record) => {
                return { onClick: () => handleSelectedRow(record.key) };
              }}
            />
          </div>
        </div>
      </div>
    </Pageview>
  );
}

export default Users;
