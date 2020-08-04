import React from "react";
import { useHistory } from "react-router-dom";
import ResetPwdForm from "components/resetPwd/ResetPwdForm";
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
      {/* <div
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
      </div> */}
    </div>
  );
}

export default ResetPwd;
