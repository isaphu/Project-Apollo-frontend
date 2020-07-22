import React, { useState, useEffect } from 'react';
import { Table, Radio, Divider, Button } from 'antd';
import axios from 'axios';

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Code',
    dataIndex: 'uom_code',
  },
  {
    title: 'Name',
    dataIndex: 'uom_name',
  },
];
const data = [
  {
    key: '1',
    id: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
]; // rowSelection object indicates the need for row selection

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }),
};

const Demo = () => {
  const [selectionType, setSelectionType] = useState('checkbox');
  const [uoms, setUoms] = useState([]);
  const [uomSearch, setUomSearch] = useState(false)

    useEffect(() => {
        const fetchUom = async () => {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/uom`);
            console.log(res)
            setUoms(res.data.uoms)
        }
        fetchUom();
    }, [uomSearch]);

    console.log(uoms)

    const submitSearch = () => {
        setUomSearch(!uomSearch)        
    }

  return (
    <div>
        <Button type="primary" htmlType="submit" onClick={submitSearch}>
     ค้นหา
     </Button>
      <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value);
        }}
        value={selectionType}
      >
        <Radio value="checkbox">Checkbox</Radio>
        <Radio value="radio">radio</Radio>
      </Radio.Group>

      <Divider />

      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={uoms}
      />
    </div>
  );
};

export default Demo;