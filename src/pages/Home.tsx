import React, {useState} from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Breadcrumb, Button, Col, Layout, Menu, message, Row, Space, theme} from 'antd';
import {RootState, store} from "../store";
import {logoutAction} from "../api/sessionAPI";
import {authActions} from "../store/auth.slice";
import {useDispatch} from "react-redux";
import {alertActions} from "../store/alert.slice";

const {Header, Content, Footer, Sider} = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
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

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined/>),
  getItem('Option 2', '2', <DesktopOutlined/>),
  getItem('User', 'sub1', <UserOutlined/>, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined/>, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined/>),
];

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: {colorBgContainer},
  } = theme.useToken();

  const [messageApi, contextHolder] = message.useMessage();

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
          <div className="demo-logo-vertical"/>
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
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{padding: 24, minHeight: 360, background: colorBgContainer}}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{textAlign: 'center'}}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
      </Layout>
  );
};

export default Home;