import React from "react";
import { useHistory } from "react-router-dom";
import ResetPwdForm from "../../components/resetPwd/ResetPwdForm";
import * as styles from "./reset-pwd.module.scss";

function ResetPwd(props) {
  let history = useHistory();

  const goLogin = () => {
    history.push("/login");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles["reset-pwd-box"]}>
        <h3 className={styles.title}>重置密码</h3>
        <ResetPwdForm submitToParent={goLogin} />
      </div>
    </div>
  );
}

export default ResetPwd;
