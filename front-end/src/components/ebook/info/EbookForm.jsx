import React from "react";
import { Form, Input, Button } from "antd";
import * as styles from "./ebookForm.module.scss";

const items = [
  {
    label: "书名",
    name: "bookName"
  },
  {
    label: "作者",
    name: "author"
  },
  {
    label: "出版社",
    name: "publisher"
  },
  {
    label: "语言",
    name: "language"
  },
  {
    label: "根文件",
    name: "rootFile"
  },
  {
    label: "文件路径",
    name: "filePath"
  },
  {
    label: "解压路径",
    name: "unzipPath"
  },
  {
    label: "封面路径",
    name: "coverPath"
  },
  {
    label: "文件名称",
    name: "fileName"
  },
  {
    label: "封面",
    name: "cover"
  },
  {
    label: "目录",
    name: "catagory"
  }
];

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};

const getFormItem = items => {
  const els = items.map((item, index) => (
    <Form.Item
      key={index}
      label={item.label}
      name={item.name}
      rules={[
        {
          required: true,
          message: `请输入！${item.label}`
        }
      ]}
      className={styles["form-item"]}
    >
      <Input />
    </Form.Item>
  ));
  return els;
};

function EbookForm(props) {
  return (
    <Form {...layout} name="basic" className={styles.form}>
      {getFormItem(items)}
      <Form.Item {...tailLayout} className={styles["form-item-submit"]}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
}

export default EbookForm;
