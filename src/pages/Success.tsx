import React from 'react';
import { Button, Result } from 'antd';

const Success: React.FC = () => (
    <Result
        status="success"
        title="Registered successfully!"
        subTitle="Your userId is #TODO 🎉🎊 Now you can click the button below to login 🌈"
        extra={
          <Button type="primary" key="console" href="/login">
            Go Login
          </Button>
        }
    />
);

export default Success;