import React, { useState } from "react";
import { List, Typography } from "antd";
import { RightOutlined } from "@ant-design/icons";
import DetailList from "./detailList";

const data = [
  "校园经历",
  "实习经历",
  "项目经理",
  "个人信息",
  "技能",
  "获得奖励",
];

const AddInfo: React.FC = () => {
  const [currentItem, setCurrentItem] = useState<string | null>(null);

  const handleItemClick = (item: string) => {
    setCurrentItem(item);
  };

  const handleBackClick = () => {
    setCurrentItem(null);
  };

  if (currentItem) {
    console.log("33", currentItem);
    return <DetailList item={currentItem} onBack={handleBackClick} />;
  }
  return (
    <>
      <List
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => handleItemClick(item)}
          >
            {item}
            <RightOutlined />
          </List.Item>
        )}
      />
    </>
  );
};
export default AddInfo;
