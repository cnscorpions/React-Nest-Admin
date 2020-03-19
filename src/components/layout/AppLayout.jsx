import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actionCreators/index";
import { useHistory } from "react-router-dom";

import { Layout, Menu, Icon, Dropdown } from "antd";
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
  const { isCollapsed, toggle, signOut } = props;

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
            minHeight: 280
          }}
        >
          {props.content}
        </Content>
      </Layout>
    </Layout>
  );
};

const mapStateToProps = state => ({
  isCollapsed: state.layout.isCollapsed
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
      const action = actionCreators.unauthenticate();
      dispatch(action);
      history.push("/login");
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
