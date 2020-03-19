import React, { Component } from "react";
import { Table, Icon } from "antd";

const { Column } = Table;

export class EbookTable extends Component {
  constructor(props) {
    super(props);
    this.deleteHanler = this.deleteHanler.bind(this);
  }

  deleteHanler(id, filePath) {
    const { deleteItem } = this.props;
    deleteItem(id, filePath);
  }

  render() {
    const { data } = this.props;

    return (
      <Table dataSource={data} rowKey={record => record._id}>
        <Column title="文件名" dataIndex="originalName" key="originalName" />
        <Column title="上传者" dataIndex="author" key="author" />
        <Column title="上传时间" dataIndex="publisher" key="publisher" />
        <Column title="文件大小" dataIndex="language" key="language" />
        <Column
          title="操作"
          key="action"
          render={(text, record) => (
            <span>
              <Icon type="edit" style={{ marginRight: 16 }} />
              <Icon
                type="delete"
                onClick={() =>
                  this.deleteHanler(record["_id"], record["filePath"])
                }
              />
            </span>
          )}
        />
      </Table>
    );
  }
}

export default EbookTable;
