import React, { Component } from "react";
import { Layout, Menu, Icon, Tooltip, Dropdown } from "antd";
import styles from "./AppLayout.module.scss";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        源码
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        退出
      </a>
    </Menu.Item>
  </Menu>
);

class AppLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      redirect: null
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Layout className={styles.wrapper}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Icon type="dashboard" />
              <span>首页</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="book" />
                  <span>图书管理</span>
                </span>
              }
            >
              <Menu.Item key="sub1-1">
                <Icon type="menu" />
                <span>图书列表</span>
              </Menu.Item>
              <Menu.Item key="sub1-2">
                <Icon type="edit" />
                <span>添加图书</span>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="2">
              <Icon type="github" />
              <span>Githu</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className={styles.header}>
            <Icon
              className={styles["trigger"]}
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
            <span className={styles.home}>首页</span>
            <div className={styles["icon-group"]}>
              <span className={styles["icon-box"]}>
                <Icon className={styles.icon} type="fullscreen" />
              </span>
              <span className={styles["icon-box"]}>
                <Tooltip placement="bottom" title="字体大小">
                  <Icon className={styles.icon} type="font-size" />
                </Tooltip>
              </span>
              <span className={styles["icon-box"]}>
                <Dropdown overlay={menu} placement="bottomCenter">
                  <Icon className={styles.icon} type="more" />
                </Dropdown>
              </span>
            </div>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default AppLayout;
