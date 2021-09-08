import React from "react";
import { Button, Card, Input, Form } from "antd";
import { useReactive } from "ahooks";

export default function FormThree() {
  const state = useReactive({});

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="form-two-wrap">
      <div className="form-two-banner1 ">
        <Card className="bg-center" style={{ marginTop: "80px" }}>
          <Form style={{ width: "85%", margin: "0 auto" }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <h2>联系信息</h2>

            <Form.Item label="电子邮件" name="email">
              <Input bordered={false} readOnly="readonly" placeholder="电子邮件" className="my-input" />
            </Form.Item>

            <h2>你的资料</h2>
            <Form.Item label="谁将在这次访问中和医生见面">我</Form.Item>

            <Form.Item style={{ width: "45%", display: "inline-block", marginRight: "10px" }} label="名" name="email">
              <Input bordered={false} placeholder="名" readOnly="readonly" className="my-input" />
            </Form.Item>
            <Form.Item label="姓" style={{ width: "45%", display: "inline-block" }} name="email">
              <Input bordered={false} placeholder="姓" readOnly="readonly" className="my-input" />
            </Form.Item>
            <Form.Item style={{ width: "45%", display: "inline-block", marginRight: "10px" }} label="出生日期">
              2021-09-07
            </Form.Item>
            <Form.Item label="性别" style={{ width: "45%", display: "inline-block" }}>
              男
            </Form.Item>

            <Form.Item
              style={{ width: "45%", display: "inline-block", marginRight: "10px" }}
              label="手机号"
              name="phone"
            >
              <Input bordered={false} readOnly="readonly" placeholder="手机号" className="my-input" />
            </Form.Item>

            <Form.Item label="就诊原因" name="name">
              <Input.TextArea showCount readOnly="readonly" maxLength={500} rows="6" placeholder="就诊原因" />
            </Form.Item>

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
