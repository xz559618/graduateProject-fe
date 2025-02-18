import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu,Avatar } from 'antd';
import './header.css';
const Header: React.FC = () => {
  const [current, setCurrent] = useState('avature');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <>
  <div className="menu-container">
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" theme="dark" style={{width:"100%",display: 'flex', justifyContent: 'space-between' }}>
      <div>
      <Menu.Item key="personalInformation">个人信息记录</Menu.Item>
      <Menu.Item key="resumeCreate">简历生成</Menu.Item>
      <Menu.Item key="reviewLog">复盘日志</Menu.Item>
      <Menu.Item key="deliveryTrack">投递追踪</Menu.Item>
      </div>
      <Menu.Item key="avature">
      <Avatar size="small" icon={<UserOutlined />} />
      </Menu.Item>
    </Menu>
  </div>
  </>;
};

export default Header;