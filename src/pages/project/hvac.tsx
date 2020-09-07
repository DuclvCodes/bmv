import React from 'react';
import { Collapse, Table } from "antd";

const { Panel } = Collapse;

const Hvac = () => {
  const columns:any[] = [
    {
      title: 'STT',
      dataIndex: 'key',
    },
    {
      title: 'Tên chất liệu',
      dataIndex: 'materialName',
    },
    {
      title: 'Đơn vị',
      dataIndex: 'unit',
    },
    {
      title: 'Số lượng',
      dataIndex: 'amount',
    },
    {
      title: 'Ghi chú',
      dataIndex: 'note',
    },
  ];

  const data:any[] = [
    {
      key: 1,
      materialName: 'Ống CEN-M-Pressurization',
      unit: 'm2',
      amount: 23,
      note: ''
    },
  ];

  return (
    <div>
      <Collapse
        defaultActiveKey={['1']}
        className="mb-20"
      >
        <Panel header="Hạng mục: Phụ kiện ống gió" key="1">
          <Table
            bordered
            dataSource={data}
            columns={columns}
            pagination={false}
          />
        </Panel>
      </Collapse>
    </div>
  );
}

export default Hvac;
