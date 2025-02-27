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
  state?: string;
  created_at?: number;
  update_at?: number;
  children?: DataSourceType[];
  company?: string;
  position?: string;
  location?: string;
  address?: string;
};

const defaultData: DataSourceType[] = [
  {
    id: "624748504",
    state: "submitted",
    created_at: 1590486176000,
    update_at: 1590486176000,
    company: "时代天使",
    position: "前端开发",
    location: "上海市杨浦区创智天地",
    address: "http://gitlab.eainc.com/users/sign_in",
  },
  {
    id: "624748505",
    state: "preExam",
    created_at: 1590486176000,
    update_at: 1590486176000,
    company: "阿里巴巴",
    position: "后端开发",
    location: "杭州市西湖区",
    address: "http://alibaba.com/careers",
  },
];

const DisplayTable: React.FC = () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(() => []);
  const [position, setPosition] = useState("top");
  const [controlled, setControlled] = useState<boolean>(false);
  const formRef = useRef<ProFormInstance<any>>();
  const editorFormRef = useRef<EditableFormInstance<DataSourceType>>();
  const [dataSource, setDataSource] = useState<DataSourceType[]>(defaultData);

  const statusOptions = [
    { label: "已投递", value: "submitted" },
    { label: "待笔试", value: "preExam" },
    { label: "已笔试", value: "postExam" },
    { label: "待面试", value: "preInterview" },
    { label: "等待结果", value: "waiting" },
    { label: "已淘汰", value: "eliminated" },
    { label: "已offer", value: "offered" },
  ];

  const columns: ProColumns<DataSourceType>[] = [
    {
      title: "公司名称",
      dataIndex: "company",
      formItemProps: () => {
        return {
          rules: [{ required: true, message: "此项为必填项" }],
        };
      },
    },
    {
      title: "职位",
      dataIndex: "position",
    },
    {
      title: "地点",
      dataIndex: "location",
    },
    {
      title: "状态",
      key: "state",
      dataIndex: "state",
      valueType: "select",
      valueEnum: {
        submitted: { text: "已投递", status: "submitted" },
        preExam: { text: "待笔试", status: "preExam" },
        postExam: { text: "已笔试", status: "postExam" },
        preInterview: { text: "待面试", status: "preInterview" },
        waiting: { text: "等待结果", status: "waiting" },
        eliminated: { text: "已淘汰", status: "eliminated" },
        offered: { text: "已offer", status: "offered" },
        unKnown: { text: "长期未响应", status: "unKnown" },
      },
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
          case "unKnown":
            color = "lightgray";
            text = "长期未响应";
            break;
        }

        return <Tag color={color}>{text}</Tag>;
      },
      filters: statusOptions.map((option) => ({
        text: option.label,
        value: option.value,
      })),
      onFilter: (value, record) => record.state === value,
    },
    {
      title: "地址",
      dataIndex: "address",
      render: (text) => (
        <a href={text} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      ), // 将地址渲染为可点击的链接，并在新窗口中打开
    },
    {
      title: "创建时间",
      dataIndex: "created_at",
      valueType: "date",
      editable: false, // 创建时间不可编辑
    },
    {
      title: "更新时间",
      dataIndex: "update_at",
      valueType: "date",
      editable: false, // 更新时间不可编辑
    },
    {
      title: "操作",
      valueType: "option",
      width: 200,
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id);
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
                record: () => ({
                  id: (Math.random() * 1000000).toFixed(0),
                  created_at: Date.now(),
                  update_at: Date.now(),
                }),
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
          onSave: async (key, row) => {
            const updatedData = dataSource.map((item) =>
              item.id === key
                ? { ...item, ...row, update_at: Date.now() }
                : item
            );
            setDataSource(updatedData);
          },
        }}
      />
    </ProForm>
  );
};

export default DisplayTable;
