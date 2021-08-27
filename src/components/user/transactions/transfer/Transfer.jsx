import React, { useState } from 'react';
import { SearchOutlined } from '@material-ui/icons';
import { Table } from 'antd';
import { RightOutlined } from '@ant-design/icons';

import searchLogic from './core/SearchLogic';
import modalHandler from './core/ModalHandler';
import Details from './Details';
import util from '../../../../lib/service/util';
import '../../../../lib/style/user-transactions.scss';

function Transfer() {
   let count = 0;
  const data = [
    {
      key: '01',
      sn: util.SNformat(count++),
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
      sn: util.SNformat(count++),
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
      title: 'SN',
      dataIndex: 'sn',
      key: 'sn',
      sorter: {
        compare: (a, b) => a.sn - b.sn,
      },
    },
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
      render: () => <RightOutlined />,
    },
  ];

  const src = searchTerm === '' ? data : searchResults;
  const [selectedRow, setSelectedRow] = useState();

  const [visible, showModal, handleCancel] = modalHandler();
  const handleSelectedRow = (referenceId) => {
    const rowData = data.filter((r) => r.reference === referenceId);
    setSelectedRow(rowData);
    showModal();
  };

  return (
    <>
      <div className="row animate__animated animate__fadeIn">
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
            <Table
              columns={columns}
              dataSource={src}
              onRow={(record) => {
                return { onClick: () => handleSelectedRow(record.reference) };
              }}
            />
          </div>
        </div>
      </div>

      <Details visible={visible} handleCancel={handleCancel} data={selectedRow} />
    </>
  );
}

export default Transfer;
