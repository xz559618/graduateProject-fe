// // import { Input, Flex, Button } from 'antd';
// // import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
// // import background from '../assets/background.svg'
// // import { Link } from 'react-router-dom';
// import CollapsePanel from '../../common/Collapse/collapse'
// import DisplayTable from '../../common/DisplayTable/displayTable'
// import type { TableProps } from 'antd';
// import { Space, Tag } from 'antd';

// function Home() {
// //   const [count, setCount] = useState(0)
// interface DataType {
//   key: string;
//   name: string;
//   age: number;
//   address: string;
//   tags: string[];
// }

// const columns: TableProps<DataType>['columns'] = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
//     render: (text) => <a>{text}</a>,
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//     key: 'age',
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//     key: 'address',
//   },
//   {
//     title: 'Tags',
//     key: 'tags',
//     dataIndex: 'tags',
//     render: (_, { tags }) => (
//       <>
//         {tags.map((tag) => {
//           let color = tag.length > 5 ? 'geekblue' : 'green';
//           if (tag === 'loser') {
//             color = 'volcano';
//           }
//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </>
//     ),
//   },
//   {
//     title: 'Action',
//     key: 'action',
//     render: (_, record) => (
//       <Space size="middle">
//         <a>Invite {record.name}</a>
//         <a>Delete</a>
//       </Space>
//     ),
//   },
// ];

// const data: Array<DataType> = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sydney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];


//   return (
//     <>
//       <div>
//       <CollapsePanel header="个人信息" panelWidth="150px">
//         <p>这里是个人信息的内容</p>
//       </CollapsePanel>
//       <DisplayTable tableData={data} columns={columns}></DisplayTable>
//       </div>
//     </>
//   )
// }

// export default Home

// import React from 'react';
// import { TableColumnsType, TableProps } from 'antd';
// import  DisplayTable  from '../../common/DisplayTable/displayTable'// Adjust the import path as necessary

// interface DataType {
//   key: string;
//   name: string;
//   age: number;
//   address: string;
// }

// const data: DataType[] = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sydney No. 1 Lake Park',
//   },
//   {
//     key: '4',
//     name: 'Jim Red',
//     age: 32,
//     address: 'London No. 2 Lake Park',
//   },
// ];

// const columns: TableColumnsType<DataType> = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     filters: [
//       {
//         text: 'Joe',
//         value: 'Joe',
//       },
//       {
//         text: 'Category 1',
//         value: 'Category 1',
//       },
//       {
//         text: 'Category 2',
//         value: 'Category 2',
//       },
//     ],
//     // filterMode: 'tree',
//     filterSearch: true,
//     onFilter: (value, record) => record.name.startsWith(value as string),
//     width: '30%',
//     // isSearchable: true,  // Enable search for this column
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//     sorter: (a, b) => a.age - b.age,
//     isSearchable: true,  // Enable search for this column
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//     filters: [
//       {
//         text: 'London',
//         value: 'London',
//       },
//       {
//         text: 'New York',
//         value: 'New York',
//       },
//     ],
//     onFilter: (value, record) => record.address.startsWith(value as string),
//     filterSearch: true,
//     width: '40%',
//   },
// ];

// const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
//   console.log('params', pagination, filters, sorter, extra);
// };

// const Home: React.FC = () => <DisplayTable columns={columns} data={data} onChange={onChange}/>;

// export default Home;

// import React from 'react';
// import type { TableColumnsType, TableProps } from 'antd';
// import DynamicForm from '../../common/DynamicForm/dynamicForm'; // Adjust the import path as necessary

// interface DataType {
//   key: string;
//   name: string;
//   age: number;
//   address: string;
// }

// const data: DataType[] = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sydney No. 1 Lake Park',
//   },
//   {
//     key: '4',
//     name: 'Jim Red',
//     age: 32,
//     address: 'London No. 2 Lake Park',
//   },
// ];

// const columns: TableColumnsType<DataType> = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     filters: [
//       {
//         text: 'Joe',
//         value: 'Joe',
//       },
//       {
//         text: 'Category 1',
//         value: 'Category 1',
//       },
//       {
//         text: 'Category 2',
//         value: 'Category 2',
//       },
//     ],
//     filterMode: 'tree',
//     filterSearch: true,
//     onFilter: (value, record) => record.name.startsWith(value as string),
//     width: '30%',
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//     sorter: (a, b) => a.age - b.age,
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//     filters: [
//       {
//         text: 'London',
//         value: 'London',
//       },
//       {
//         text: 'New York',
//         value: 'New York',
//       },
//     ],
//     onFilter: (value, record) => record.address.startsWith(value as string),
//     filterSearch: true,
//     width: '40%',
//   },
// ];

// const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
//   console.log('params', pagination, filters, sorter, extra);
// };

// const fields = [
//   {
//     type: 'input',
//     label: 'Name',
//     name: 'name',
//   },
//   {
//     type: 'input',
//     label: 'Email',
//     name: 'email',
//   },
//   {
//     type: 'select',
//     label: 'Age',
//     name: 'age',
//     options: [
//       { label: '32', value: 32 },
//       { label: '42', value: 42 },
//     ],
//   },
//   {
//     type: 'datePicker',
//     label: 'Date of Birth',
//     name: 'dob',
//   },
//   {
//     type: 'table',
//     columns: columns,
//     dataSource: data,
//     onChange: onChange,
//   },
//   {
//     type: 'button',
//     buttonText: 'Submit',
//     buttonOnClick: () => {
//       console.log('Form submitted');
//     },
//   },
//   {
//     type: 'button',
//     buttonText: 'Cancel',
//     buttonOnClick: () => {
//       console.log('Form canceled');
//     },
//   },
// ];
// const formStyle = {
//   width: '50%',
//   maxWidth: '100px',
//   margin: '0 auto',
// };

// const Home: React.FC = () => <DynamicForm fields={fields}  formStyle={formStyle} style={{ width: '10%' }} />;

// export default Home;
