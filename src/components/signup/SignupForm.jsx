import React, { Component } from "react";
import { Form, Icon, Input, Button } from "antd";
import { registerUser } from "api/index";
import msgService from "../message/message";
import * as styles from "./SignupForm.module.scss";

class SignupForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        const { username, password } = values;
        if (username === "admin") {
          msgService("error", "无权注册admin用户");
          return false;
        }
        this.handleRequest(username, password);
      }
    });
  };

  // 发送请求
  handleRequest(username, password) {
    registerUser(username, password)
      .then(res => {
        msgService("success", "注册成功！");
        this.backToLogin();
      })
      .catch(error => {
        msgService("error", "用户已注册！");
        console.log(error);
      });
  }

  backToLogin() {
    const { submitToParent } = this.props;
    submitToParent();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className={styles["login-form"]}>
        <Form.Item>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "请输入用户名！" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="帐号"
              autoComplete="on"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "请输入密码！" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="密码"
              autoComplete="on"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={styles["login-form-button"]}
          >
            注册
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedSignupForm = Form.create({ name: "normal_login" })(SignupForm);

export default WrappedSignupForm;
