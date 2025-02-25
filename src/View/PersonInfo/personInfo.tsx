import React, { useState } from "react";
import { Card } from "antd";
import AddInfo from "./component/record"; // 修改为 PascalCase

const PersonInfo: React.FC = () => {
  const [activeTabKey2, setActiveTabKey2] = useState<string>("search"); // 修改默认值

  const onTab2Change = (key: string) => {
    setActiveTabKey2(key);
  };

  return (
    <Card
      style={{ width: "100%" }}
      activeTabKey={activeTabKey2}
      onTabChange={onTab2Change}
      tabProps={{
        size: "middle",
      }}
    >
      <AddInfo />
    </Card>
  );
};

export default PersonInfo;
