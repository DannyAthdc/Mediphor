import React from "react";
import { Button, Avatar, Card, Tag, Tabs, Input, Row, Col, Menu } from "antd";
import { RightOutlined, SearchOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { useReactive } from "ahooks";

const arr = Array(12)
  .fill()
  .map((_, i) => i);

const tabs = ["A", "B"];

export default function UserInfo() {
  const his = useHistory();

  const state = useReactive({
    act: 0,
  });

  return (
    <div className="u-info-wrap">
      <div className="u-info-banner1">
        <div className="u-info-ban1 bg-center">
          <div className="info">
            <img src="" alt="" />
            <p>sdasdasd</p>
          </div>
        </div>
      </div>
      <div className="u-info-banner2 bg-center">
        <Card style={{ width: "100%", height: "260px" }} bodyStyle={{ textAlign: "center" }}>
          用户信息介绍文本123123123123
        </Card>
      </div>

      <div className="u-info-banner3 bg-center">
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
          <Col span={18}>
            <div className="my-tabs">
              <Input style={{ width: "50%" }} allowClear prefix={<SearchOutlined />} />
              <div className="tabs-my">
                {tabs.map((it, index) => (
                  <span
                    className={state.act == index ? "active" : ""}
                    key={it}
                    onClick={() => {
                      state.act = index;
                    }}
                  >
                    {it}资料
                  </span>
                ))}
              </div>
            </div>
            <br />
            <p>{arr.length} results</p>
            <div>
              <Row gutter={[20, 10]}>
                {arr.map((it, index) => (
                  <Col span={4} key={index}>
                    <Card
                      bodyStyle={{ padding: 8 }}
                      cover={
                        <img
                          alt="example"
                          src="https://up.enterdesk.com/edpic/f9/50/b0/f950b0aa078f3a0be7ba87f46a43705a.jpg"
                        />
                      }
                    >
                      <p className="text">介绍</p>
                    </Card>
                  </Col>
                ))}
              </Row>
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
