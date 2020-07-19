import React from 'react'
import {useHistory} from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';



function MyHome() {

  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;
  const  user = useSelector(state => state.auth.user)
  const dispatch = useDispatch()
  const history = useHistory()

  const submitLogout = () => {
    console.log('asfsdf')
    dispatch({
      type: 'LOGOUT',
    })
    history.push('/login')
  }

  return (
    <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        {/* <Menu.Item key="1">nav 1 การจัดการสินค้า</Menu.Item>
        <Menu.Item key="2">nav 2 บันทึกใบขน</Menu.Item>
        <Menu.Item key="3">nav 3 เครื่องมือ</Menu.Item>
        <Menu.Item key="4">nav 4 ช่วยเหลือ</Menu.Item> */}
        <Menu.Item key="4">ขอตอนรับ  เข้าสู่ระบบ</Menu.Item>
        {/* {user.firstname} {user.lastname} */}
        <Button type="primary" onClick={submitLogout}>Logout</Button>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="การจัดการสินค้า">
            <Menu.Item key="1">รายละเอียดหน่วยของสินค้า</Menu.Item>
            <Menu.Item key="2">รายละเอียดสินค้า</Menu.Item>
            <Menu.Item key="3">รายละเอียดของบริษัท</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="บันทึกใบขน">
            <Menu.Item key="4">ใบขนขาเข้า</Menu.Item>
            <Menu.Item key="5">ใบขนขาออก</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<NotificationOutlined />} title="เครื่องมือ">
            <Menu.Item key="6">สร้างผู้ใช้</Menu.Item>
            <Menu.Item key="7">เปลี่ยนรหัสผ่านผู้ใช้</Menu.Item>
            <Menu.Item key="8">เพิ่มรายละเอียดผู้นำเข้า</Menu.Item>
            <Menu.Item key="9">ลบข้อมูลภายในบริษัท</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" icon={<NotificationOutlined />} title="ช่วยเหลือ">
            <Menu.Item key="10">ติดต่อเรา</Menu.Item>
            <Menu.Item key="11">เกี่ยวกับเรา</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          CONTENT GOES HERE
        </Content>
      </Layout>
    </Layout>
  </Layout>
  )
}

export default MyHome
