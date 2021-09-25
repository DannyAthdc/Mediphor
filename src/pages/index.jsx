import React, { useEffect } from "react";
import { Button, Input, Avatar, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useReactive } from "ahooks";

import bg1 from "./../assets/img/2block.png";
import bg2 from "./../assets/img/2block.png";
import ban41 from "./../assets/img/index_pic3.jpg";
import ban42 from "./../assets/img/index_pic5.jpg";

import { get, post } from "./../fetch";
export default function Index() {
  return (
    <div className="index-wrap">
      <div className="index-banner">
      <div className="index-banner banner-card bg-center">
        <div>
          <h1>值得您绝对信任的线上医疗解决方案</h1>
          <p>
            通过区块链技术带来医疗数字身份、医药电商、医疗记录的全新变革，为您提供全新的数字化医疗体验，让您足不出户也能享受值得信任的医疗体系
          </p>
          <p>
            <Button type="primary" block style={{ fontSize: "18px", height: "36px" }}>
              开始医疗之旅
            </Button>
          </p>
        </div>
        <div>
          <img src={bg1} alt="" width="855" height="619" />
        </div>
      </div>

    </div>
      <div className="index-banner2">
        <div className="banner-card bg-center">
          <div>
            <img src={bg2} alt="" width="855" height="650" />
          </div>
          <div className="white-font">
            <h1 className="white-font">采用区块链存证、溯源技术</h1>
            <p>将互联网医疗传统的信任薄弱环节打通，为您提供如传统医疗般放心的医疗体验</p>
          </div>
        </div>
      </div>
      <div className="index-banner3">
        <div className="index-ban3 bg-center">
          <div>
            <h1>建立你的身份</h1>
            <p>在Fisco bcos医疗联盟链上建立陪伴您一生的数字身份</p>
            <p>
              <Button type="primary" style={{ fontSize: "18px", height: "46px" }}>
                注册开始
              </Button>
            </p>
          </div>
        </div>
      </div>
      <div className="index-banner4">
        <div className="index-ban4 bg-center">
          <div className="tit">
            <h1>这些是你可以得到的服务</h1>
            <p>线上医疗、医药电商和健康数字身份</p>
          </div>
          <div className="imgs">
            <img src={ban41} alt="" />
            <img src={ban42} alt="" />
          </div>
          <br />
          <div className="infos">
            <div>
              <div className="info">
                采用实时视频技术，并辅以文字聊天系统，由经链上医师身份认证的专业医生全方位地为您进行医护检查，并将结果返回于您
              </div>
              <br />
              <div>
                <Avatar size={60} icon={<UserOutlined />} src={bg1}/>
                &nbsp; &nbsp;
                <span>线上医疗</span>
              </div>
            </div>
            <div>
              <div className="info">
                采用链上药单、药品溯源、LBS最优调度的方法，提供放心可靠的医药（处方药）配送服务，快而安全地送达您手中
              </div>
              <br />
              <div>
                <Avatar size={60} icon={<UserOutlined />} src={bg1}/>
                &nbsp; &nbsp;
                <span>医药电商</span>
              </div>
            </div>
            <div>
              <div className="info">
                建立全面的数字健康身份，通过病历存证的方式，为您提供一生健康的记录保障与身份认证
              </div>
              <br />
              <div>
                <Avatar size={60} icon={<UserOutlined />} src={bg1}/>
                &nbsp; &nbsp;
                <span>健康身份</span>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="colors">
            <div>
              <h1>任何在职/非在职医生、各类患者、各类药店和医疗机构都可以接入我们的网络</h1>
              <p>
                <Button type="primary" danger style={{ fontSize: "18px", height: "60px" }}>
                  了解更多: Mediphor是怎么通过区块链技术为您提供信任帮助的呢？
                </Button>
              </p>
            </div>
          </div>
          <div className="imgs-wrap">
          <div>
              <img
                width="400"
                height="75"
                src={bg1}
              ></img>
            </div>
            <div>
              <img
                width="400"
                height="75"
                src={bg1}
              ></img>
            </div>
            <div>
              <img
                width="400"
                height="75"
                src={bg1}
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-center bg-center">
          <Row gutter={20}>
            <Col span={6} className="bar">
              <p>Mediphor</p>
              <ul>
                <li>About Us</li>
                <li>About Us</li>
                <li>About Us</li>
                <li>About Us</li>
                <li>About Us</li>
              </ul>
            </Col>
            <Col span={6} className="bar">
              <p>Mediphor</p>
              <ul>
                <li>About Us</li>
                <li>About Us</li>
                <li>About Us</li>
                <li>About Us</li>
                <li>About Us</li>
              </ul>
            </Col>
            <Col span={6} className="bar">
              <p>Mediphor</p>
              <ul>
                <li>About Us</li>
                <li>About Us</li>
                <li>About Us</li>
                <li>About Us</li>
                <li>About Us</li>
              </ul>
            </Col>
            <Col span={6} className="bar">
              <p>Mediphor</p>
              <ul>
                <li>About Us</li>
                <li>About Us</li>
                <li>About Us</li>
                <li>About Us</li>
                <li>About Us</li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
