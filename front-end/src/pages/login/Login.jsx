import React from "react";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import LoginForm from "../../components/login/LoginForm";

import styles from "./login.module.scss";

function Login(props) {
  let history = useHistory();
  let location = useLocation();

  // 路径
  let { from } = location.state || { from: { pathname: "/" } };

  let login = () => {
    if (props.isAuth) {
      history.replace(from);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles["login-box"]}>
        <h3 className={styles.title}>图书管理后台</h3>
        <LoginForm submitToParent={login} />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, null)(Login);
