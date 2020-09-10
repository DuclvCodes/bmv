import React from 'react';
import { Collapse, Select, Tabs } from 'antd';
import AddItems from './addItems';
import Material from './material';
import RevitLink from './revitLink';
import RoundingTheMass from './roundingTheMass';
import SameLevel from './sameLevel';
import SettingItems from './settingItems';
import WeightGroup from './weightGroup';

const { Panel } = Collapse;
const { Option } = Select;
const { TabPane } = Tabs;

const Index = () => {
  const header = () => {
    return (
      <div>
        Bộ môn: {' '}
        <Select value={1} style={{ minWidth: 100 }} onClick={(e) => e.stopPropagation()}>
          <Option value={1}>
            Kết cấu
          </Option>
        </Select>
      </div>
    )
  };

  return (
    <div>
      <Collapse
        defaultActiveKey={['1']}
        className="mb-20"
      >
        <Panel header={header()} key="1">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Material" key="1">
              <Material />
            </TabPane>
            <TabPane tab="Nhóm khối lượng" key="2">
              <WeightGroup />
            </TabPane>
            <TabPane tab="Same level" key="3">
              <SameLevel />
            </TabPane>
            <TabPane tab="Revit Link" key="4">
              <RevitLink />
            </TabPane>
            <TabPane tab="Thiết lập hạng mục" key="5">
              <SettingItems />
            </TabPane>
            <TabPane tab="Thêm hạng mục" key="6">
              <AddItems />
            </TabPane>
            <TabPane tab="Làm tròn khối lượng" key="7">
              <RoundingTheMass />
            </TabPane>
          </Tabs>
        </Panel>
      </Collapse>
    </div>
  );
}

export default Index;
