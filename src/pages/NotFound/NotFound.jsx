import React from "react";
import { useLocation } from "react-router-dom";

import * as styles from "./notFound.module.scss";

function NotFound(props) {
  let location = useLocation();
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["imgBlock"]}>
        <div className={styles["imgEle"]}></div>
      </div>
      <div className={styles["content"]}>
        <h1>404</h1>
        <div className={styles["desc"]}></div>
        <div className={styles["actions"]}>
          <a href="/">
            <span>回到首页</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
