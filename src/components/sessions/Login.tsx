import React from 'react';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Checkbox, Form, Input, Card} from 'antd';
import '../../assets/styles/_Sessions.css'
import {ReactComponent as Logo} from "../../assets/images/Logo.svg"

const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
      <div className="session-form">
        <Card style={{
          width: 300
        }}>
          <Logo width="100px" height="100px"/>
          <Form
              name="normal_login"
              className="login-form"
              initialValues={{remember: true}}
              onFinish={onFinish}
          >
            <Form.Item
                name="username"
                rules={[{required: true, message: 'Please input your Username!'}]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{required: true, message: 'Please input your Password!'}]}
            >
              <Input
                  prefix={<LockOutlined className="site-form-item-icon"/>}
                  type="password"
                  placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button" href="/home">
                Log in
              </Button>
              {' '}Or <a href="/signup">register now!</a>
            </Form.Item>
          </Form>
        </Card>
      </div>
  );
};

export default Login;