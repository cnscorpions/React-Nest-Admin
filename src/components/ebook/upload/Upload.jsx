import React from "react";
import { getUser } from "utils/storage";
import { uploadFile } from "api/index";
import { InboxOutlined } from "@ant-design/icons";
import { Upload, message } from "antd";

const { Dragger } = Upload;

const customUpload = async info => {
  const { file } = info;

  // create formData instance
  const bodyFormData = new FormData();
  bodyFormData.append("file", file);
  const user = getUser();
  bodyFormData.append("user", user);

  uploadFile(bodyFormData)
    .then(res => {
      console.log(res);
      message.success(`${info.file.name} file uploaded successfully.`);
    })
    .catch(error => {
      console.log(error);
      message.error(`${info.file.name} file upload failed.`);
    });
};

const props = {
  customRequest: customUpload
};

function UploadEbook() {
  return (
    <div style={{ height: "240px" }}>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">点击或拖拽上传</p>
      </Dragger>
    </div>
  );
}

export default UploadEbook;
