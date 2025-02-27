import React from "react";
import DynamicForm from "../../../common/DynamicForm/dynamicForm"; // Adjust the import path as necessary

interface EditFormProps {
  item?: any;
  theme?: string;
  onCancel?: () => void;
}

interface FieldConfig {
  type: string;
  label?: string;
  name?: string;
  options?: { label: string; value: any }[];
  buttonText?: string;
  buttonOnClick?: (formData: any) => void;
}

const formStyle = {
  width: "100%",
  margin: "0 auto",
};

const EditForm: React.FC<EditFormProps> = ({ item, theme, onCancel }) => {
  console.log("item", item);

  const getInitialValues = () => {
    if (theme === "个人基本信息") {
      return {
        name: "谢真",
        phone: "10000000000",
        email: "10000000000@163.com",
        wechat: "123456",
        education: "硕士",
      };
    } else {
      return item.children ? item.children.props : {};
    }
  };

  const initialValues = getInitialValues();

  let fields: FieldConfig[] = [];
  if (theme === "个人基本信息") {
    fields = [
      {
        type: "input",
        label: "姓名",
        name: "name",
      },
      {
        type: "input",
        label: "电话",
        name: "phone",
      },
      {
        type: "input",
        label: "邮箱",
        name: "email",
      },
      {
        type: "input",
        label: "微信",
        name: "wechat",
      },
      {
        type: "input",
        label: "最高学历",
        name: "education",
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
          onCancel && onCancel(); // 处理取消操作
        },
      },
    ];
  } else if (theme === "工作/实习经历") {
    fields = [
      {
        type: "input",
        label: "公司",
        name: "company",
      },
      {
        type: "input",
        label: "职位",
        name: "position",
      },
      {
        type: "input",
        label: "时间",
        name: "time",
      },
      {
        type: "TextArea",
        label: "描述",
        name: "description",
      },
      {
        type: "TextArea",
        label: "贡献",
        name: "contribution",
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
          onCancel && onCancel(); // 处理取消操作
        },
      },
    ];
  } else if (theme === "项目经历") {
  } else if (theme === "资格证书") {
  } else if (theme == "荣誉证书") {
  } else if (theme == "社团/组织经历") {
  } else if (theme == "教育经历") {
  } else if (theme == "自我评价") {
  } else if (theme == "专业技能") {
  } else {
  }

  return (
    <>
      <DynamicForm
        fields={fields}
        formStyle={formStyle}
        initialValues={initialValues}
      />
    </>
  );
};

export default EditForm;
