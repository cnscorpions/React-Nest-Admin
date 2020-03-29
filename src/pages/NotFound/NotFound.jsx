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
        <h1>404，找不到{location.state ? location.state.from : null}</h1>
        <div className={styles["desc"]}></div>
        <div className={styles["actions"]}>
          <a href="/">
            <span>回到首页</span>
          </a>
        </div>
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

export default NotFound;
