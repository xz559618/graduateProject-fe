// import React from 'react';
// import { Space, Table, Tag } from 'antd';

// interface DisplayTableProps<T> {
//   tableData: T[], // 表格数据
//   columns: [], // 字段
//   form: [], // 查询字段
//   rules: [], // 规则
// }

// const DisplayTable = <T extends object>({ tableData, columns }: DisplayTableProps<T>) => {
//     return (
//       <Table<T>
//         dataSource={tableData}
//         columns={columns}
//         pagination={{ pageSize: 5 }}
//         rowKey={(record) => (record as any).key || (record as any).id} // 确保每个记录有唯一的 key 或 id
//       />
//     );
//   };
  
//   export default DisplayTable;
import React, { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import type { InputRef, TableColumnsType, TableColumnType, TableProps } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import type { FilterDropdownProps } from 'antd/es/table/interface';
import Highlighter from 'react-highlight-words';

interface DataType {
  key: string;
  [key: string]: any;
}

type DataIndex = keyof DataType;

interface ColumnTypeWithSearch<DataType> extends TableColumnType<DataType> {
  isSearchable?: boolean;
}

interface DiplayTableProps {
  columns: ColumnTypeWithSearch<DataType>[];
  data: DataType[];
  onChange?: TableProps<DataType>['onChange'];
}

const DiplayTable: React.FC<DiplayTableProps> = ({ columns, data, onChange }) => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: FilterDropdownProps['confirm'],
    dataIndex: DataIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex: DataIndex): TableColumnType<DataType> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    filterDropdownProps: {
      onOpenChange(open) {
        if (open) {
          setTimeout(() => searchInput.current?.select(), 100);
        }
      },
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columnsWithSearch = columns.map((col) => ({
    ...col,
    ...(col.isSearchable ? getColumnSearchProps(col.dataIndex as DataIndex) : {}),
  }));

  return <Table<DataType> columns={columnsWithSearch} dataSource={data} onChange={onChange} />;
};

export default DiplayTable;

