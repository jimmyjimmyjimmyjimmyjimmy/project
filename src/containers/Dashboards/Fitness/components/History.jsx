import React from 'react';
import { useTranslation } from 'react-i18next';
import { Table } from 'reactstrap';
import Panel from '@/shared/components/Panel';

const header = [
  { id: 0, title: 'Park' },
  { id: 1, title: 'Pace' },
  { id: 2, title: 'Distance' },
  { id: 3, title: 'Time' },
];

const rows = [
  {
    id: 0, parkname: 'park1', pace: <p>5&rsquo;6&rdquo;</p>, dist: '0.21 Km', time: '0:15 Hrs',
  }, {
    id: 1, parkname: 'park2', pace: <p>5&rsquo;6&rdquo;</p>, dist: '2.27 Km', time: '0:15 Hrs',
  }, {
    id: 2, parkname: 'park2', pace: <p>5&rsquo;6&rdquo;</p>, dist: '10.01 Km', time: '0:15 Hrs',
  }, {
    id: 3, parkname: 'park2', pace: <p>5&rsquo;6&rdquo;</p>, dist: '12.68 Km', time: '0:15 Hrs',
  }, {
    id: 4, parkname: 'park3', pace: <p>5&rsquo;6&rdquo;</p>, dist: '1.96 Km', time: '0:15 Hrs',
  },
];

const History = () => {
  const { t } = useTranslation('common');

  return (
    <Panel
      xl={12}
      lg={12}
      md={12}
      xs={12}
    >
      <Table responsive striped>
        <thead>
          <tr>
            {header.map(item => (
              <th key={item.id}>{item.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(item => (
            <tr key={item.id}>
              <td>
                <p className={`bold-text dashboard__${item.style}`}>{item.parkname}</p>
              </td>
              <td>{item.pace}</td>
              <td>{item.dist}</td>
              <td>{item.time}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Panel>
  );
};

export default History;
