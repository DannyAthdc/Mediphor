import React from "react";
import { Button, Avatar, Card, Tag, Tabs, Input, Row, Col, Form, Select, DatePicker } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useReactive } from "ahooks";

const tabs = ["A", "B"];

export default function formOne() {
  const state = useReactive({
    act: 0,
  });

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="form-one-wrap">
      <Card bodyStyle={{ padding: 12 }}>
        <div className="form-one-banner1 bg-center">
          <div className="form-one-ban1">
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
      <br />
      <br />
      <div className="form-one-banner2 ">
        <Card className="bg-center">
          <Form style={{ width: "70%", margin: "0 auto" }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <Row gutter={20}>
              <Col span={12}>
                <Form.Item
                  label="PIC Name"
                  name="name"
                  rules={[{ required: true, message: "Please input your PIC Name!" }]}
                >
                  <Select style={{ width: "100%" }} placeholder="PIC Name">
                    <Select.Option value="1">1</Select.Option>
                    <Select.Option value="2">2</Select.Option>
                    <Select.Option value="3">3</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label="Date Request"
                  name="date"
                  rules={[{ required: true, message: "Please input your Date Request!" }]}
                >
                  <DatePicker placeholder="Date Request" style={{ width: "100%" }}></DatePicker>
                </Form.Item>
                <Form.Item
                  label="Section Code"
                  name="name"
                  rules={[{ required: true, message: "Please input your Section Code!" }]}
                >
                  <Input bordered={false} placeholder="Section Code" className="my-input" />
                </Form.Item>
                <Form.Item
                  label="Model code"
                  name="name"
                  rules={[{ required: true, message: "Please input your Model code!" }]}
                >
                  <Input bordered={false} placeholder="Model code" className="my-input" />
                </Form.Item>
                <br />
                <br />
                <Form.Item
                  label="PIC Name"
                  name="name"
                  rules={[{ required: true, message: "Please input your PIC Name!" }]}
                >
                  <Input bordered={false} placeholder="PIC Name" className="my-input" />
                </Form.Item>
                <Form.Item
                  label="Date Request"
                  name="name"
                  rules={[{ required: true, message: "Please input your Date Request!" }]}
                >
                  <Input bordered={false} placeholder="Date Request" className="my-input" />
                </Form.Item>
                <Form.Item
                  label="Section Code"
                  name="name"
                  rules={[{ required: true, message: "Please input your Section Code!" }]}
                >
                  <Input bordered={false} placeholder="Section Code" className="my-input" />
                </Form.Item>
                <Form.Item
                  label="Model code"
                  name="name"
                  rules={[{ required: true, message: "Please input your Model code!" }]}
                >
                  <Input bordered={false} placeholder="Model code" className="my-input" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="PIC Name"
                  name="name"
                  rules={[{ required: true, message: "Please input your PIC Name!" }]}
                >
                  <Input bordered={false} placeholder="PIC Name" className="my-input" />
                </Form.Item>
                <Form.Item
                  label="Date Request"
                  name="name"
                  rules={[{ required: true, message: "Please input your Date Request!" }]}
                >
                  <Input bordered={false} placeholder="Date Request" className="my-input" />
                </Form.Item>
                <Form.Item
                  label="Section Code"
                  name="name"
                  rules={[{ required: true, message: "Please input your Section Code!" }]}
                >
                  <Input bordered={false} placeholder="Section Code" className="my-input" />
                </Form.Item>
                <Form.Item
                  label="Model code"
                  name="name"
                  rules={[{ required: true, message: "Please input your Model code!" }]}
                >
                  <Input bordered={false} placeholder="Model code" className="my-input" />
                </Form.Item>
                <Form.Item label="Order List" name="name">
                  <Input.TextArea rows="6" placeholder="Order List" />
                </Form.Item>
              </Col>
            </Row>
            <div style={{ textAlign: "center" }}>
              <Button type="primary" htmlType="submit" style={{ width: "30%" }}>
                提交
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
}
