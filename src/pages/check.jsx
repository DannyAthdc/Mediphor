import React, { useEffect } from "react";
import { Button, Avatar, Card, Tag } from "antd";
import { useHistory } from "react-router-dom";

var arr = Array(12)
  .fill()
  .map((_, i) => i);

export default function Check() {
  const his = useHistory();

  useEffect(() => {
    initSwaip();
  }, []);

  const initSwaip = () => {
    var swiper = new Swiper(".swiper-container", {
      slidesPerView: 5,
      spaceBetween: 12,
      slidesPerGroup: 5,
      loop: false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  };

  return (
    <div className="check-wrap">
      <div className="check-banner1 ">
        <div className="check-ban1 bg-center">
          <div className="">{arr.length} 个医生可供选择</div>
          <br />
          <h2 className="">线上医疗挂号区</h2>
          <br />
          <div className="">
            点击选择医生并在几分钟之内获得医疗服务，请选择时间，点击滑动以选择您心仪的医生，以及记得打开您的摄像头和麦克风权限
          </div>
          <br />
          <div className="btns">
            <Button>今天</Button>
            &nbsp; &nbsp;
            <Button>明天</Button>
            &nbsp; &nbsp;
            <Button>未来一周</Button>
          </div>
        </div>

        <div className="check-ban2 bg-center">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {arr.map((it, index) => (
                <div className={`swiper-slide ${index == 0 ? "active" : ""}`} key={it}>
                  <Card className="item">
                    <div className="its tinfo">
                      <div>
                        <p style={{ fontSize: "16px", fontWeight: 800 }}>A医生</p>
                        <p>内科</p>
                        <p>擅长内科</p>
                        <p>
                          <Tag color="orange">17:00-19:00</Tag>
                          &nbsp; &nbsp;
                          <Tag color="green">30元</Tag>
                        </p>
                      </div>
                      <div>
                        <Avatar
                          size={64}
                          src=""
                        ></Avatar>
                      </div>
                    </div>
                    <div className="its lcor ">
                      <Button
                        onClick={() => {
                          his.push("/checkVideo");
                        }}
                      >
                        选择
                      </Button>
                      <span style={{ fontSize: "24px" }}>$30</span>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          <div className="sww-btns swiper-button-next"></div>
          <div className="sww-btns swiper-button-prev"></div>
        </div>

        <div className="check-ban3 bg-center">
          <p>可以获取的服务：</p>
          <div>
            <ul>
              <li>
                <span>√</span>处方药
              </li>
              <li>
                <span>√</span>转诊
              </li>
            </ul>
            <ul>
              <li>
                <span>√</span>线下体检
              </li>
              <li>
                <span>√</span>诊断测试
              </li>
              <li>
                <span>×</span>疫苗接种
              </li>
              <li>
                <span>√</span>长期关乎
              </li>
              <li>
                <span>√</span>智能服务
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
