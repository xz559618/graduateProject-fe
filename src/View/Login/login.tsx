import React from "react";
import "./Login.css";
import HeaderNoLogin from "../../common/Header/headerNologin";
import { Input, Flex, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import background from "../../assets/background.svg";
import { Link, useNavigate } from "react-router-dom";

interface LoginProps {
  onLogin: (status: boolean) => void; // 接收父组件传递的方法
}

const imgStyle: React.CSSProperties = {
  display: "block",
  width: "50%",
};

function Login({ onLogin }: LoginProps) {
  const navigate = useNavigate();

  const handleLogin = () => {
    // 模拟登录成功
    const loginSuccess = true; // 根据实际登录逻辑判断
    if (loginSuccess) {
      onLogin(true); // 调用父组件的方法，更新登录状态
      navigate("/home"); // 跳转到首页
    }
  };

  return (
    <>
      <div>
        <div
          className="login-container"
          style={{ marginLeft: "23%", marginTop: 64 }}
        >
          <Flex>
            <img alt="avatar" src={background} style={imgStyle} />
            <Flex
              vertical
              align="flex-end"
              justify="center"
              gap="middle"
              style={{ padding: 32 }}
            >
              <div style={{ fontSize: 32 }}>
                一键登录简职
                <br />
                开启简单求职
              </div>
              <Input placeholder="输入账号"></Input>
              <Input.Password
                placeholder="输入密码"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
              <span>
                <Button
                  type="primary"
                  style={{ right: 10 }}
                  onClick={handleLogin}
                >
                  登录
                </Button>
                <Button type="default">
                  <Link to="/register">注册</Link>
                </Button>
              </span>
            </Flex>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default Login;
