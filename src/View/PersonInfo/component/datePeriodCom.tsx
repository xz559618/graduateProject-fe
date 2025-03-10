import React from "react";
import { Typography, Row, Col, Button } from "antd";
import moment from "moment";

const { Text, Title } = Typography;

interface DatePeriodComProps {
  company: string;
  position: string;
  time: string;
  description: string;
  contribution: string;
  handleEditClick: (item?: any) => void;
  timeRange: [Date, Date];
}

const DatePeriodCom: React.FC<DatePeriodComProps> = ({
  company,
  position,
  time,
  timeRange,
  description,
  contribution,
  handleEditClick,
}) => {
  const formattedTimePeriod = timeRange
    ? timeRange.map((date) => moment(date).format("YYYY-MM-DD")).join(" 至 ")
    : "";
  return (
    <div style={{ marginBottom: 16 }}>
      {/* 第一行：公司/项目名称 */}
      <Row justify="space-between">
        <Col>
          <Title level={4}>{company}</Title>
        </Col>
        <Col>
          <Button
            variant="text"
            color="primary"
            onClick={() => {
              handleEditClick();
            }}
          >
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
          <Text type="secondary">{formattedTimePeriod}</Text>
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
