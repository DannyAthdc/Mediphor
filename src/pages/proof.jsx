import React, { useEffect } from "react";
import { Button, Avatar, Card, Tag, Tabs, Input, Row, Col } from "antd";
import { useHistory } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { useReactive } from "ahooks";

const arr = Array(12)
  .fill()
  .map((_, i) => i);

const tabs = ["A", "B"];

export default function Proof() {
  const his = useHistory();

  const state = useReactive({
    act: 0,
  });

  return (
    <div className="proof-wrap">
      <Card bodyStyle={{ padding: 12 }}>
        <div className="proof-banner1 bg-center">
          <div className="top-ban1">
            <Input style={{ width: "820px" }} allowClear prefix={<SearchOutlined />} />
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
        </div>
      </Card>
      <div className="proof-banner2 bg-center">
        <Card>
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
                    <p>
                      <Button block type="primary">
                        提交
                      </Button>
                    </p>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Card>
      </div>
    </div>
  );
}
