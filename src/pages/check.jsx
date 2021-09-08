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
          <div className="">{arr.length} 个供应商可用</div>
          <br />
          <h2 className="">远程医疗访问</h2>
          <br />
          <div className="">
            在几分钟内就可以看到医生，在德克萨斯州的患者中，与高质量的医生和临床医生一起进行负担得起、简单且方便的远程医疗访问。不需要保险。
          </div>
          <br />
          <div className="btns">
            <Button>今天</Button>
            &nbsp; &nbsp;
            <Button>明天</Button>
            &nbsp; &nbsp;
            <Button>未来 3 天</Button>
          </div>
        </div>

        <div className="check-ban2 bg-center">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {arr.map((it, index) => (
                <div className={`swiper-slide ${index == 1 ? "active" : ""}`} key={it}>
                  <Card className="item">
                    <div className="its tinfo">
                      <div>
                        <p style={{ fontSize: "16px", fontWeight: 800 }}>Shola Akinfiresoye，（DNP，FNP-BC）</p>
                        <p>家庭医学</p>
                        <p>通过和响应通过和响应通过和响应通过和响应通过和响应通过和响应通过和响应通过和响应</p>
                        <p>
                          <Tag color="orange">今天有售</Tag>
                          &nbsp; &nbsp;
                          <Tag color="green">5 美元医药费</Tag>
                        </p>
                      </div>
                      <div>
                        <Avatar
                          size={64}
                          src="https://sesamecare.imgix.net/profile/dc49beea-724a-4c8f-a2fd-279f76fe83e8_1613759760.jpg?fit=facearea&faceIndex=1&facePad=3&format=auto&fm=webp&h=64"
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
          <p>以下包含和排除适用：</p>
          <div>
            <ul>
              <li>
                <span>√</span>处方，如果推荐
              </li>
              <li>
                <span>√</span>转诊给专家
              </li>
            </ul>
            <ul>
              <li>
                <span>×</span>受控物质处方
              </li>
              <li>
                <span>×</span>诊断测试（链球菌、流感、电晕）
              </li>
              <li>
                <span>×</span>免疫接种
              </li>
              <li>
                <span>×</span>实验室测试
              </li>
              <li>
                <span>×</span>工人补偿文件
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
