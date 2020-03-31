import React from "react";
import { getRoles } from "utils/storage";

import * as styles from "./notAllow.module.scss";

function NotAllow(props) {
  const roles = getRoles();

  return (
    <div className={styles["wrapper"]}>
      <h3>角色{roles}无权访问</h3>
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

export default NotAllow;
