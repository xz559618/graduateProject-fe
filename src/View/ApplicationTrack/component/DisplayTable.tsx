// interface DataType {
//   key: string;
//   company: string;
//   position: number;
//   location: string;
//   address: string;
//   state: string;
// }

import type {
  EditableFormInstance,
  ProColumns,
  ProFormInstance,
} from "@ant-design/pro-components";
import { EditableProTable, ProForm } from "@ant-design/pro-components";
import { Button, Tag } from "antd";
import React, { useRef, useState } from "react";

type DataSourceType = {
  id: React.Key;
  title?: string;
  decs?: string;
  state?: string;
  created_at?: number;
  update_at?: number;
  children?: DataSourceType[];
  company: string;
  position: number;
  location: string;
  address: string;
};

const defaultData: DataSourceType[] = [
  {
    id: "624748504",
    title: "活动名称一",
    decs: "这个活动真好玩",
    state: "submitted",
    created_at: 1590486176000,
    update_at: 1590486176000,
  },
  {
    id: "624691229",
    title: "活动名称二",
    decs: "这个活动真好玩",
    state: "preExam",
    created_at: 1590481162000,
    update_at: 1590481162000,
  },
];

let i = 0;

const DisplayTable: React.FC = () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(() => []);
  const [position, setPosition] = useState("top");
  const [controlled, setControlled] = useState<boolean>(false);
  const formRef = useRef<ProFormInstance<any>>();
  const editorFormRef = useRef<EditableFormInstance<DataSourceType>>();
  const [dataSource, setDataSource] = useState<DataSourceType[]>(defaultData);
  const columns: ProColumns<DataSourceType>[] = [
    {
      title: "活动名称",
      dataIndex: "title",
      formItemProps: () => {
        return {
          rules: [{ required: true, message: "此项为必填项" }],
        };
      },
      width: "30%",
    },
    {
      title: "状态",
      key: "state",
      dataIndex: "state",
      render: (_, record) => {
        let color = "";
        let text = "";

        switch (record.state) {
          case "submitted":
            color = "blue";
            text = "已投递";
            break;
          case "preExam":
            color = "orange";
            text = "待笔试";
            break;
          case "postExam":
            color = "orange";
            text = "已笔试";
            break;
          case "preInterview":
            color = "orange";
            text = "待面试";
            break;
          case "waiting":
            color = "orange";
            text = "等待结果";
            break;
          case "eliminated":
            color = "lightgray";
            text = "已淘汰";
            break;
          case "offered":
            color = "blue";
            text = "已offer";
            break;
        }

        return <Tag color={color}>{text}</Tag>;
      },
      filters: [
        { text: "已投递", value: "submitted" },
        { text: "待笔试", value: "preExam" },
        { text: "已笔试", value: "postExam" },
        { text: "待面试", value: "preInterview" },
        { text: "等待结果", value: "waiting" },
        { text: "已淘汰", value: "eliminated" },
        { text: "已offer", value: "offered" },
      ],
      onFilter: (value, record) => record.state === value,
    },
    {
      title: "描述",
      dataIndex: "decs",
    },
    {
      title: "活动时间",
      dataIndex: "created_at",
      valueType: "date",
    },
    {
      title: "操作",
      valueType: "option",
      width: 200,
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id, record);
          }}
        >
          编辑
        </a>,
        <a
          key="delete"
          onClick={() => {
            const tableDataSource = formRef.current?.getFieldValue(
              "table"
            ) as DataSourceType[];
            formRef.current?.setFieldsValue({
              table: tableDataSource.filter((item) => item.id !== record.id),
            });
            setDataSource(
              tableDataSource.filter((item) => item.id !== record.id)
            );
          }}
        >
          删除
        </a>,
      ],
    },
  ];

  const handleRequest = async (params: any) => {
    // 模拟异步请求数据
    const { pageSize, current } = params;
    const newData = defaultData.slice(
      (current - 1) * pageSize,
      current * pageSize
    );

    return {
      data: newData,
      success: true,
      total: defaultData.length,
    };
  };

  return (
    <ProForm<{
      table: DataSourceType[];
    }>
      formRef={formRef}
      initialValues={{
        table: defaultData,
      }}
      validateTrigger="onBlur"
      submitter={false} // 取消默认的重置和提交按钮
    >
      <EditableProTable<DataSourceType>
        rowKey="id"
        scroll={{
          x: 960,
        }}
        editableFormRef={editorFormRef}
        headerTitle="可编辑表格"
        maxLength={5}
        name="table"
        controlled={controlled}
        pagination={{
          pageSize: 5, // 每页显示5条数据
          showQuickJumper: true, // 显示快速跳转到某页的功能
        }}
        recordCreatorProps={
          position !== "hidden"
            ? {
                position: position as "top",
                record: () => ({ id: (Math.random() * 1000000).toFixed(0) }),
              }
            : false
        }
        toolBarRender={() => [
          <Button
            key="rows"
            onClick={() => {
              const rows = editorFormRef.current?.getRowsData?.();
              console.log(rows);
            }}
          >
            获取 table 的数据
          </Button>,
        ]}
        request={handleRequest}
        columns={columns}
        editable={{
          type: "multiple",
          editableKeys,
          onChange: setEditableRowKeys,
          actionRender: (row, config, defaultDom) => {
            return [defaultDom.save, defaultDom.delete, defaultDom.cancel];
          },
        }}
      />
    </ProForm>
  );
};

export default DisplayTable;
