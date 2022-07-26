import React, { useMemo } from 'react';

const CreateTableData = () => {
  const columns = useMemo(
    () => [
      {
        Header: '#',
        accessor: 'id',
        disableGlobalFilter: true,
      },
      {
        Header: 'สวน',
        accessor: 'parkName',
      },
      {
        Header: 'ชื่อเส้นทางวิ่ง',
        accessor: 'routeName',
        disableGlobalFilter: true,
      },
    ],
    [],
  );

  const getRandomDate = (start, end) => new Date(start.getTime() + (Math.random() * (end.getTime()
    - start.getTime()))).toLocaleDateString();

  const data = [];
  const rows = () => {
    for (let i = 1; i < 40; i += 1) {
      data.push({
        id: i,
        routeName: ['รอบเล็ก', 'รอบใหญ่'][Math.floor((Math.random() * 2))],
        parkName: ['สนามศุภชลาสัย', 'สนาม 2  ', 'สนาม 3'][Math.floor((Math.random() * 3))],
      });
    }
  };

  rows();
  const reactTableData = { tableHeaderData: columns, tableRowsData: data };
  return reactTableData;
};

export default CreateTableData;
