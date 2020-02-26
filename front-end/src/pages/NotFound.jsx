import React from "react";
import { useLocation } from "react-router-dom";

function NotFound(props) {
  let location = useLocation();
  return (
    <div>
      <h3>
        404 not found. <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default NotFound;
