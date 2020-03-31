import React, { Component } from "react";
import { Form, Icon, Input, Button } from "antd";
import { resetPwd } from "api/index";
import msgService from "../message/message";
import * as styles from "./reset-pwd-form.module.scss";

class ResetPwdForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        const { username, oldPwd, newPwd } = values;
        this.handleRequest(username, oldPwd, newPwd);
      }
    });
  };

  handleRequest(username, oldPwd, newPwd) {
    resetPwd(username, oldPwd, newPwd)
      .then(res => {
        msgService("success", "修改密码成功！");
        this.backToLogin();
      })
      .catch(error => {
        msgService("error", "重置密码失败，请重新提交！");
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
          {getFieldDecorator("oldPwd", {
            rules: [{ required: true, message: "请输入原密码！" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="原密码"
              autoComplete="on"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("newPwd", {
            rules: [{ required: true, message: "请输入新密码！" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="新密码"
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
            提交
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedResetPwdForm = Form.create({ name: "normal_login" })(ResetPwdForm);

export default WrappedResetPwdForm;
