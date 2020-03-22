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
    </div>
  );
}

export default Signup;
