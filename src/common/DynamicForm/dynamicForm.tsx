import React from "react";
import { Form, Input, Button, Select, Table, DatePicker, Space } from "antd";
import type { TableColumnsType, TableProps } from "antd";

type FieldType = "input" | "select" | "datePicker" | "table" | "button";

interface FieldConfig {
  type: FieldType;
  label?: string;
  name?: string;
  options?: { label: string; value: any }[];
  columns?: TableColumnsType<any>;
  dataSource?: any[];
  onChange?: TableProps<any>["onChange"];
  buttonText?: string;
  buttonOnClick?: () => void;
}

interface DynamicFormProps {
  fields: FieldConfig[];
  formStyle?: React.CSSProperties;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ fields, formStyle }) => {
  const [form] = Form.useForm();

  // 收集所有按钮字段
  const buttonFields = fields.filter((field) => field.type === "button");

  return (
    <Form form={form} layout="vertical" style={formStyle}>
      {fields.map((field, index) => {
        switch (field.type) {
          case "input":
            return (
              <Form.Item
                label={field.label}
                name={field.name}
                key={index}
                style={{ width: "50%" }}
              >
                <Input />
              </Form.Item>
            );
          case "select":
            return (
              <Form.Item
                label={field.label}
                name={field.name}
                key={index}
                style={{ width: "50%" }}
              >
                <Select options={field.options} />
              </Form.Item>
            );
          case "datePicker":
            return (
              <Form.Item
                label={field.label}
                name={field.name}
                key={index}
                style={{ width: "50%" }}
              >
                <DatePicker />
              </Form.Item>
            );
          case "table":
            return (
              <Table
                columns={field.columns}
                dataSource={field.dataSource}
                onChange={field.onChange}
                key={index}
              />
            );
          default:
            return null;
        }
      })}

      {/* 将所有按钮放在一个 Form.Item 和 Space 组件中 */}
      {buttonFields.length > 0 && (
        <Form.Item style={{ textAlign: "right" }}>
          <Space>
            {buttonFields.map((buttonField, buttonIndex) => (
              <Button
                key={buttonIndex}
                type="primary"
                onClick={buttonField.buttonOnClick}
              >
                {buttonField.buttonText}
              </Button>
            ))}
          </Space>
        </Form.Item>
      )}
    </Form>
  );
};

export default DynamicForm;
