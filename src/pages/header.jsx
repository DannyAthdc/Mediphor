import React from "react";
import { Menu, Button } from "antd";
import { DownOutlined, CaretDownOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

import logo from "./../assets/img/logo.png";

const { SubMenu } = Menu;

export default function Header() {
  return (
    <div className="top-header">
      <div className="center bg-center">
        <div className="logo">
          <NavLink exact to="/">
            <img src={logo} alt="SteadyMD" className="nolazyload" />
          </NavLink>
        </div>
        <div className="nav">
          <Menu mode="horizontal" className="my-menu">
            <SubMenu
              key="user"
              title={
                <>
                  <span>用户</span>
                  <CaretDownOutlined />
                </>
              }
            >
              <Menu.Item key="user:1">
                <NavLink exact to="/check">
                  诊断
                </NavLink>
              </Menu.Item>
              <Menu.Item key="user:2">
                <NavLink exact to="/proof">
                  凭证
                </NavLink>
              </Menu.Item>
              <Menu.Item key="user:3">
                <NavLink exact to="/logis">
                  物流
                </NavLink>
              </Menu.Item>
              <Menu.Item key="user:4">
                <NavLink exact to="/userInfo">
                  个人主页
                </NavLink>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="doc"
              title={
                <>
                  <span>医生</span>
                  <CaretDownOutlined />
                </>
              }
            >
              <Menu.Item key="doc:1">
                <NavLink exact to="/formOne">
                  表单1
                </NavLink>
              </Menu.Item>
              <Menu.Item key="doc:2">
                <NavLink exact to="/formTwo">
                  表单2
                </NavLink>
              </Menu.Item>
              <Menu.Item key="doc:3">
                <NavLink exact to="/formThree">
                  检验
                </NavLink>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="org"
              title={
                <>
                  <span>机构</span>
                  <CaretDownOutlined />
                </>
              }
            >
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="org:1">机构 1</Menu.Item>
                <Menu.Item key="org:2">机构 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Item 2">
                <Menu.Item key="org:3">机构 3</Menu.Item>
                <Menu.Item key="org:4">机构 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>

          <Button type="primary" >
            开始
          </Button>
        </div>
      </div>
    </div>
  );
}
