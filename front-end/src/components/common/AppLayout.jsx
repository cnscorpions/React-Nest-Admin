import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actionCreators/index";
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
  render() {
    const { isCollapsed, toggle } = this.props;

    return (
      <Layout className={styles.wrapper}>
        <Sider trigger={null} collapsible collapsed={isCollapsed}>
          {this.props.sidebar}
        </Sider>
        <Layout>
          <Header className={styles.header}>
            <Icon
              className={styles["trigger"]}
              type={isCollapsed ? "menu-unfold" : "menu-fold"}
              onClick={() => toggle(isCollapsed)}
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

const mapStateToProps = state => ({
  isCollapsed: state.layout.isCollapsed
});

const mapDispatchToProps = dispatch => {
  return {
    toggle(isCollapsed) {
      const action = isCollapsed
        ? actionCreators.spreadSidebar()
        : actionCreators.collapseSidebar();
      console.log(action);
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
