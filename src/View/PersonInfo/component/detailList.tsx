// src/View/PersonInfo/component/Detail.tsx
import React, { useState } from "react";
import { EditOutlined, LeftOutlined, PlusOutlined } from "@ant-design/icons";
import DetailListItem from "./detailListItem"; // 确保使用默认导入
import EditForm from "./editForm"; // 假设 EditForm 是默认导出的组件
import { DescriptionsProps } from "antd/es/descriptions";

interface DetailInfoProps {
  item: string;
  onBack: () => void;
}

const personInfo: DescriptionsProps["items"] = [
  {
    key: "1",
    label: "姓名",
    children: "谢真",
  },
  {
    key: "2",
    label: "电话",
    children: "10000000000",
  },
  {
    key: "3",
    label: "邮箱",
    children: "10000000000@163.com",
  },
  {
    key: "4",
    label: "微信",
    children: "123456",
  },
  {
    key: "5",
    label: "最高学历",
    children: "硕士",
  },
];

const DetailList: React.FC<DetailInfoProps> = ({ item, onBack }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState<string | null>(null);

  const handleEditClick = (item: any) => {
    console.log("handleEditClickItem", item);
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
              <EditOutlined onClick={() => handleEditClick(personInfo[0])} />
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
        <DetailListItem
          item={item}
          handleEditClick={handleEditClick}
          personInfo={personInfo}
        />
      )}
    </div>
  );
};

export default DetailList;
