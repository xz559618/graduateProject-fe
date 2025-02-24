import React from "react";
import { Descriptions } from "antd";
import type { DescriptionsProps } from "antd";

interface EditFormProps {
  item?: any;
  theme?: any;
}

const items: DescriptionsProps["items"] = [
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

const ReadForm: React.FC<EditFormProps> = ({ item, theme }) => {
  console.log("item", item);
  return (
    <>
      <Descriptions items={items} />
    </>
  );
};

export default ReadForm;
