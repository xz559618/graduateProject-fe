import React, { useState } from "react";
import { Collapse, CollapseProps, List } from "antd";
import EditForm from "./editForm";
import ReadForm from "./readForm";
import DatePeriodCom from "./datePeriodCom";
import DateCom from "./dateCom";
import moment from "moment";
import AddTag from "./addTag";

interface detailListItemProps {
  item: any;
  handleEditClick: (item?: any) => void;
  personInfo?: any;
}

const DetailListItem: React.FC<detailListItemProps> = ({
  item,
  handleEditClick,
  personInfo,
}) => {
  console.log("item111111", item);

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  const [currentItem, setCurrentItem] = useState<unknown | null>(null);

  if (currentItem) {
    console.log("4545", item);
    return <EditForm item={currentItem.title} theme={item} />;
  }

  if (item == "个人基本信息") {
    return (
      <>
        <ReadForm item={personInfo} />
      </>
    );
  } else if (item == "资格证书" || item == "获得荣誉") {
    const items: CollapseProps["items"] = [
      {
        key: "1",
        label: "蓝桥杯",
        children: (
          <DateCom
            title="蓝桥杯市赛三等奖"
            level="市级"
            time={`${moment("2022-01-01").format("YYYY年MM月DD日")} - ${moment(
              "2022-12-31"
            ).format("YYYY年MM月DD日")}`}
            description="负责公司内部管理系统的前端开发工作，使用React和Ant Design进行开发。"
            timeRange={[moment("2022-01-01"), moment("2022-12-31")]}
            handleEditClick={() => {
              const currentItem = items.find((item) => item.key === "1");
              handleEditClick(currentItem);
            }}
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
    return (
      <>
        <Collapse ghost items={items} expandIconPosition="end" />
      </>
    );
  } else if (item == "工作/实习经历") {
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
            timeRange={[moment("2022-01-01"), moment("2022-12-31")]}
            handleEditClick={() => {
              const currentItem = items.find((item) => item.key === "1");
              handleEditClick(currentItem);
            }}
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
    return (
      <>
        <Collapse ghost items={items} expandIconPosition="end" />
      </>
    );
  } else if (item == "项目经历") {
    const items: CollapseProps["items"] = [
      {
        key: "1",
        label: "简职",
        children: (
          <DatePeriodCom
            company="阿里巴巴"
            position="前端开发工程师"
            time="2020年1月 - 至今"
            description="负责公司内部管理系统的前端开发工作，使用React和Ant Design进行开发。"
            contribution="优化了系统的性能，提升了用户体验，并参与了多个重要功能的开发。"
            timeRange={[moment("2022-01-01"), moment("2022-12-31")]}
            handleEditClick={() => {
              const currentItem = items.find((item) => item.key === "1");
              handleEditClick(currentItem);
            }}
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
    return (
      <>
        <Collapse ghost items={items} expandIconPosition="end" />
      </>
    );
  } else if (item == "校园经历") {
    const items: CollapseProps["items"] = [
      {
        key: "1",
        label: "班长",
        children: (
          <DatePeriodCom
            position="班长"
            time="2020年1月 - 至今"
            description="负责公司内部管理系统的前端开发工作，使用React和Ant Design进行开发。"
            contribution="优化了系统的性能，提升了用户体验，并参与了多个重要功能的开发。"
            timeRange={[moment("2022-01-01"), moment("2022-12-31")]}
            handleEditClick={() => {
              const currentItem = items.find((item) => item.key === "1");
              handleEditClick(currentItem);
            }}
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
    return (
      <>
        <Collapse ghost items={items} expandIconPosition="end" />
      </>
    );
  } else if (item == "社团/组织经历") {
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
            timeRange={[moment("2022-01-01"), moment("2022-12-31")]}
            handleEditClick={() => {
              const currentItem = items.find((item) => item.key === "1");
              handleEditClick(currentItem);
            }}
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
    return (
      <>
        <Collapse ghost items={items} expandIconPosition="end" />
      </>
    );
  } else if (item == "专业技能") {
    const initialTags = ["Tag1", "Tag2", "Tag3"];
    return (
      <>
        <AddTag initialTags={initialTags} />
      </>
    );
  } else if (item == "自我评价") {
    const items: CollapseProps["items"] = [
      {
        key: "1",
        label: "技术、语言",
        children: <p>{text}</p>,
      },
      {
        key: "2",
        label: "活动、综合",
        children: <p>{text}</p>,
      },
    ];
    return (
      <>
        <Collapse ghost items={items} expandIconPosition="end" />
      </>
    );
  } else if (item == "教育经历") {
    return <></>;
  } else {
    return <></>;
  }
  // CSS选择器 排序 同源策略 数组和object遍历，有什么不一样的地方
};

export default DetailListItem;
