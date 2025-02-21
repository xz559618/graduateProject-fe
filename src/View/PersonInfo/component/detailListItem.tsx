import React, { useState } from "react";
import { List } from "antd";
import EditForm from "./editForm";

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

const DetailInfo: React.FC = () => {
  const [currentItem, setCurrentItem] = useState<{ title: string } | null>(
    null
  );

  const handleClick = (item: { title: string }) => {
    setCurrentItem(item);
    console.log(item);
  };

  if (currentItem) {
    console.log("4545");
    return <EditForm item={currentItem.title} />;
  }

  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item
          onClick={() => handleClick(item)}
          style={{
            cursor: "pointer",
          }}
        >
          <List.Item.Meta title={item.title} description={index} />
        </List.Item>
      )}
    />
  );
};

export default DetailInfo;
