import React from 'react';
import { Avatar, Typography, Statistic, Card, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import DynamicForm from '../../common/DynamicForm/dynamicForm'; // Adjust the import path as necessary

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

const { Title } = Typography;

const Home: React.FC = () => {
  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar size={64} icon={<UserOutlined />} />
        <Title style={{ margin: '0 10px 0 10px' }}>名字</Title>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
        <Statistic title="已投递" value={112893} />
        <Statistic title="进笔试" value={112893} />
        <Statistic title="进面试" value={112893} />
        <Statistic title="已获offer" value={112893} />
      </div>
    </div>
    <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
    <Space direction="vertical" size={16}>
    <Card title="近期笔试" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card size="small" title="近期面试" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </Space>
  <Card title="复习一下" extra={<a href="#">More</a>} style={{ flexGrow: 1 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </div>
    </>
)
}

export default Home;
