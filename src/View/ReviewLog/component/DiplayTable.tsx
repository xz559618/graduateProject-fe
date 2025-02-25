import React, { useState } from "react";
import {
  Collapse,
  Select,
  Input,
  Button,
  Modal,
  Form,
  List,
  Tag,
  Popconfirm,
} from "antd";

const { Panel } = Collapse;
const { Option } = Select;

type DataType = {
  key: React.Key;
  question: string;
  answer: string;
  type: string;
};

const initialData: DataType[] = [
  {
    key: "1",
    question: "问题1",
    answer: "答案1",
    type: "类型A",
  },
  {
    key: "2",
    question: "问题2",
    answer: "答案2",
    type: "类型B",
  },
  {
    key: "3",
    question: "问题3",
    answer: "答案3",
    type: "类型A",
  },
  {
    key: "4",
    question: "问题4",
    answer: "答案4",
    type: "类型C",
  },
];

const App: React.FC = () => {
  const [data, setData] = useState<DataType[]>(initialData);
  const [filterType, setFilterType] = useState<string | undefined>(undefined);
  const [searchText, setSearchText] = useState<string>("");
  const [isConfigModalVisible, setIsConfigModalVisible] = useState(false);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [addForm] = Form.useForm();
  const [typeList, setTypeList] = useState<string[]>(
    Array.from(new Set(data.map((item) => item.type)))
  );

  const handleTypeChange = (value: string | undefined) => {
    setFilterType(value);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleConfig = () => {
    setIsConfigModalVisible(true);
    form.setFieldsValue({ types: typeList });
  };

  const handleConfigOk = () => {
    setIsConfigModalVisible(false);
  };

  const handleConfigCancel = () => {
    setIsConfigModalVisible(false);
  };

  const handleAdd = () => {
    setIsAddModalVisible(true);
    addForm.resetFields();
  };

  const handleAddOk = () => {
    addForm.validateFields().then((values) => {
      const newKey =
        (data.length > 0
          ? Math.max(...data.map((item) => Number(item.key)))
          : 0) + 1;
      setData([...data, { ...values, key: newKey.toString() }]);
      setIsAddModalVisible(false);
    });
  };

  const handleAddCancel = () => {
    setIsAddModalVisible(false);
  };

  const handleAddType = () => {
    form.validateFields().then((values) => {
      const newTypes = [...typeList, values.newType];
      setTypeList(newTypes);
      form.resetFields(["newType"]);
      form.setFieldsValue({ types: newTypes });
    });
  };

  const handleDeleteType = (type: string) => {
    const newTypes = typeList.filter((t) => t !== type);
    setTypeList(newTypes);
    form.setFieldsValue({ types: newTypes });
  };

  const filteredData = data.filter((item) => {
    const matchesType = filterType ? item.type === filterType : true;
    const matchesSearch = item.question.includes(searchText);
    return matchesType && matchesSearch;
  });

  const items = filteredData.map((item) => ({
    key: item.key,
    label: `${item.question} - ${item.type}`,
    children: <p>{item.answer}</p>,
  }));

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Select
          placeholder="筛选类型"
          style={{ width: 200, marginRight: 16 }}
          allowClear
          value={filterType}
          onChange={handleTypeChange}
        >
          {typeList.map((type) => (
            <Option key={type} value={type}>
              {type}
            </Option>
          ))}
        </Select>
        <Input
          placeholder="搜索问题"
          style={{ width: 200, marginRight: 16 }}
          value={searchText}
          onChange={handleSearchChange}
        />
        <Button type="primary" onClick={handleAdd} style={{ marginRight: 16 }}>
          添加问题
        </Button>
        <Button onClick={handleConfig}>配置类型</Button>
      </div>
      <Collapse defaultActiveKey={["1"]} ghost items={items} />
      <Modal
        title="配置类型"
        visible={isConfigModalVisible}
        onOk={handleConfigOk}
        onCancel={handleConfigCancel}
      >
        <Form form={form} layout="vertical" name="form_in_modal">
          <Form.Item name="newType" label="新类型">
            <Input />
          </Form.Item>
          <Button
            type="dashed"
            onClick={handleAddType}
            style={{ width: "100%", marginBottom: 16 }}
          >
            添加新类型
          </Button>
          <Form.Item name="types" label="类型列表">
            <List
              bordered
              dataSource={typeList}
              renderItem={(type) => (
                <List.Item
                  actions={[
                    <Popconfirm
                      title="确定删除这个类型吗?"
                      onConfirm={() => handleDeleteType(type)}
                      okText="是"
                      cancelText="否"
                    >
                      <a>删除</a>
                    </Popconfirm>,
                  ]}
                >
                  <Tag color="blue">{type}</Tag>
                </List.Item>
              )}
            />
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title="添加问题"
        visible={isAddModalVisible}
        onOk={handleAddOk}
        onCancel={handleAddCancel}
      >
        <Form form={addForm} layout="vertical" name="form_in_add_modal">
          <Form.Item
            name="question"
            label="问题"
            rules={[{ required: true, message: "请输入问题" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="answer"
            label="答案"
            rules={[{ required: true, message: "请输入答案" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="type"
            label="类型"
            rules={[{ required: true, message: "请选择类型" }]}
          >
            <Select placeholder="选择类型">
              {typeList.map((type) => (
                <Option key={type} value={type}>
                  {type}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default App;
