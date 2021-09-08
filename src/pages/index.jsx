import React, { useEffect } from "react";
import { Button, Input, Avatar, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";
// 阿里官方封装好hooks插件, 这里用到了其中的一个hooks, 快速开发
import { useReactive } from "ahooks";

import bg1 from "./../assets/img/bg.png";
import bg2 from "./../assets/img/bg2.png";
import ban41 from "./../assets/img/ban4-i1.jpg";
import ban42 from "./../assets/img/ban4-i2.jpg";

// 引入等装好的fetch方法  get和post
import { get, post } from "./../fetch";

export default function Index() {
  //   这里是定义字段来接受接口返回的参数
  const state = useReactive({
    act: 0,

    data: {},
  });
  // 这里是调用接口示例,
  const getdata = (params) => {
    get("http://poetry.apiopen.top/poetryFull", { count: 2, page: 1 }).then((res) => {
      console.log("res -> :", res);
    });
    get("http://poetry.apiopen.top/getTime").then((res) => {
      console.log("res -> :", res);
      //   拿到数据后赋值给state
      state.data = res.result;
    });
  };

  //   进入页面调用请求数据方法
  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="index-wrap">
      {/* <p>使用示例 {state.data.date}</p> */}

      <div className="index-banner banner-card bg-center">
        <div>
          <h1>Your Personal Doctor, Online</h1>
          <p>
            Partnering you with a doctor who really gets to know you, listens to you, and has time for you. Aligned with
            your life.
          </p>
          <p>
            <Button type="primary" block danger style={{ fontSize: "18px", height: "36px" }}>
              And Get Matched Now
            </Button>
          </p>
        </div>
        <div>
          <img src={bg1} alt="" width="855" height="619" />
        </div>
      </div>
      <div className="index-banner2">
        <div className="banner-card bg-center">
          <div>
            <img src={bg2} alt="" width="487" height="650" />
          </div>
          <div className="white-font">
            <h1 className="white-font">A Doctor who “Gets You”</h1>
            <p>Your SteadyMD doctor is perfectly aligned with your life, passions, and goals.</p>
          </div>
        </div>
      </div>
      <div className="index-banner3">
        <div className="index-ban3 bg-center">
          <div>
            <h1>Take the Quiz</h1>
            <p>Tell us about yourself and we’ll pair you with the perfect doctor.</p>
            <p>
              <Button type="primary" danger style={{ fontSize: "18px", height: "46px" }}>
                Get Matched Now
              </Button>
            </p>
          </div>
        </div>
      </div>
      <div className="index-banner4">
        <div className="index-ban4 bg-center">
          <div className="tit">
            <h1>Our Members Love Us</h1>
            <p>Here’s what they have to say</p>
          </div>
          <div className="imgs">
            <img src={ban41} alt="" />
            <img src={ban42} alt="" />
          </div>
          <br />
          <div className="infos">
            <div>
              <div className="info">
                “SteadyMD allows you to avoid the copays &amp; inconvenience of going to your doctor’s or pediatrician’s
                office–I can’t recommend it enough!”
              </div>
              <br />
              <div>
                <Avatar size={60} icon={<UserOutlined />} />
                &nbsp; &nbsp;
                <span>Stephanie, SteadyMD Member</span>
              </div>
            </div>
            <div>
              <div className="info">
                “SteadyMD allows you to avoid the copays &amp; inconvenience of going to your doctor’s or pediatrician’s
                office–I can’t recommend it enough!”
              </div>
              <br />
              <div>
                <Avatar size={60} icon={<UserOutlined />} />
                &nbsp; &nbsp;
                <span>Stephanie, SteadyMD Member</span>
              </div>
            </div>
            <div>
              <div className="info">
                “SteadyMD allows you to avoid the copays &amp; inconvenience of going to your doctor’s or pediatrician’s
                office–I can’t recommend it enough!”
              </div>
              <br />
              <div>
                <Avatar size={60} icon={<UserOutlined />} />
                &nbsp; &nbsp;
                <span>Stephanie, SteadyMD Member</span>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="colors">
            <div>
              <h1>Great for Anyone, Anywhere in the United States.</h1>
              <p>
                <Button type="primary" danger style={{ fontSize: "18px", height: "60px" }}>
                  Learn More: What is SteadyMD Primary Care?
                </Button>
              </p>
            </div>
          </div>
          <div className="imgs-wrap">
            <div>
              <img
                width="396"
                height="72"
                src="https://www.steadymd.com/wp-content/uploads/2020/04/whole-30@3x.png"
              ></img>
            </div>
            <div>
              <img
                width="400"
                height="75"
                src="https://www.steadymd.com/wp-content/uploads/2020/04/cnbc-logo-homepage-wide-2021-grey.png"
              ></img>
            </div>
            <div>
              <img
                width="400"
                height="75"
                src="https://www.steadymd.com/wp-content/uploads/2021/01/forbes-logo-2021-grey.png"
              ></img>
            </div>
            <div>
              <img
                width="400"
                height="75"
                src="https://www.steadymd.com/wp-content/uploads/2020/04/menshealth-logo-2021-grey.png"
              ></img>
            </div>
            <div>
              <img
                width="400"
                height="75"
                src="https://www.steadymd.com/wp-content/uploads/2020/04/Wellness_mama_logo_2021-grey.png"
              ></img>
            </div>
            <div>
              <img
                width="400"
                height="75"
                src="https://www.steadymd.com/wp-content/uploads/2021/01/inc-logo-2021-grey.png"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-center bg-center">
          <Row gutter={20}>
            <Col span={6} className="bar">
              <p>SteadyMD</p>
              <ul>
                <li>About Us</li>
                <li>About Us</li>
                <li>About Us</li>
                <li>About Us</li>
                <li>About Us</li>
              </ul>
            </Col>
            <Col span={6} className="bar">
              <p>SteadyMD</p>
              <ul>
                <li>About Us</li>
                <li>About Us</li>
                <li>About Us</li>
                <li>About Us</li>
                <li>About Us</li>
              </ul>
            </Col>
            <Col span={6} className="bar">
              <p>SteadyMD</p>
              <ul>
                <li>About Us</li>
                <li>About Us</li>
                <li>About Us</li>
                <li>About Us</li>
                <li>About Us</li>
              </ul>
            </Col>
            <Col span={6} className="bar">
              <p>SteadyMD</p>
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
