import React from "react";
import type { TableColumnsType, TableProps } from "antd";
import DynamicForm from "../../../common/DynamicForm/dynamicForm"; // Adjust the import path as necessary

interface EditFormProps {
  item?: any;
  theme?: any;
}

const fields = [
  {
    type: "input",
    label: "Name",
    name: "name",
  },
  {
    type: "input",
    label: "Email",
    name: "email",
  },
  {
    type: "select",
    label: "Age",
    name: "age",
    options: [
      { label: "32", value: 32 },
      { label: "42", value: 42 },
    ],
  },
  {
    type: "datePicker",
    label: "Date of Birth",
    name: "dob",
  },
  {
    type: "button",
    buttonText: "Submit",
  },
  {
    type: "button",
    buttonText: "Cancel",
  },
];
const formStyle = {
  width: "100%",
  margin: "0 auto",
};

const EditForm: React.FC<EditFormProps> = ({ item, theme }) => {
  console.log("item", item);
  return (
    <>
      11{item}
      {theme}
      <DynamicForm
        fields={fields}
        formStyle={formStyle}
        style={{ width: "10%" }}
      />
    </>
  );
};

export default EditForm;
