import React from "react";
import type { TableColumnsType, TableProps } from "antd";
import DynamicForm from "../../../common/DynamicForm/dynamicForm"; // Adjust the import path as necessary

interface EditFormProps {
  item?: any;
  theme?: any;
  onCancel?: () => void;
}

interface FieldConfig {
  type: string;
  label?: string;
  name?: string;
  options?: { label: string; value: number | string }[];
  buttonText?: string;
  buttonOnClick?: (formData: any) => void;
}

const formStyle = {
  width: "100%",
  margin: "0 auto",
};

const EditForm: React.FC<EditFormProps> = ({ item, theme, onCancel }) => {
  console.log("item", item);
  let fields: FieldConfig[] = [];
  if (theme == "个人基本信息") {
    fields = [
      {
        type: "input",
        label: "姓名",
        name: "谢真",
      },
      {
        type: "input",
        label: "电话",
        name: "10000000000",
      },
      {
        type: "input",
        label: "邮箱",
        name: "10000000000@163.com",
      },
      {
        type: "input",
        label: "微信",
        name: "123456",
      },
      {
        type: "input",
        label: "最高学历",
        name: "硕士",
      },
      {
        type: "button",
        buttonText: "保存",
        buttonOnClick: (formData) => {
          console.log("表单数据:", formData); // 打印表单数据
        },
      },
      {
        type: "button",
        buttonText: "取消",
        buttonOnClick: () => {
          onCancel(); // 打印表单数据
        },
      },
    ];
  } else {
    fields = [
      {
        type: "input",
        label: "姓名",
        name: "谢真",
      },
      {
        type: "input",
        label: "电话",
        name: "10000000000",
      },
      {
        type: "input",
        label: "邮箱",
        name: "10000000000@163.com",
      },
      {
        type: "button",
        buttonText: "保存",
        buttonOnClick: (formData) => {
          console.log("表单数据:", formData); // 打印表单数据
        },
      },
      {
        type: "button",
        buttonText: "取消",
        buttonOnClick: () => {
          onCancel(); // 打印表单数据
        },
      },
    ];
  }
  return (
    <>
      <div>{item.label}</div> {/* 渲染 label */}
      <div>{item.children ? item.children : item}</div> {/* 渲染 children */}
      <DynamicForm
        fields={fields}
        formStyle={formStyle}
        style={{ width: "10%" }}
      />
    </>
  );
};

export default EditForm;
