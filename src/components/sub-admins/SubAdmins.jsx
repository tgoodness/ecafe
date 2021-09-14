/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
import React from 'react';
import { AddOutlined, CheckOutlined, ClearOutlined, SearchOutlined } from '@material-ui/icons';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';
import { useQuery } from 'react-query';

import Pageview from '../../lib/layout/Pageview';
import { ErrorPage } from '../../lib/control/error-page/FallBack';
import AddAdmin from './add-admin/AddAdmin';
import modalHandler from './add-admin/core/ModalHandler';
import searchLogic from './core/SearchLogic';

import { admins } from '../../lib/http/admin';
import '../../lib/style/shared-history.scss';

function SubAdmin() {
  const { status, error, data } = useQuery('admins', admins);
  let payload = [];
  if (data !== undefined) {
    data.data.data.profiles.map((item, index) => {
      const value = {
        key: item.registrationId,
        sn: index + 1,
        username: item.username === null ? '---' : item.username,
        email: item.email,
        role: item.role,
        phoneNumber: item.phoneNumber === null ? '---' : item.phoneNumber,
        enabled: item.isLocked,
      };
      payload.push(value);
    });
  }

  const [searchTerm, handleSearch, inputRef, searchResults] = searchLogic(payload);
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
      render: (text, record) =>
        text === '---' ? (
          '---'
        ) : (
          <Link to={`/sub-admin/${record.registrationId}`} className="text-info">
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
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      sorter: (a, b) => {
        var v1 = a.role;
        var v2 = b.role;
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
      render: (text) =>
        text ? (
          <ClearOutlined className="text-danger" />
        ) : (
          <CheckOutlined className="text-success" />
        ),
    },

    {
      title: 'More',
      dataIndex: 'key',
      key: 'key',
      render: (text) => (
        <Link to={`/sub-admin/${text}`} className="text-info">
          <RightOutlined />
        </Link>
      ),
    },
  ];

  const src = searchTerm === '' ? payload : searchResults;
  const [visible, showModal, handleCancel] = modalHandler();

  if (status !== 'success') {
    return <ErrorPage status={status} error={error} data={data} title="Admins" />;
  }

  return (
    <Pageview title="Admins">
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

export default SubAdmin;
