import React from "react";
import { Form, Input, Button, Select, Table, DatePicker, Space } from "antd";
import type { TableColumnsType, TableProps, FormItemProps } from "antd";
import TextArea from "antd/es/input/TextArea";

const { RangePicker } = DatePicker; // 从 DatePicker 中解构出 RangePicker

type FieldType =
  | "input"
  | "select"
  | "datePicker"
  | "rangePicker" // 添加时间段选择器类型
  | "table"
  | "button"
  | "TextArea"
  | "datePeriodCom" 

interface FieldConfig extends FormItemProps {
  type: FieldType;
  label?: string;
  name?: string;
  options?: { label: string; value: any }[];
  columns?: TableColumnsType<any>;
  dataSource?: any[];
  onChange?: TableProps<any>["onChange"];
  buttonText?: string;
  buttonOnClick?: (formData: any) => void;
  value?: any;
  initialValue?: any;
}

interface DynamicFormProps {
  fields: FieldConfig[];
  formStyle?: React.CSSProperties;
  initialValues?: { [key: string]: any };
  onSubmit?: (formData: any) => void;
}

const DynamicForm: React.FC<DynamicFormProps> = ({
  fields,
  formStyle,
  initialValues,
  onSubmit,
}) => {
  const [form] = Form.useForm();

  // 设置表单的初始值
  React.useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    }
  }, [form, initialValues]);

  // 收集所有按钮字段
  const buttonFields = fields.filter((field) => field.type === "button");

  const handleButtonClick = (buttonField: FieldConfig) => {
    form
      .validateFields()
      .then((values) => {
        if (buttonField.buttonOnClick) {
          buttonField.buttonOnClick(values);
        }
        if (onSubmit) {
          onSubmit(values);
        }
      })
      .catch((errorInfo) => {
        console.log("表单验证失败:", errorInfo);
      });
  };

  return (
    <Form
      form={form}
      layout="vertical"
      style={formStyle}
      initialValues={initialValues}
    >
      {fields.map((field, index) => {
        const commonProps = {
          label: field.label,
          name: field.name,
          style: { width: field.width || "100%" },
          initialValue: field.initialValue,
        };

        switch (field.type) {
          case "input":
            return (
              <Form.Item {...commonProps} key={index}>
                <Input />
              </Form.Item>
            );
          case "select":
            return (
              <Form.Item {...commonProps} key={index}>
                <Select options={field.options} />
              </Form.Item>
            );
          case "datePicker":
            return (
              <Form.Item {...commonProps} key={index}>
                <DatePicker />
              </Form.Item>
            );
          case "rangePicker":
            return (
              <Form.Item {...commonProps} key={index}>
                <RangePicker />
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
          case "TextArea":
            return (
              <Form.Item {...commonProps} key={index}>
                <TextArea />
              </Form.Item>
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
                onClick={() => handleButtonClick(buttonField)}
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
