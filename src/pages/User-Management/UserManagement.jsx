import React from "react";
import { Table, Tag, Switch } from "antd";

import useFetch from "./useFetch";
import { getAllUserUrl } from "../../api/index";

const columns = [
  {
    title: "用户名",
    dataIndex: "username",
    key: "username",
    render: username => <span>{username}</span>
  },
  {
    title: "角色",
    key: "roles",
    dataIndex: "roles",
    render: roles => (
      <span>
        {roles.map(role => {
          let color = role === "admin" ? "geekblue" : "green";
          return (
            <Tag color={color} key={role}>
              {role.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    )
  },
  {
    title: "是否停用",
    key: "isEnabled",
    render: ({ isEnabled }) => (
      <Switch
        disabled
        checkedChildren="停用"
        unCheckedChildren="启用"
        checked={isEnabled}
      />
    )
  }
];

const UserManagement = props => {
  const data = useFetch(getAllUserUrl);

  return (
    <Table columns={columns} dataSource={data} rowKey={record => record._id} />
  );
};

export default UserManagement;
