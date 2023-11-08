import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';
import React, {useState} from 'react';
import {Avatar, Card, Col, Row, Skeleton, Switch} from 'antd';

const {Meta} = Card;

const RoomCard: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const onChange = (checked: boolean) => {
    setLoading(!checked);
  };

  return (
      <>
        <Switch checked={!loading} onChange={onChange}/>
        <Row>
          <Col span={8}>
            <Card style={{width: 500, marginTop: 16}} loading={loading}>
              <Meta
                  avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"/>}
                  title="Room1"
                  description="This is the description"
              />
            </Card>
            <Card
                style={{width: 500, marginTop: 16}}
                actions={[
                  <SettingOutlined key="setting"/>,
                  <EditOutlined key="edit"/>,
                  <EllipsisOutlined key="ellipsis"/>,
                ]}
            >
              <Skeleton loading={loading} avatar active>
                <Meta
                    avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2"/>}
                    title="Room2"
                    description="This is the description"
                />
              </Skeleton>
            </Card>
          </Col>
          <Col span={8}>
            <Card style={{width: 500, marginTop: 16}} loading={loading}>
              <Meta
                  avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"/>}
                  title="Room3"
                  description="This is the description"
              />
            </Card>
            <Card
                style={{width: 500, marginTop: 16}}
                actions={[
                  <SettingOutlined key="setting"/>,
                  <EditOutlined key="edit"/>,
                  <EllipsisOutlined key="ellipsis"/>,
                ]}
            >
              <Skeleton loading={loading} avatar active>
                <Meta
                    avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2"/>}
                    title="Room4"
                    description="This is the description"
                />
              </Skeleton>
            </Card>
          </Col>
          <Col span={8}>
            <Card style={{width: 500, marginTop: 16}} loading={loading}>
              <Meta
                  avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"/>}
                  title="Room5"
                  description="This is the description"
              />
            </Card>
            <Card
                style={{width: 500, marginTop: 16}}
                actions={[
                  <SettingOutlined key="setting"/>,
                  <EditOutlined key="edit"/>,
                  <EllipsisOutlined key="ellipsis"/>,
                ]}
            >
              <Skeleton loading={loading} avatar active>
                <Meta
                    avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2"/>}
                    title="Room6"
                    description="This is the description"
                />
              </Skeleton>
            </Card>
          </Col>
        </Row>
      </>
  );
};

export default RoomCard;