import React from 'react';
import { Form, Input, InputNumber, Button, Row, Col } from 'antd';

const layout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 15,
  },
};

const buttonStyle = {
  
}
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const Demo = () => {



  return (
    <Form {...layout} name="nest-messages">
     <Row>
       <Col span={12}>
        <Form.Item
          label="รหัสคลังสินค้า"
        > 
          <Input />
        </Form.Item>
        <Form.Item
          label="ชื่อคลังสินค้า (ENG)"
        > 
          <Input />
        </Form.Item>
        <Form.Item
          label="ที่อยู่"
        > 
          <Input />
        </Form.Item>
        <Form.Item
          label="โทรสาร"
        > 
          <Input />
        </Form.Item>
        <Form.Item
          label="ชื่อผู้จัดการ"
        > 
          <Input />
        </Form.Item>
        <Form.Item
          label="เลขที่บัญชี"
        > 
          <Input />
        </Form.Item>
        <Form.Item
          label="สาขา"
        > 
          <Input />
        </Form.Item>
       </Col>
       <Col span={12}>
        <Form.Item
          label="ชื่อคลังสินค้า (THA)"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="โทรศัพท์"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="อีเมล"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="ตำแหน่ง"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="ชื่อธนาคาร"
        >
          <Input />
        </Form.Item>
       </Col>
     </Row>
     <Button type="primary" htmlType="submit">
     เพิ่มข้อมูล
     </Button>
     <Button type="primary" htmlType="submit">
     แก้ไขข้อมูล
     </Button>
    </Form> 
  );
};

export default Demo;
