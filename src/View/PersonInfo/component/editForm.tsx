import React from "react";
import DynamicForm from "../../../common/DynamicForm/dynamicForm"; // Adjust the import path as necessary
import AddTag from "./addTag";
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
        type: "rangePicker",
        label: "选择时间段",
        name: "timeRange",
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
    fields = [
      {
        type: "input",
        label: "项目名称",
        name: "company",
      },
      {
        type: "input",
        label: "职务",
        name: "position",
      },
      {
        type: "rangePicker",
        label: "选择时间段",
        name: "timeRange",
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
  } else if (theme === "获得荣誉") {
    fields = [
      {
        type: "input",
        label: "证书名称",
        name: "qualificationsTitle",
      },
      {
        type: "input",
        label: "级别",
        name: "level",
      },
      {
        type: "datePicker",
        label: "获取时间",
        name: "datePicker",
      },
      {
        type: "TextArea",
        label: "描述",
        name: "description",
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
  } else if (theme == "资格证书") {
    fields = [
      {
        type: "input",
        label: "证书名称",
        name: "qualificationsTitle",
      },
      {
        type: "datePicker",
        label: "获取时间",
        name: "datePicker",
      },
      {
        type: "TextArea",
        label: "描述",
        name: "description",
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
  } else if (theme == "社团/组织经历") {
    fields = [
      {
        type: "input",
        label: "社团/组织名称",
        name: "company",
      },
      {
        type: "input",
        label: "职务",
        name: "position",
      },
      {
        type: "rangePicker",
        label: "选择时间段",
        name: "timeRange",
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
  } else if (theme == "教育经历") {
    fields = [
      {
        type: "input",
        label: "院校",
        name: "company",
      },
      {
        type: "input",
        label: "学历",
        name: "position",
      },
      {
        type: "rangePicker",
        label: "选择时间段",
        name: "timeRange",
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
  } else if (theme == "自我评价") {
    fields = [
      {
        type: "input",
        label: "关键字",
        name: "keyWords",
      },
      {
        type: "TextArea",
        label: "内容",
        name: "description",
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
  } else if (theme == "专业技能") {
    // 做成tag形式
    const initialTags = ["Tag1", "Tag2", "Tag3"];
    fields = [
      {
        type: "render",
        label: "Tags",
        name: "tags",
        render: (field, form) => {
          return <AddTag initialTags={initialTags} />;
        },
      },
      {
        type: "button",
        buttonText: "Submit",
        buttonOnClick: (formData) => {
          console.log("Form Data:", formData);
        },
      },
    ];
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
