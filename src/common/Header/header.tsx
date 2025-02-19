import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu,Avatar } from 'antd';
import './header.css';
import SubMenu from 'antd/es/menu/SubMenu';
import { Link } from 'react-router-dom';
const Header: React.FC = () => {

  const [current, setCurrent] = useState('home');

  const handleClick = e => {
    setCurrent(e.key);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', backgroundColor: '#000000' }}>

      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        theme='dark'
        style={{ flex: 1, width: '100%' }}
      >
        <Menu.Item key="home" className='title-container'>
        <Link to="/home"> 简职</Link>
      </Menu.Item>
      </Menu>
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        theme='dark'
        style={{ flex: 5 }}
      >
        <Menu.Item key="personInfo">
          <Link to="/personInfo"> 个人信息</Link>
          </Menu.Item>
        <Menu.Item key="resumeDesign">
        <Link to="/resumeDesign"> 简历定制</Link>
          </Menu.Item>
        <Menu.Item key="applicationTrack">
        <Link to="/applicationTrack"> 投递追踪</Link>
          </Menu.Item>
        <Menu.Item key="reviewLog">
        <Link to="/reviewLog"> 复盘日志</Link>
          </Menu.Item>
      </Menu>
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        theme='dark'
        style={{ marginLeft: 'auto' }}
      >
        <Menu.Item key="itemRight">
          <Avatar icon={<UserOutlined/>}></Avatar>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Header;