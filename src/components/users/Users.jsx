/* eslint-disable react/display-name */
import React from 'react';
import { useQuery } from 'react-query';
import { CheckOutlined, SearchOutlined, CloseOutlined } from '@material-ui/icons';
import { Table } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import Pageview from '../../lib/layout/Pageview';
import { ErrorPage } from '../../lib/control/error-page/FallBack';
import searchLogic from './core/SearchLogic';
import { users } from '../../lib/http/users';
import '../../lib/style/users.scss';

function Users() {
  const { status, error, data } = useQuery('users', users);
  let payload = [];
  if (data !== undefined) {
    data.data.data.users.map((item, index) => {
      const value = {
        key: item.registrationId,
        sn: index + 1,
        username: item.username,
        firstName: item.verifyStatus === 'VERIFIED' ? item.firstName : '---',
        lastName: item.verifyStatus === 'VERIFIED' ? item.lastName : '---',
        email: item.email,
        verified: item.verifyStatus,
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

      render: (text, record) => (
        <Link to={`user/${record.key}`} className="text-info">
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
      title: 'FirstName',
      dataIndex: 'firstName',
      key: 'firstName',
      sorter: (a, b) => {
        var v1 = a.firstName;
        var v2 = b.firstName;
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
      title: 'LastName',
      dataIndex: 'lastName',
      key: 'lastName',
      sorter: (a, b) => {
        var v1 = a.lastName;
        var v2 = b.lastName;
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
      // eslint-disable-next-line react/display-name
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
      title: 'Verified',
      dataIndex: 'verified',
      key: 'verified',
      // eslint-disable-next-line react/display-name
      render: (text) => (
        <span>
          {text === 'VERIFIED' ? (
            <CheckOutlined className="text-success" />
          ) : (
            <CloseOutlined className="text-danger" />
          )}
        </span>
      ),
      sorter: (a, b) => {
        var v1 = a.verified;
        var v2 = b.verified;
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

  const src = searchTerm === '' ? payload : searchResults;
  if (status !== 'success') {
    return <ErrorPage status={status} error={error} data={data} title="Users" />;
  }
  return (
    <Pageview title="Users" className="users">
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
    </Pageview>
  );
}

export default Users;
