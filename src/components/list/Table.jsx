import React, { Component } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { Table, Tag, Pagination } from "antd";
import { numberToTime, kbToMb } from "utils/pipes";

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
      <>
        <Table
          dataSource={data}
          rowKey={record => record._id}
          pagination={false}
        >
          <Column title="文件名" dataIndex="fileName" key="fileName" />
          <Column
            title="上传者"
            dataIndex="uploader"
            key="uploader"
            render={record => (
              <span>
                {record === "admin" ? (
                  <Tag color="geekblue">admin</Tag>
                ) : (
                  record
                )}
              </span>
            )}
          />
          <Column
            title="上传时间"
            dataIndex="timeOfUpload"
            key="timeOfUpload"
            render={record => <span>{numberToTime(record)}</span>}
          />
          <Column
            title="文件大小"
            dataIndex="fileSize"
            key="fileSize"
            render={record => <span>{kbToMb(record)}</span>}
          />
          <Column
            title="操作"
            key="action"
            render={record => (
              <span>
                <DeleteOutlined
                  onClick={() =>
                    this.deleteHanler(record["_id"], record["filePath"])
                  }
                />
              </span>
            )}
          />
        </Table>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingTop: "20px",
            paddingRight: "20px"
          }}
        >
          <Pagination
            defaultCurrent={1}
            defaultPageSize={10}
            total={50}
            hideOnSinglePage
          />
        </div>
      </>
    );
  }
}

export default EbookTable;
