import React from "react";
import { Descriptions } from "antd";
import type { DescriptionsProps } from "antd";

interface EditFormProps {
  item?: any;
  theme?: any;
}

const ReadForm: React.FC<EditFormProps> = ({ item, theme }) => {
  console.log("eritem", item);
  return (
    <>
      <Descriptions items={item} />
    </>
  );
};

export default ReadForm;
