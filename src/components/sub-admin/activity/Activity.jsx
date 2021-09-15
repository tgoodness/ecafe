/* eslint-disable react/display-name */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { SearchOutlined } from '@material-ui/icons';

import Pageview from '../../../lib/layout/Pageview';
import { ErrorPage } from '../../../lib/control/error-page/FallBack';

import { Table } from 'antd';
import searchLogic from './core/SearchLogic';
import { adminActivities } from '../../../lib/http/admin';
import util from '../../../lib/service/util';
import '../../../lib/style/shared-history.scss';

function Activity() {
  const { registrationId } = useParams();
  const { status, error, data } = useQuery(['adminActivities', registrationId], () =>
    adminActivities(registrationId)
  );

  let payload = [];
  if (data !== undefined) {
    data.data.data.trails.map((item, index) => {
      const performedBy = JSON.parse(item.performedBy);
      const value = {
        key: item.trailUuid,
        sn: index + 1,
        taskPerformed: item.taskPerformed,
        registrationId: performedBy.registrationId,
        role: performedBy.role,
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
      title: 'RegistrationId',
      dataIndex: 'registrationId',
      key: 'registrationId',
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
      title: 'Task Performed',
      dataIndex: 'taskPerformed',
      key: 'taskPerformed',

      sorter: (a, b) => {
        var v1 = a.taskPerformed;
        var v2 = b.taskPerformed;
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
      // eslint-disable-next-line react/display-name
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

  if (status !== 'success') {
    return <ErrorPage status={status} error={error} title="Activities" />;
  }
  const src = searchTerm === '' ? payload : searchResults;

  return (
    <Pageview title="Activities" className="user-transactions">
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
