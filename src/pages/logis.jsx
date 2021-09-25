import React from "react";
import { Button, Avatar, Card, Tag, Tabs, Input, Row, Col, Menu } from "antd";
import { RightOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

export default function Logis() {
  return (
    <div className="logis-wrap">
      <div className="logis-banner1">
        <div className="logis-ban1 bg-center">
          <div className="info">
            <img src="" alt="" />
            <p>新一</p>
          </div>
        </div>
      </div>

      <div className="logis-banner2 bg-center">
        <Row gutter={20}>
          <Col span={6}>
            <Card title="MY ITEMS" bodyStyle={{ height: 600, overflowY: "auto" }}>
              <Menu mode="inline">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
                <Menu.Item key="13">Option 13</Menu.Item>
                <Menu.Item key="14">Option 14</Menu.Item>
              </Menu>
            </Card>
          </Col>
          <Col span={18} className="line-cards">
            <div className="arrow-wrap">
              <Card bodyStyle={{ padding: 4 }} style={{ width: "220px" }}>
                <p className="text">第一种处方药</p>
                <p>
                由上海药局发出
                </p>
                <p>2021/8/31</p>
              </Card>
              <div className="line">
                <div></div>
                <RightOutlined />
              </div>
            </div>
            <div className="arrow-wrap">
              <Card bodyStyle={{ padding: 4 }} style={{ width: "220px" }}>
                <p className="text">第一种处方药</p>
                <p>
                由浦东药店签收
                </p>
                <p>2021/9/1</p>
              </Card>
              <div className="line">
                <div></div>
                <RightOutlined />
              </div>
            </div>
            <div className="arrow-wrap">
              <Card bodyStyle={{ padding: 4 }} style={{ width: "220px" }}>
                <p className="text">第一种处方药</p>
                <p>
                由浦东药店运出
                </p>
                <p>2021/9/5</p>
              </Card>
              <div className="line">
                <div></div>
                <RightOutlined />
              </div>
            </div>
            <div className="arrow-wrap">
              <Card bodyStyle={{ padding: 4 }} style={{ width: "220px" }}>
                <p className="text">第一种处方药</p>
                <p>
                由龙寓签收
                </p>
                <p>2021/9/8</p>
              </Card>
              <div className="line">
                <div></div>
                <RightOutlined />
              </div>
            </div>
            <div className="arrow-wrap">
              <Card bodyStyle={{ padding: 4 }} style={{ width: "220px" }}>
                <p className="text">第一种处方药</p>
                <p>
                由患者签收
                </p>
                <p>2021/9/9</p>
              </Card>
            </div>
          </Col>
        </Row>
      </div>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
