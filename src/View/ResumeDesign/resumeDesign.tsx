import React from "react";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const siderStyle: React.CSSProperties = {
  overflow: "auto",
  height: "calc(100vh - 46px)",
  position: "sticky",
  insetInlineStart: 0,
  margin: -20,
  top: 46,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarGutter: "stable",
};

const items: MenuProps["items"] = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

const ResumeDesign: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout hasSider style={{ padding: "0 !important" }}>
      <Layout>
        <Content style={{ overflow: "initial" }}>
          <div
            style={{
              padding: 24,
              textAlign: "center",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <p>long content</p>
            {
              // indicates very long content
              Array.from({ length: 100 }, (_, index) => (
                <React.Fragment key={index}>
                  {index % 20 === 0 && index ? "more" : "..."}
                  <br />
                </React.Fragment>
              ))
            }
          </div>
        </Content>
      </Layout>
      <Sider style={siderStyle}>
        <div className="demo-logo-vertical" />
      </Sider>
    </Layout>
  );
};

export default ResumeDesign;
