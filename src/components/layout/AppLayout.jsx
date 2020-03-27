import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actionCreators/index";
import { useHistory } from "react-router-dom";

import { Layout, Menu, Icon, Dropdown, Avatar } from "antd";

import styles from "./AppLayout.module.scss";

const { Header, Sider, Content } = Layout;

const menu = (signOut, history) => (
  <Menu>
    <Menu.Item>
      <a
        href="https://github.com/cnscorpions/React-Nest-Admin"
        target="_blank"
        rel="noopener noreferrer"
      >
        源码
      </a>
    </Menu.Item>
    <Menu.Item onClick={() => signOut(history)}>
      <span>退出</span>
    </Menu.Item>
  </Menu>
);

const AppLayout = props => {
  let history = useHistory();

  // 结构赋值
  const { isCollapsed, username, toggle, signOut } = props;

  return (
    <Layout className={styles.wrapper}>
      <Sider trigger={null} collapsible collapsed={isCollapsed}>
        {props.sidebar}
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
            <Avatar
              style={{
                color: "#f56a00",
                backgroundColor: "#fde3cf",
                marginRight: "10px"
              }}
            >
              {username ? username[0] : ""}
            </Avatar>
            <span>
              <Icon type="notification" />
            </span>
            <span className={styles["icon-box"]}>
              <Dropdown
                overlay={() => menu(signOut, history)}
                placement="bottomCenter"
              >
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
            minHeight: 280,
            overflowY: "scroll"
          }}
        >
          {props.content}
        </Content>
      </Layout>
      <div
        style={{
          position: "absolute",
          bottom: "0px",
          width: "100%",
          textAlign: "center",
          backgroundColor: "#2d3a4b",
          color: "#eee",
          padding: "5px 0",
          fontSize: "12px"
        }}
      >
        鄂ICP备19026512号-3
      </div>
    </Layout>
  );
};

const mapStateToProps = state => ({
  isCollapsed: state.layout.isCollapsed,
  username: state.layout.username
});

const mapDispatchToProps = dispatch => {
  return {
    toggle(isCollapsed) {
      const action = isCollapsed
        ? actionCreators.spreadSidebar()
        : actionCreators.collapseSidebar();
      dispatch(action);
    },
    signOut(history) {
      const unAuth = actionCreators.unauthenticate();
      dispatch(unAuth);
      const setDefaultLayout = actionCreators.setDefaultLayout();
      dispatch(setDefaultLayout);
      history.push("/login");
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
