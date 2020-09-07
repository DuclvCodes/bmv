import React from 'react';
import { Row, Col, Select, Button, Menu, Dropdown, Layout, Tabs } from "antd";
import { CaretLeftOutlined, DownOutlined, CloseOutlined } from '@ant-design/icons';
import Hvac from './hvac';
import FireFighting from './fireFighting';
import Electric from './electric';
import './index.css';

const { Option } = Select;
const { SubMenu } = Menu;
const { Sider } = Layout;
const { TabPane } = Tabs;

const Project = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">1st item</Menu.Item>
      <Menu.Item key="2">2nd item</Menu.Item>
      <Menu.Item key="3">3rd item</Menu.Item>
    </Menu>
  );

  return (
    <div>
      <div className="header-project">
        <Row gutter={24}>
          <Col lg={3} md={4} sm={6}>
            <h3>Tên dự án</h3>
          </Col>
          <Col lg={3} md={4} sm={6}>
            <h3>Bộ môn</h3>
          </Col>
          <Col lg={18} md={16} sm={12}>
            <Select className="select-subject">
              <Option value={'mep'}>
                MEP
              </Option>
              <Option value={'mep1'}>
                MEP 1
              </Option>
            </Select>
            <div className="float-right">
              <Button type="primary" className="mr-10">Share</Button>
              <Dropdown overlay={menu}>
                <Button type="primary">
                  Export <DownOutlined />
                </Button>
              </Dropdown>
            </div>
          </Col>
        </Row>
        <div>
          Ngày tạo dự án: 02/01/2020
        </div>
        <div>
          Ngày chỉnh sửa gần nhất: 30/01/2020
        </div>
      </div>

      <Layout className="main-project">
        <Sider width={250} className="main-project-left mr-10">
          <div className="menu-header">
            <div className="float-left">Mục lục</div>
            <Button className="menu-collapse float-right">
              <CaretLeftOutlined />
            </Button>
          </div>

          <div className="clear-float">
            <Menu mode="inline">
              <SubMenu key={'workload'} title="Khối lượng công việc">
                <SubMenu title="Công tác">
                  <Menu.Item key={'concrete'}>
                    Bê tông
                  </Menu.Item>
                  <Menu.Item  key={'concrete-2'}>
                    Bê tông
                  </Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu key={'sortItems'} title="Sắp xếp hạng mục" />
              <SubMenu key={'namedItems'} title="Đặt tên hạng mục" />
              <SubMenu key={'mepConfig'} title="Thiết lập MEP" />
            </Menu>
          </div>
        </Sider>
        <Layout>
          <Row gutter={24}>
            <Col span={7}>
              {/*loop setting*/}
              <div className="setting mb-10">
                <div className="setting-header">
                  Bê tông
                  <CloseOutlined className="float-right cursor-pointer mt-5" />
                </div>
                <div className="pd-10">
                  <Select className="w-100 mb-10">
                    <Option value="1">
                      Bê tông cấp nền B35 - vữa M75
                    </Option>
                  </Select>
                  <Select className="w-100 mb-10">
                    <Option value="1">
                      Bê tông cấp nền B35 - vữa M75
                    </Option>
                  </Select>
                </div>
              </div>

              <div className="setting">
                <div className="setting-header">
                  Bê tông
                  <CloseOutlined className="float-right cursor-pointer mt-5" />
                </div>
                <div className="pd-10">
                  <Select className="w-100 mb-10">
                    <Option value="1">
                      Bê tông cấp nền B35 - vữa M75
                    </Option>
                  </Select>
                  <Select className="w-100 mb-10">
                    <Option value="1">
                      Bê tông cấp nền B35 - vữa M75
                    </Option>
                  </Select>
                </div>
              </div>
            </Col>
            <Col span={17}>
              <Tabs defaultActiveKey="1">
                <TabPane tab="HVAC" key="1">
                  <Hvac />
                </TabPane>
                <TabPane tab="Chữa cháy" key="2">
                  <FireFighting />
                </TabPane>
                <TabPane tab="Điện" key="3">
                  <Electric />
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        </Layout>
      </Layout>
    </div>
  );
}

export default Project;
