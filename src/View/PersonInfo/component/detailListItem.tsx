import React, { useState } from "react";
import { Collapse, CollapseProps, List } from "antd";
import EditForm from "./editForm";
import ReadForm from "./readForm";

interface detailListItemProps {
  item: any;
}

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
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "班长",
    children: <p>{text}</p>,
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

const formFields: DynamicFormField[] = [
  {
    name: "name",
    label: "姓名",
    type: "text",
    rules: [{ required: true, message: "请输入姓名" }],
  },
  {
    name: "sex",
    label: "性别",
    type: "select",
    options: [
      { value: "男", label: "男" },
      { value: "女", label: "女" },
    ],
  },
];

const DetailListItem: React.FC<detailListItemProps> = ({ item }) => {
  console.log("item111111", item);

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
