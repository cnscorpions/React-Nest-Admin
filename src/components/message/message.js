import { message } from "antd";
import * as msgTypes from "utils/constant";

const msgService = (type, msg) => {
  switch (type) {
    case msgTypes.MSG_SUCCESS:
      return message.success(msg);
    case msgTypes.MSG_ERROR:
      return message.error(msg);
    default:
      return null;
  }
};

export default msgService;
