/* eslint-disable react/display-name */
import React from 'react';
import { AddOutlined, CheckOutlined, ClearOutlined, SearchOutlined } from '@material-ui/icons';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';

import Pageview from '../../lib/layout/Pageview';
import searchLogic from './core/SearchLogic';
import AddAdmin from './add-admin/AddAdmin';
import modalHandler from './add-admin/core/ModalHandler';
import util from '../../lib/service/util';
import '../../lib/style/shared-history.scss';

function SubAdmins() {
  let count = 0;
  const data = [
    {
      key: '01',
      sn: util.SNformat(count++),
      registrationId: 'BM37392',
      username: 'Lami',
      email: 'ceo@botmecash.com',
      phoneNumber: '10.00',
      enabled: true,
    },
    {
      key: '02',
      sn: util.SNformat(count++),
      registrationId: 'BM37392',
      username: 'Goodness',
      email: 'tobiloba.akinyemi@botmecash.com',
      phoneNumber: '10.00',
      enabled: false,
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
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
      render: (text) => (
        <Link to="" className="text-info">
          {text}
        </Link>
      ),
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
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      sorter: (a, b) => {
        var v1 = a.email;
        var v2 = b.email;
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
      title: 'PhoneNumber',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
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
      title: 'Enabled',
      dataIndex: 'enabled',
      key: 'enabled',
      render: (enabled) =>
        enabled ? (
          <CheckOutlined className="text-success" />
        ) : (
          <ClearOutlined className="text-danger" />
        ),
    },

    {
      title: 'More',
      dataIndex: 'key',
      key: 'key',
      // eslint-disable-next-line react/display-name
      render: (registrationId) => (
        <Link to={`/sub-admin/${registrationId}`} className="text-info">
          <RightOutlined />
        </Link>
      ),
    },
  ];
  const src = searchTerm === '' ? data : searchResults;

  const [visible, showModal, handleCancel] = modalHandler();
  return (
    <Pageview title="Sub Admins">
      <div className="row shared-history">
        <div className="offset-md-2 col-md-8">
          <div className="search-parent-wrapper">
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
            <div className="add-icon" onClick={showModal}>
              <AddOutlined />
            </div>
          </div>

          <div className="table-responsive">
            <Table columns={columns} dataSource={src} />
          </div>
        </div>
      </div>

      <AddAdmin visible={visible} handleCancel={handleCancel} />
    </Pageview>
  );
}

export default SubAdmins;
