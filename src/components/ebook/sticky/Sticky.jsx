import React from "react";
import { Button } from "antd";
import * as styles from "./sticky.module.scss";

function Sticky(props) {
  return (
    <div className={styles.wrapper + " " + styles.sticky}>
      <div className={styles["btn-group"]}>
        <Button className={styles["btn-help"]}>显示帮助</Button>
        <Button className={styles["btn-add"]}>新增电子书</Button>
      </div>
    </div>
  );
}

export default Sticky;
