import React, { useState } from "react";
import { Card } from "antd";
import AddInfo from "./component/record"; // 修改为 PascalCase

const tabListNoTitle = [
  {
    key: "add",
    label: "记录",
  },
  {
    key: "search",
    label: "总览",
  },
];

const contentListNoTitle: Record<string, React.ReactNode> = {
  search: <p>总览内容</p>, // 添加对应的内容
  add: <AddInfo />, // 使用 PascalCase
};

const PersonInfo: React.FC = () => {
  const [activeTabKey2, setActiveTabKey2] = useState<string>("search"); // 修改默认值

  const onTab2Change = (key: string) => {
    setActiveTabKey2(key);
  };

  return (
    <Card
      style={{ width: "100%" }}
      tabList={tabListNoTitle}
      activeTabKey={activeTabKey2}
      onTabChange={onTab2Change}
      tabProps={{
        size: "middle",
      }}
    >
      {contentListNoTitle[activeTabKey2]}
    </Card>
  );
};

export default PersonInfo;
