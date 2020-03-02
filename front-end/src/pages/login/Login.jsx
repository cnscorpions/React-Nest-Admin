import React from "react";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import * as actionCreators from "../../store/actionCreators/index";
import LoginForm from "../../components/login/LoginForm";

import styles from "./login.module.scss";

function Login(props) {
  let history = useHistory();
  let location = useLocation();

  // 路径
  let { from } = location.state || { from: { pathname: "/" } };

  const { changeAuthStateToAuth } = props;
  let login = ({ username, password }) => {
    // 修改auth状态，并且跳转
    changeAuthStateToAuth(username, password);
    history.replace(from);
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

const mapDispatchToProps = dispatch => {
  return {
    changeAuthStateToAuth(username, password) {
      // ajax request via redux thunk
      const action = actionCreators.login(username, password);
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
