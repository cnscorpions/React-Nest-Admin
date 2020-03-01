import React, { Component } from "react";
import { Layout, Menu, Icon, Tooltip, Dropdown } from "antd";
import styles from "./AppLayout.module.scss";

const { Header, Sider, Content } = Layout;

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
      collapsed: false
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
          {this.props.sidebar}
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
            {this.props.content}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default AppLayout;
