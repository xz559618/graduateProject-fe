// src/View/PersonInfo/component/Detail.tsx
import React, { useState } from "react";
import { EditOutlined, LeftOutlined, PlusOutlined } from "@ant-design/icons";
import DetailListItem from "./detailListItem"; // 确保使用默认导入
import EditForm from "./editForm"; // 假设 EditForm 是默认导出的组件

interface DetailInfoProps {
  item: string;
  onBack: () => void;
}

const DetailList: React.FC<DetailInfoProps> = ({ item, onBack }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState<string | null>(null);

  const handleEditClick = (item: any) => {
    setCurrentItem(item);
    setIsEditing(true);
  };
  const handleCancel = () => {
    setIsEditing(false);
  };
  const handleBackClick = () => {
    setCurrentItem(null);
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
        {isEditing ? null : item}
        {isEditing ? null : (
          <>
            {item === "个人基本信息" && (
              <EditOutlined onClick={() => handleEditClick(item)} />
            )}
            {item !== "个人基本信息" && (
              <PlusOutlined onClick={() => handleEditClick(item)} />
            )}
          </>
        )}
      </div>
      {isEditing ? (
        <EditForm item={currentItem} theme={item} onCancel={handleCancel} />
      ) : (
        <DetailListItem item={item} />
      )}
    </div>
  );
};

export default DetailList;
