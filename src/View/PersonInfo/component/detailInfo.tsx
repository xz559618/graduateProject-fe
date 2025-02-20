import React from "react";
import { List } from "antd";

const data = [
  {
    title: "班长",
  },
  {
    title: "辅导员助理",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];

const DetailInfo: React.FC = () => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta title={item.title} description={index} />
      </List.Item>
    )}
  />
);

export default DetailInfo;
