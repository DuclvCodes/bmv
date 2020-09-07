import React, { useState } from 'react';
import { Menu } from 'antd';
import { withRouter } from 'react-router-dom';

const Header = (props: any) => {
  const currentPath = props.history.location.pathname;
  const [current, setCurrent] = useState(currentPath);

  const switchPage = (path: string) => {
    props.history.push(path);
    setCurrent(path);
  };

  return (
    <div className="header d-flex">
      <h2 className="logo cursor-pointer">Building Management</h2>
      <div className="float-left">
        <Menu selectedKeys={current} mode="horizontal">
          <Menu.Item key="/about-us">
            <div onClick={() => switchPage('/about-us')}>
              Về chúng tôi
            </div>
          </Menu.Item>
          <Menu.Item key="/project">
            <div onClick={() => switchPage('/project')}>
              Dự án
            </div>
          </Menu.Item>
          <Menu.Item key="/cooperation">
            <div onClick={() => switchPage('/cooperation')}>
              Hợp tác
            </div>
          </Menu.Item>
          <Menu.Item key="/blog">
            <div onClick={() => switchPage('/blog')}>
              Blog
            </div>
          </Menu.Item>
          <Menu.Item key="/material-setting">
            <div onClick={() => switchPage('/material-setting')}>
              Thiết lập vật liệu
            </div>
          </Menu.Item>
        </Menu>
      </div>
      <div className="header-right">Right Item</div>
    </div>
  );
}

export default withRouter(Header);
