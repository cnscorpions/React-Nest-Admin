import React from "react";
import { Form } from "@ant-design/compatible";
import "@ant-design/compatible/assets/index.css";
import { Input, Button } from "antd";
import * as styles from "./ebookForm.module.scss";

const items = [
  {
    label: "文件名称",
    name: "fileName",
    value: ""
  },
  {
    label: "原始文件名",
    name: "originalName",
    value: ""
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
      <Input value={item.value} />
    </Form.Item>
  ));
  return els;
};

function EbookForm(props) {
  // TODO: 之后处理，先隐藏掉
  if (true) {
    return null;
  }

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
