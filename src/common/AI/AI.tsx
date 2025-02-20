import React from 'react';
import { BulbOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
const AI: React.FC = () => {

  return (
    <>
        <FloatButton
      shape="circle"
      type="primary"
      style={{ insetInlineEnd: 94 }}
      icon={<BulbOutlined />}
    />
    </>
  );
};

export default AI;