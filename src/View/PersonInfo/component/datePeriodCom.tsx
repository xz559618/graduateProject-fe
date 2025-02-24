import React from "react";
import { Typography, Row, Col, Button } from "antd";

const { Text, Title } = Typography;

interface DatePeriodComProps {
  company: string;
  position: string;
  time: string;
  description: string;
  contribution: string;
}

const DatePeriodCom: React.FC<DatePeriodComProps> = ({
  company,
  position,
  time,
  description,
  contribution,
}) => {
  return (
    <div style={{ marginBottom: 16 }}>
      {/* 第一行：公司/项目名称 */}
      <Row justify="space-between">
        <Col>
          <Title level={4}>{company}</Title>
        </Col>
        <Col>
          <Button variant="text" color="primary" onClick={() => {}}>
            编辑
          </Button>
          <Button color="danger" variant="text">
            删除
          </Button>
        </Col>
      </Row>

      {/* 第二行：职位和时间 */}
      <Row justify="space-between">
        <Col>
          <Text strong>{position}</Text>
        </Col>
        <Col>
          <Text type="secondary">{time}</Text>
        </Col>
      </Row>

      {/* 第三行：描述 */}
      <Text>{description}</Text>

      {/* 第四行：个人贡献 */}
      <div style={{ marginTop: 8 }}>
        <Text strong>个人贡献：</Text>
        <Text>{contribution}</Text>
      </div>
    </div>
  );
};

export default DatePeriodCom;
