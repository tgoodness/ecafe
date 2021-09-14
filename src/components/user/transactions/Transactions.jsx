import React from 'react';
import { useQuery } from 'react-query';
import { SearchOutlined } from '@material-ui/icons';
import { Table } from 'antd';
import { useParams } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';

import Pageview from '../../../lib/layout/Pageview';
import { ErrorPage } from '../../../lib/control/error-page/FallBack';
import { userTransactions } from '../../../lib/http/users';

import searchLogic from './core/SearchLogic';
import modalHandler from './core/ModalHandler';
import historyTab from '../../../lib/service/user-transaction-tab';
import Details from './Details';
import util from '../../../lib/service/util';
import '../../../lib/style/shared-history.scss';

function Transactions() {
  const { registrationId } = useParams();
  const [active, handleActive] = historyTab();
  const { status, error, data } = useQuery(['userTransaction', registrationId], () =>
    userTransactions(registrationId)
  );
  const [reference, visible, showModal, handleCancel] = modalHandler();

  let payload = [];
  if (data !== undefined) {
    data.data.data.txs.map((item, index) => {
      const value = {
        key: item.transactionReference,
        sn: index + 1,
        amountInDollar: item.amountInDollar,
        amountInCoin: item.amountInCoin,
        feeInDollar: item.feeInDollar,
        orderType: item.orderType,
        status: item.status,
        date: util.dateFormat(item.dateAndTime),
        time: util.timeFormat(item.dateAndTime),
      };
      payload.push(value);
    });
  }

  const columns = [
    {
      title: 'S/N',
      dataIndex: 'sn',
      key: 'sn',
      sorter: {
        compare: (a, b) => a.sn - b.sn,
      },
    },
    {
      title: 'Reference',
      dataIndex: 'key',
      key: 'key',
      // eslint-disable-next-line react/display-name
      render: (text) => (
        <span className="text-info" onClick={showModal} id={text}>
          {text}
        </span>
      ),
      sorter: (a, b) => {
        var v1 = a.registrationId;
        var v2 = b.registrationId;
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
      dataIndex: 'orderType',
      key: 'orderType',
      sorter: (a, b) => {
        var v1 = a.orderType;
        var v2 = b.orderType;
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
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      sorter: (a, b) => {
        var v1 = a.status;
        var v2 = b.status;
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

    {
      title: 'More',
      dataIndex: 'key',
      key: 'key',
      // eslint-disable-next-line react/display-name
      render: (key) => <RightOutlined className="text-info" onClick={showModal} id={key} />,
    },
  ];

  const [searchTerm, handleSearch, inputRef, searchResults] = searchLogic(payload);
  let src = searchTerm === '' ? payload : searchResults;

  if (active === 'P2P') {
    src = src.filter((h) => h.orderType === 'P2P');
  }

  if (active === 'TRADE') {
    src = src.filter((h) => h.orderType === 'TRADE');
  }

  if (active === 'TRANSFER') {
    src = src.filter((h) => h.orderType === 'TRANSFER');
  }

  if (active === 'DEPOSIT') {
    src = src.filter((h) => h.orderType === 'DEPOSIT');
  }

  if (status !== 'success') {
    return <ErrorPage status={status} error={error} data={data} title="Transactions" />;
  }

  return (
    <Pageview title="Transactions" className="user-transactions">
      <div className="row shared-history">
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
              className={active === 'DEPOSIT' ? 'active' : ''}
              onClick={() => handleActive('DEPOSIT')}
            >
              Received
            </div>
          </div>
        </div>
      </div>
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

      <Details reference={reference} data={data} visible={visible} handleCancel={handleCancel} />
    </Pageview>
  );
}

export default Transactions;
