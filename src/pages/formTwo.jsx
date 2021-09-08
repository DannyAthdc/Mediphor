import React from "react";
import { Button, Card, Input, Form, DatePicker, Radio } from "antd";

export default function FormTwo() {
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

            <Form.Item label="电子邮件" name="email" rules={[{ required: true, message: "电子邮件!" }]}>
              <Input bordered={false} placeholder="电子邮件" className="my-input" />
            </Form.Item>

            <h2>你的资料</h2>
            <Form.Item initialValue="1" label="谁将在这次访问中和医生见面" name="iswho">
              <Radio.Group>
                <Radio value="1">我</Radio>
                <Radio value="2">其他人</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              style={{ width: "45%", display: "inline-block", marginRight: "10px" }}
              label="名"
              name="email"
              rules={[{ required: true, message: "名!" }]}
            >
              <Input bordered={false} placeholder="名" className="my-input" />
            </Form.Item>
            <Form.Item
              label="姓"
              style={{ width: "45%", display: "inline-block" }}
              name="email"
              rules={[{ required: true, message: "姓!" }]}
            >
              <Input bordered={false} placeholder="姓" className="my-input" />
            </Form.Item>

            <Form.Item
              style={{ width: "45%", display: "inline-block", marginRight: "10px" }}
              label="出生日期"
              name="date"
              rules={[{ required: true, message: "出生日期!" }]}
            >
              <DatePicker style={{ width: "100%" }} placeholder="出生日期"></DatePicker>
            </Form.Item>
            <Form.Item label="性别" style={{ width: "45%", display: "inline-block" }} name="sex">
              <Radio.Group>
                <Radio value="1">男</Radio>
                <Radio value="2">女</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              style={{ width: "45%", display: "inline-block", marginRight: "10px" }}
              label="手机号"
              name="phone"
              rules={[{ required: true, message: "手机号!" }]}
            >
              <Input bordered={false} placeholder="手机号" className="my-input" />
            </Form.Item>

            <Form.Item label="就诊原因" name="name">
              <Input.TextArea showCount maxLength={500} rows="6" placeholder="就诊原因" />
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
