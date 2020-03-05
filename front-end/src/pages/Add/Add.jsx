import React, { Component } from "react";
import Sticky from "../../components/ebook/sticky/Sticky";
import * as styles from "./add.module.scss";

class Add extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Sticky />
        <div className={styles.placeholder}></div>
      </div>
    );
  }
}

export default Add;
