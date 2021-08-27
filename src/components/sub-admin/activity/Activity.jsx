/* eslint-disable react/display-name */
import React from 'react';
import Pageview from '../../../lib/layout/Pageview';

import { CheckOutlined, SearchOutlined } from '@material-ui/icons';
import { Table } from 'antd';

import util from '../../../lib/service/util';
import searchLogic from './core/SearchLogic';
import '../../../lib/style/shared-history.scss';
import { Link } from 'react-router-dom';

function Activity() {
  let count = 0;
  const data = [
    {
      key: '01',
      sn: util.SNformat(count++),
      approved: true,
      username: 'Lami',
      userId: 'BM37392',
      orderId: 'TXO233722',
      amountInDollar: '578.00',
      type: 'P2P(BUY)',
      date: '21/03/2020',
      time: '10:20AM',
    },
    {
      key: '02',
      sn: util.SNformat(count++),
      approved: true,
      username: 'Goodness',
      userId: 'BM37392',
      orderId: 'TXO243722',
      amountInDollar: '228.00',
      type: 'P2P(BUY)',
      date: '21/03/2020',
      time: '10:20AM',
    },
  ];

  const [searchTerm, handleSearch, inputRef, searchResults] = searchLogic(data);
  const columns = [
    {
      title: 'S/N',
      dataIndex: 'sn',
      key: 'sn',
      sorter: (a, b) => {
        var v1 = a.sn;
        var v2 = b.sn;
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
      title: 'Approved',
      dataIndex: 'approved',
      key: 'approved',
      render: (text) => (text ? <CheckOutlined className="text-success" /> : '---'),
    },
    {
      title: 'ApproveBy',
      dataIndex: 'username',
      key: 'username',
      render: (text) => <Link to="">{text}</Link>,
      sorter: (a, b) => {
        var v1 = a.username;
        var v2 = b.username;
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
      title: 'UserID',
      dataIndex: 'userId',
      key: 'userId',
      render: (text) => <Link to="">{text}</Link>,
      sorter: (a, b) => {
        var v1 = a.userId;
        var v2 = b.userId;
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
      title: 'OrderId',
      dataIndex: 'orderId',
      key: 'orderId',
      render: (text) => <Link to="">{text}</Link>,
      sorter: (a, b) => {
        var v1 = a.orderId;
        var v2 = b.orderId;
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
      // eslint-disable-next-line react/display-name
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
  ];

  const src = searchTerm === '' ? data : searchResults;

  return (
    <Pageview title="Activity" className="user-transactions">
      <div className="row shared-history">
        <div className="offset-md-2 col-md-8">
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
            <Table columns={columns} dataSource={src} />
          </div>
        </div>
      </div>
    </Pageview>
  );
}

export default Activity;
