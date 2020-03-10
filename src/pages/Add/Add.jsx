import React, { Component } from "react";
import Sticky from "../../components/ebook/sticky/Sticky";
import UploadEbook from "../../components/ebook/upload/Upload";
import EbookForm from "../../components/ebook/info/EbookForm";
import * as styles from "./add.module.scss";

class Add extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Sticky />
        <UploadEbook />
        <EbookForm />
      </div>
    );
  }
}

export default Add;
