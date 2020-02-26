import React, { Component } from "react";
import LoginForm from "../../components/login/LoginForm";

import styles from "./login.module.scss";

class Login extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles["login-box"]}>
          <h3 className={styles.title}>图书管理后台</h3>
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default Login;
