// src/View/PersonInfo/component/DetailInfo.tsx
import React, { useState } from "react";
import { Typography, Button } from "antd";
import { LeftOutlined, PlusOutlined } from "@ant-design/icons";
import DetailInfo from "../component/detailInfo"; // 确保使用默认导入
import EditForm from "../component/editForm"; // 假设 EditForm 是默认导出的组件

interface DetailInfoProps {
  item: string;
  onBack: () => void;
}

const Detail: React.FC<DetailInfoProps> = ({ item, onBack }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleBackClick = () => {
    if (!isEditing) {
      onBack();
    } else {
      setIsEditing(false);
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <LeftOutlined onClick={handleBackClick} />
        <PlusOutlined onClick={handleEditClick} />
      </div>
      {isEditing ? <EditForm /> : <DetailInfo />}
    </div>
  );
};

export default Detail;
