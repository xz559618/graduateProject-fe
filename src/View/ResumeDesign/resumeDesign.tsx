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
import { Layout, Menu, theme, Col, Row } from "antd";
import PdfModel from "../../testPdf/App";
import { position } from "html2canvas/dist/types/css/property-descriptors/position";
import { display } from "html2canvas/dist/types/css/property-descriptors/display";

const { Header, Content, Footer, Sider } = Layout;

const siderStyle: React.CSSProperties = {
  overflow: "auto",
  height: "calc(100vh - 46px)",
  position: "sticky",
  insetInlineStart: 0,
  margin: -20,
  top: 46,
  bottom: 0,
  backgroundColor: "#fff",
  scrollbarWidth: "thin",
  scrollbarGutter: "stable",
};

const ResumeDesign: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div style={{ width: "900px !important", margin: "0 auto" }}>
      <Layout
        hasSider
        style={{ padding: "0 !important", width: "900px !important" }}
      >
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
              {/* 所有的内容都是提供编辑的 */}
            </div>
          </Content>
        </Layout>
        <Sider style={siderStyle} width={400}>
          <div className="demo-logo-vertical">
            <PdfModel />
          </div>
        </Sider>
      </Layout>
    </div>
  );
};

export default ResumeDesign;
