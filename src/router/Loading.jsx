import React from "react";
import { Spin } from "antd";

const Loading = props => {
  if (props.error) {
    return (
      <div>
        Error! <button onClick={props.retry}>Retry</button>
      </div>
    );
  } else if (props.pastDelay) {
    return <Spin size="large" />;
  } else {
    return null;
  }
};

export default Loading;
