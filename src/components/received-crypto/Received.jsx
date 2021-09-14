import React from 'react';
import { useQuery } from 'react-query';
import { SearchOutlined } from '@material-ui/icons';
import { Table } from 'antd';
import { RightOutlined } from '@ant-design/icons';

import Pageview from '../../lib/layout/Pageview';
import { ErrorPage } from '../../lib/control/error-page/FallBack';
import { received } from '../../lib/http/users';

import searchLogic from './core/SearchLogic';
import modalHandler from './core/ModalHandler';
import Details from './Details';
import util from '../../lib/service/util';
import historyTab from '../../lib/service/history-tab';
import '../../lib/style/shared-history.scss';

function Receive() {
  const [active, handleActive] = historyTab();
  const { status, error, data } = useQuery('received', received);
  const [reference, visible, showModal, handleCancel] = modalHandler();

  let payload = [];
  if (data !== undefined) {
    data.data.data.txs.map((item, index) => {
      const value = {
        key: item.transactionReference,
        sn: index + 1,
        registrationId: item.registrationId,
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
      dataIndex: 'registrationId',
      key: 'registrationId',
      // eslint-disable-next-line react/display-name
      render: (text, record) => (
        <span className="text-info" onClick={showModal} id={record.key}>
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
      render: (key) => <RightOutlined onClick={showModal} id={key} />,
    },
  ];

  const [searchTerm, handleSearch, inputRef, searchResults] = searchLogic(payload);
  let src = searchTerm === '' ? payload : searchResults;

  if (active === 'PENDING') {
    src = src.filter((h) => h.status === 'UNCONFIRMED');
  }
  if (active === 'COMPLETED') {
    src = src.filter((h) => h.status === 'CONFIRMED');
  }

  if (status !== 'success') {
    return <ErrorPage status={status} error={error} data={data} title="Received" />;
  }

  return (
    <Pageview title="Received">
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

export default Receive;
