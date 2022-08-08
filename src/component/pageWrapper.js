import * as React from "react";
import { Link } from "gatsby";

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Typography, List } from "antd";

import "antd/dist/antd.css";

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

const menu = [
  {
    label: <Link to="/buildings">Building List</Link>,
    key: "1",
    icon: <DesktopOutlined />,
  },
  {
    label: <Link to="/tasks">Tasks List</Link>,
    key: "2",
    icon: <FileOutlined />,
  },
  {
    label: <Link to="/resources">Resources List</Link>,
    key: "3",
    icon: <PieChartOutlined />,
  },
  {
    label: <Link to="/">GO Home Page</Link>,
    key: "4",
    icon: <TeamOutlined />,
  },
];

const pageWrapper = ({ title, subTitle, items, getDescription, children }) => {
  const data =
    items &&
    Object.keys(items).map((key) => {
      return {
        title: items[key].display_name,
        key: key,
        description: getDescription({ key, items }),
      };
    });
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={menu}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Title style={{ color: "white", paddingLeft: "48px" }}>{title}</Title>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {subTitle && (
              <Title level={2} style={{ paddingLeft: "48px" }}>
                {subTitle}
              </Title>
            )}
            {children}
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    title={<span>{item.title}</span>}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          This game is so complicated that I had to do an app
        </Footer>
      </Layout>
    </Layout>
  );
};

export default pageWrapper;
