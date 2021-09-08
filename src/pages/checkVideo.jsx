import React, { useEffect } from "react";
import { Row, Col, Button, Avatar, Card, Input } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

export default function CheckVideo() {
  const his = useHistory();

  return (
    <div className="checkVideo-wrap">
      <div className=" checkVideo-banner1 bg-center">
        <Row gutter={16}>
          <Col span={18}>
            <Card
              title={
                <a
                  onClick={() => {
                    his.push("/check");
                  }}
                >
                  <LeftOutlined />
                  返回医生列表
                </a>
              }
            >
              <div className="img-wrap">
                <img
                  src="https://tse1-mm.cn.bing.net/th/id/R-C.415433df7e7698d355b17e8e16a38da1?rik=i8vWxYpNvaEskg&riu=http%3a%2f%2fwww.infertilitybridge.com%2fuploads%2fallimg%2f171115%2f11-1G1151111319D.jpg&ehk=trtUAnici10OkjFvF1h7OT%2bDdIH8lHTiptVQL6i4v6A%3d&risl=&pid=ImgRaw&r=0"
                  alt=""
                />
              </div>
            </Card>
          </Col>
          <Col span={6}>
            <Card title={<span>Group Chat</span>} bodyStyle={{ paddingBottom: "6px" }}>
              <div className="chat-img">
                <img src="https://pic4.zhimg.com/v2-3e9d486a7bbe41c8a3332572ba656803_r.jpg" alt="" />
              </div>
              {/* <ul>
                <li></li>
              </ul> */}
              <div style={{ marginTop: 18 }}>
                <Input.TextArea placeholder="Write your message ..." />
                <p style={{ textAlign: "right", marginTop: 10 }}>
                  <Button type="primary">提交</Button>
                </p>
              </div>
            </Card>
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
