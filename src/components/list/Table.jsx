import React from "react";
import { Table } from "antd";

const { Column } = Table;

const EbookTable = props => {
  const { data } = props;
  // 添加key
  // const indexedData = data.map(item => {
  //   item["key"] = item["_id"];
  // });

  return (
    <Table dataSource={data}>
      <Column title="书名" dataIndex="originalName" key="originalName" />
      <Column title="作者" dataIndex="author" key="author" />
      <Column title="书名" dataIndex="publisher" key="publisher" />
      <Column title="语言" dataIndex="language" key="language" />
      <Column
        title="操作"
        key="action"
        render={(text, record) => (
          <span>
            <a style={{ marginRight: 16 }}>修改</a>
            <a>删除</a>
          </span>
        )}
      />
    </Table>
  );
};

export default EbookTable;
