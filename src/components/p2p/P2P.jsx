import React from 'react';
import { SearchOutlined } from '@material-ui/icons';
import { useQuery } from 'react-query';
import { Table } from 'antd';
import { RightOutlined } from '@ant-design/icons';

import Pageview from '../../lib/layout/Pageview';
import { ErrorPage } from '../../lib/control/error-page/FallBack';
import searchLogic from './core/SearchLogic';
import modalHandler from './core/ModalHandler';
import { p2p } from '../../lib/http/users';

import Details from './Details';
import historyTab from '../../lib/service/history-tab';
import util from '../../lib/service/util';
import '../../lib/style/shared-history.scss';

function P2P() {
  const [active, handleActive] = historyTab();
  const { status, error, data } = useQuery('p2p', p2p);
  const [reference, visible, showModal, handleCancel] = modalHandler();

  let payload = [];
  if (data !== undefined) {
    data.data.data.txs.map((item, index) => {
      const value = {
        key: item.referenceNumber,
        sn: index + 1,
        status: item.status,
        amountInDollar: item.amountInDollar,
        amountInCoin: item.amountInCoin,
        buyerFeeInDollar: item.buyerFeeInDollar,
        sellerFeeInDollar: item.sellerFeeInDollar,
        type: item.orderType,
        date: util.dateFormat(item.dateAndTime),
        time: util.timeFormat(item.dateAndTime),
      };
      payload.push(value);
    });
  }

  const [searchTerm, handleSearch, inputRef, searchResults] = searchLogic(payload);
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
        var v1 = a.key;
        var v2 = b.key;
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
      title: 'Buyer Fee(USD)',
      dataIndex: 'buyerFeeInDollar',
      key: 'buyerFeeInDollar',
      sorter: (a, b) => {
        var v1 = a.buyerFeeInDollar;
        var v2 = b.buyerFeeInDollar;
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
      title: 'Seller Fee(USD)',
      dataIndex: 'sellerFeeInDollar',
      key: 'sellerFeeInDollar',
      sorter: (a, b) => {
        var v1 = a.sellerFeeInDollar;
        var v2 = b.sellerFeeInDollar;
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

    {
      title: 'More',
      dataIndex: 'key',
      key: 'key',
      // eslint-disable-next-line react/display-name
      render: (text, record) => (
        <RightOutlined className="text-primary" onClick={showModal} id={record.key} />
      ),
    },
  ];

  let src = searchTerm === '' ? payload : searchResults;

  if (active === 'PENDING') {
    src = src.filter((h) => h.status === 'CANCELLED');
  }

  if (active === 'COMPLETED') {
    src = src.filter((h) => h.status === 'COMPLETED');
  }

  if (status !== 'success') {
    return <ErrorPage status={status} error={error} data={data} title="P2P" />;
  }

  return (
    <Pageview title="P2P">
      <div className="shared-history">
        <div className="row">
          <div className="offset-md-2 col-md-8">
            <div className="tab-wrapper">
              <div
                className={active === 'PENDING' ? 'active' : ''}
                onClick={() => handleActive('PENDING')}
              >
                PENDING
              </div>
              <div
                className={active === 'COMPLETED' ? 'active' : ''}
                onClick={() => handleActive('COMPLETED')}
              >
                COMPLETED
              </div>
            </div>
          </div>
        </div>
        <div className="row">
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
      </div>
      <Details reference={reference} data={data} visible={visible} handleCancel={handleCancel} />
    </Pageview>
  );
}

export default P2P;
