import React from 'react';
import { Tabs } from 'antd';
// import BiddingPackage from './biddingPackage';
import Setting from './setting';
import Weight from './weight';
import './index.css';

const { TabPane } = Tabs;

const MaterialSetting = () => {
  return (
    <div className="container-material-setting">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Gói thầu" key="1">
          {/* <BiddingPackage /> */}
        </TabPane>
        <TabPane tab="Thiết lập" key="2">
          <Setting />
        </TabPane>
        <TabPane tab="Khối lượng" key="3">
          <Weight />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default MaterialSetting;
