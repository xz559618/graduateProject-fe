import React from 'react';
import { Form, Input, Button, Select, Table, DatePicker } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';


type FieldType = 'input' | 'select' | 'datePicker' | 'table' | 'button';

interface FieldConfig {
  type: FieldType;
  label?: string;
  name?: string;
  options?: { label: string; value: any }[];
  columns?: TableColumnsType<any>;
  dataSource?: any[];
  onChange?: TableProps<any>['onChange'];
  buttonText?: string;
  buttonOnClick?: () => void;
}

interface DynamicFormProps {
  fields: FieldConfig[];
  formStyle?: React.CSSProperties;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ fields, formStyle }) => {
  const [form] = Form.useForm();

  return (
    <Form form={form} layout="vertical" style={ formStyle }>
      {fields.map((field, index) => {
        switch (field.type) {
          case 'input':
            return (
              <Form.Item label={field.label} name={field.name} key={index}>
                <Input />
              </Form.Item>
            );
          case 'select':
            return (
              <Form.Item label={field.label} name={field.name} key={index}>
                <Select options={field.options} />
              </Form.Item>
            );
          case 'datePicker':
            return (
              <Form.Item label={field.label} name={field.name} key={index}>
                <DatePicker />
              </Form.Item>
            );
          case 'table':
            return (
              <Table
                columns={field.columns}
                dataSource={field.dataSource}
                onChange={field.onChange}
                key={index}
              />
            );
          case 'button':
            return (
              <Form.Item key={index}>
                <Button type="primary" onClick={field.buttonOnClick}>
                  {field.buttonText}
                </Button>
              </Form.Item>
            );
          default:
            return null;
        }
      })}
    </Form>
  );
};

export default DynamicForm;
