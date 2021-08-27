import React, { useState } from 'react';
import { CheckOutlined, SearchOutlined } from '@material-ui/icons';
import { Table } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import Pageview from '../../lib/layout/Pageview';
import searchLogic from './core/SearchLogic';
import util from '../../lib/service/util';
import '../../lib/style/users.scss';

function Users() {
  let count = 0;
  const data = [
    {
      key: '001',
      sn: util.SNformat(count++),
      username: 'Lamilami',
      firstName: 'Oluwasegun',
      lastName: 'Kosemani',
      email: 'ceo@botmecash.com',
      verified: 'YES',
    },
    {
      key: '002',
      sn: util.SNformat(count++),
      username: 'Goodness',
      firstName: 'Tobiloba',
      lastName: 'Akinyemi',
      email: 'tobiloba.akinyemi@botmecash.com',
      verified: 'NO',
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
      // eslint-disable-next-line react/display-name
      render: (text) => <span className="text-info">{text}</span>,
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
        <span>{text === 'YES' ? <CheckOutlined className="text-success" /> : '---'}</span>
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

  const src = searchTerm === '' ? data : searchResults;
  const [selectedRow, setSelectedRow] = useState();
  const handleSelectedRow = (orderId) => {
    setSelectedRow(orderId);
    // showModal();
  };

  console.log(selectedRow);
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
