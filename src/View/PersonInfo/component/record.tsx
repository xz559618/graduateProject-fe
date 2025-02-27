import React, { useState } from "react";
import { List, Typography } from "antd";
import { RightOutlined } from "@ant-design/icons";
import DetailList from "./detailList";

const data = [
  "个人基本信息",
  "工作/实习经历",
  "项目经历",
  "资格证书",
  "获得荣誉",
  "社团/组织经历",
  "专业技能",
  "教育经历",
  "自我评价",
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
          </List.Item>
        )}
      />
    </>
  );
};
export default AddInfo;
