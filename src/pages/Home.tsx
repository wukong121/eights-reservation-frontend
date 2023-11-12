import React, {useState} from 'react';
import {
  DesktopOutlined,
  FileOutlined, LockOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Breadcrumb, Button, Col, Divider, Layout, Menu, message, Row, Space, Switch, theme} from 'antd';
import {RootState, store} from "../store";
import {authActions} from "../store/auth.slice";
import {useDispatch, useSelector} from "react-redux";
import {ReactComponent as Logo} from "../assets/images/Logo.svg"
import RoomCard from "../components/room/RoomCard";
import {Route, Routes, useNavigate} from "react-router-dom";

const {Header, Content, Footer, Sider} = Layout;

type MenuItem = Required<MenuProps>['items'][number] & { onClick?: () => void };

function getItem(
    label: React.ReactNode,
    key: React.Key,
    onClick?: () => void,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: {colorBgContainer},
  } = theme.useToken();

  const [messageApi, contextHolder] = message.useMessage();
  // const userName = useSelector((state: RootState) => state.auth.value?.user.userName);

  const handleMenuClick = (key: string) => {
    navigate('/' + key);
  };

  const items: MenuItem[] = [
    getItem('Appointment', '1', () => handleMenuClick('appointment'), <PieChartOutlined/>),
    getItem('Room', '2', () => handleMenuClick('room'), <PieChartOutlined/>),
    getItem('User', 'sub1', () => handleMenuClick('user'), <UserOutlined/>, [
      getItem('Tom', '3'),
      getItem('Bill', '4'),
      getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', () => handleMenuClick('team'),
        <TeamOutlined/>, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', () => handleMenuClick('files'), <FileOutlined/>),
  ];

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Successfully popped up!✨',
    });
  };

  const onclick = async () => {
    await store.dispatch(authActions.logoutAction(null));
  }

  const onclickTest = async () => {
    success();
  }

  return (
      <Layout style={{minHeight: '100vh'}}>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="demo-logo-vertical">
            <Logo width="100px" height="100px"/>
          </div>
          <Divider/>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}/>
        </Sider>
        <Layout>
          <Header style={{padding: 0, background: colorBgContainer}}>
            {contextHolder}
            <Row>
              <Col span={20}></Col>
              <Col span={4}>
                <Space>
                  <Button onClick={onclick}>logout</Button>
                  <Button onClick={onclickTest}>test</Button>
                </Space>
              </Col>
            </Row>
          </Header>
          <Content style={{margin: '0 16px'}}>
            <Breadcrumb style={{margin: '16px 0'}}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>peter</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{padding: 24, minHeight: 360, background: colorBgContainer}}>
              <Routes>
                <Route path='/room' element={<RoomCard/>}/>
              </Routes>
            </div>
          </Content>
          <Footer style={{textAlign: 'center'}}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
      </Layout>
  );
};

export default Home;