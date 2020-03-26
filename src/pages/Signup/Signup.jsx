import React from "react";
import { useHistory } from "react-router-dom";
import SignupForm from "../../components/signup/SignupForm";

import styles from "./signup.module.scss";

function Signup(props) {
  let history = useHistory();

  const goLogin = () => {
    history.push("/login");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles["signup-box"]}>
        <h3 className={styles.title}>用户注册</h3>
        <SignupForm submitToParent={goLogin} />
      </div>
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
    </div>
  );
}

export default Signup;
