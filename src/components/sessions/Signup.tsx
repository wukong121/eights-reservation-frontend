import React from 'react';
import {ReactComponent as Logo} from "../../assets/images/Logo.svg";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
  Card,
} from 'antd';
import {SignUpValueType} from "../../types";
import {useNavigate} from "react-router-dom";
import {registerAction} from "../../api/sessionAPI";

const { Option } = Select;

interface DataNodeType {
  value: string;
  label: string;
  children?: DataNodeType[];
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Signup: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values: SignUpValueType) => {
    console.log('Received values of form: ', values);
    const response = await registerAction(values);
    if (response && response.status === "success") {
      navigate("/login");
    }

  };

  const prefixSelector = (
      <Form.Item name="prefix" noStyle>
        <Select style={{ width: 70 }}>
          <Option value="86">+86</Option>
          <Option value="87">+87</Option>
        </Select>
      </Form.Item>
  );

  return (
      <div className="session-form">
        <Card style={{
          width: 500
        }}>
          <Logo width="100px" height="100px"/>
          <Form
              {...formItemLayout}
              form={form}
              name="register"
              onFinish={onFinish}
              initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
              style={{ maxWidth: 600 }}
              scrollToFirstError
          >
            <Form.Item
                name="userName"
                label="Username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Username!',
                  },
                ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
                name="nickName"
                label="Nickname"
                tooltip="What do you want others to call you?"
                rules={[{ required: false, message: 'Please input your nickname!', whitespace: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
                name="phone"
                label="Phone Number"
                rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
              <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
                name="gender"
                label="Gender"
                rules={[{ required: true, message: 'Please select gender!' }]}
            >
              <Select placeholder="select your gender">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>
            <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
                hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('The new password that you entered do not match!'));
                    },
                  }),
                ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                        value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                  },
                ]}
                {...tailFormItemLayout}
            >
              <Checkbox>
                I have read the <a href="">agreement</a>
              </Checkbox>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
  );
};

export default Signup;