import React, { useState } from "react";
import { Collapse, CollapseProps, List } from "antd";
import EditForm from "./editForm";
import ReadForm from "./readForm";
import DatePeriodCom from "./datePeriodCom";

interface detailListItemProps {
  item: any;
  handleEditClick: (item?: any) => void;
}

const DetailListItem: React.FC<detailListItemProps> = ({
  item,
  handleEditClick,
}) => {
  console.log("item111111", item);

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "班长",
      children: (
        <DatePeriodCom
          company="阿里巴巴"
          position="前端开发工程师"
          time="2020年1月 - 至今"
          description="负责公司内部管理系统的前端开发工作，使用React和Ant Design进行开发。"
          contribution="优化了系统的性能，提升了用户体验，并参与了多个重要功能的开发。"
          handleEditClick={() => handleEditClick(items)}
        />
      ),
    },
    {
      key: "2",
      label: "辅导员助理",
      children: <p>{text}</p>,
    },
    {
      key: "3",
      label: "学生会会长",
      children: <p>{text}</p>,
    },
  ];

  const [currentItem, setCurrentItem] = useState<{ title: string } | null>(
    null
  );

  if (currentItem) {
    console.log("4545", item);
    return <EditForm item={currentItem.title} theme={item} />;
  }

  if (item == "个人基本信息") {
    return (
      <>
        <ReadForm />
      </>
    );
  } else if (item == "资格证书" || item == "获得荣誉") {
    return <>{item == "资格证书" ? <>资格证书</> : <>获得荣誉</>}</>;
  } else {
    return (
      <>
        <Collapse ghost items={items} expandIconPosition="end" />
      </>
    );
  }
};

export default DetailListItem;
function handleEditClick(item: any) {
  throw new Error("Function not implemented.");
}
