import React from "react";
import { uploadEbook } from "../../../api/index";
import { Upload, message, Icon } from "antd";

const { Dragger } = Upload;

const host =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:23000"
    : "http://120.55.47.104:12833";

const customUpload = async info => {
  const { file } = info;

  // create formData instance
  const bodyFormData = new FormData();
  bodyFormData.append("file", file);

  uploadEbook(bodyFormData)
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
          <Icon type="inbox" />
        </p>
        <p className="ant-upload-text">点击或拖拽上传</p>
      </Dragger>
    </div>
  );
}

export default UploadEbook;
